<script lang="ts">
	import type { Message } from 'ai';

	import { Pin, PinOff } from 'lucide-svelte';

	import { ChatMessage } from '.';

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

<ul class="flex flex-1 flex-col gap-8 overflow-y-auto px-4">
	{#each messages as { role, content }}
		<ChatMessage {role} {content} />
	{/each}
	<div bind:this={scrollToDiv} class="flex justify-end">
		<button
			title={stayScrolled
				? 'Stop auto-scrolling to incoming messages'
				: 'Auto-scroll to incoming messages'}
			onclick={() => (stayScrolled = !stayScrolled)}
			class="flex items-center gap-2 rounded-full p-2 text-center text-sm text-white/50 transition-colors hover:text-white/75"
		>
			{#if stayScrolled}
				Unpin Scroll <PinOff />
			{:else}
				Pin Scroll <Pin />
			{/if}
		</button>
	</div>
</ul>
