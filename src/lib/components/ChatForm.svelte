<script lang="ts">
	import { slide } from 'svelte/transition';

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
	{#if input}
		<div class="ms-4" transition:slide={{ axis: 'x' }}>
			<button
				type="submit"
				class="text-nowrap rounded-full bg-[#FA6E81] p-4 font-semibold text-[#090D15] disabled:cursor-not-allowed disabled:bg-[#FA6E81]/50 md:min-w-32"
				disabled={!input || isLoading}
				transition:slide={{ axis: 'x', duration: 200 }}
			>
				<span class="hidden md:block">{isLoading ? 'Loading...' : 'Send'}</span>
				<span class="block md:hidden">{'-->'}</span>
			</button>
		</div>
	{/if}
</form>
