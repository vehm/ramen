import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import type { RequestHandler } from './$types';

import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

const openai = createOpenAI({
	apiKey: privateEnv.OPENAI_API_KEY ?? ''
});

export const POST = (async ({ request }) => {
	const { messages } = await request.json();

	const result = streamText({
		model: openai(publicEnv.PUBLIC_OPENAI_MODEL ?? 'gpt-3.5-turbo'),
		messages
	});

	return result.toDataStreamResponse();
}) satisfies RequestHandler;
