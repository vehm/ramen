import type { RequestHandler } from '@sveltejs/kit';
import { AssistantResponse } from 'ai';
import OpenAI from 'openai';

import { env as privateEnv } from '$env/dynamic/private';

// Types for `AssistantResponse` type safety
import type { AssistantStream } from 'openai/lib/AssistantStream.mjs';
import type { Run } from 'openai/resources/beta/threads/index.mjs';

export const config = {
	runtime: 'edge'
};

const openai = new OpenAI({
	apiKey: privateEnv.OPENAI_API_KEY || ''
});

export const POST = (async ({ request }) => {
	const input: {
		threadId: string | null;
		message: string;
	} = await request.json();

	const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

	const { id: messageId } = await openai.beta.threads.messages.create(threadId, {
		role: 'user',
		content: input.message
	});

	return AssistantResponse(
		{ threadId, messageId },
		async ({ forwardStream }: { forwardStream: (stream: AssistantStream) => Promise<Run> }) => {
			const runStream = openai.beta.threads.runs.stream(threadId, {
				assistant_id:
					privateEnv.ASSISTANT_ID ??
					(() => {
						throw new Error('ASSISTANT_ID is not set');
					})()
			});

			let runResult = await forwardStream(runStream);

			while (
				runResult?.status === 'requires_action' &&
				runResult.required_action?.type === 'submit_tool_outputs'
			) {
				const tool_outputs = runResult.required_action.submit_tool_outputs.tool_calls.map(
					(toolCall) => {
						switch (toolCall.function.name) {
							default:
								throw new Error(`Unknown tool call function: ${toolCall.function.name}`);
						}
					}
				);

				runResult = await forwardStream(
					openai.beta.threads.runs.submitToolOutputsStream(threadId, runResult.id, { tool_outputs })
				);
			}
		}
	);
}) satisfies RequestHandler;
