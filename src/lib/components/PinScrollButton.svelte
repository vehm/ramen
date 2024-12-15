<script lang="ts">
	import { Pin, PinOff } from 'lucide-svelte';

	type Props = {
		stayScrolled: Boolean;
	};

	let { stayScrolled = $bindable(true) }: Props = $props();
</script>

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
