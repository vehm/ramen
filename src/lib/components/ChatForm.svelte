<script lang="ts">
	import { slide } from 'svelte/transition';

	import { Brain, BrainCircuit, SendHorizontal } from 'lucide-svelte';

	type Props = {
		input: string;
		handleSubmit: (e: Event) => void;
		isLoading?: boolean;
	};

	let { input = $bindable(), handleSubmit, isLoading = false }: Props = $props();

	const placeholder = 'Have a question for me?';
</script>

<form onsubmit={handleSubmit} class="flex flex-row px-4">
	<input
		class="flex-1 rounded-full border border-[#8AA1A8] bg-[#090D15] p-4 text-white placeholder:text-[#8AA1A8]"
		{placeholder}
		bind:value={input}
	/>
	<button
		type="submit"
		class="ms-4 flex gap-2 text-nowrap rounded-full p-4 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-opacity-50 md:px-8 {isLoading
			? 'bg-[#10182B] text-white'
			: 'bg-[#FA6E81] text-[#090D15]'}"
		disabled={!input || isLoading}
		transition:slide={{ axis: 'x', duration: 200 }}
	>
		{#if isLoading}
			<Brain class="animate-pulse" />
		{:else}
			<SendHorizontal />
		{/if}
	</button>
</form>
