<script lang="ts">
	import { Brain, Pause, SendHorizontal } from 'lucide-svelte';

	type Props = {
		input: string;
		handleSubmit: (e: Event) => void;
		handleStop: () => void;
		isLoading?: boolean;
	};

	let { input = $bindable(), handleSubmit, handleStop, isLoading = false }: Props = $props();

	const placeholder = 'Have a question for me?';
</script>

<form onsubmit={handleSubmit} class="flex flex-row p-4">
	<input
		class="flex-1 rounded-full border border-[#8AA1A8] bg-[#090D15] p-4 text-white placeholder:text-[#8AA1A8]"
		{placeholder}
		bind:value={input}
	/>
	{#if isLoading}
		<button
			type="button"
			onclick={handleStop}
			title="Stop"
			class="group ms-4 flex gap-2 text-nowrap rounded-full bg-[#10182B] bg-opacity-50 p-4 font-semibold text-white transition-all hover:bg-opacity-100 disabled:bg-opacity-50 md:px-8"
		>
			<Pause class="hidden group-hover:block" />
			<Brain class="animate-pulse group-hover:hidden" />
		</button>
	{:else}
		<button
			type="submit"
			title="Send"
			class="ms-4 flex gap-2 text-nowrap rounded-full bg-[#FA6E81] p-4 font-semibold text-[#090D15] transition-all disabled:bg-opacity-50 md:px-8"
			disabled={!input || isLoading}
		>
			<SendHorizontal />
		</button>
	{/if}
</form>
