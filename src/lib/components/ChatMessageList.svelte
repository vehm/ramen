<script lang="ts">
	import type { Message } from 'ai';

	import { ChatMessage } from '.';

	type Props = {
		messages: Message[];
	};

	let { messages }: Props = $props();

	let stayScrolled = $state(false);

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
	<div bind:this={scrollToDiv}>
		<button
			class="w-full rounded-full border border-[#8AA1A8]/50 p-1 text-center text-sm text-white/50 transition-colors hover:border-[#8AA1A8]/75"
			onclick={() => (stayScrolled = !stayScrolled)}
		>
			{stayScrolled ? 'Stop Scrolling' : 'Stay Scrolled'}
		</button>
	</div>
</ul>
