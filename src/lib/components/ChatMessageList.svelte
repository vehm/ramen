<script lang="ts">
	import type { Message } from 'ai';

	import { ChatMessage, PinScrollButton } from '.';

	type Props = {
		messages: Message[];
	};

	let { messages }: Props = $props();

	let stayScrolled = $state(true);

	let scrollToDiv: HTMLDivElement;
	const scrollToBottom = () => {
		if (!scrollToDiv) return;
		setTimeout(() => {
			scrollToDiv.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}, 100);
	};

	$effect(() => {
		if (messages && stayScrolled) scrollToBottom();
	});
</script>

<ul class="flex flex-1 flex-col gap-8 overflow-y-auto p-4">
	{#each messages as { role, content }}
		<ChatMessage {role} {content} />
	{/each}
	<div bind:this={scrollToDiv} class="flex justify-end">
		<PinScrollButton bind:stayScrolled />
	</div>
</ul>
