<script lang="ts">
	import { slide } from 'svelte/transition';

	type Props = {
		messages: string[];
		interval?: number;
		class?: string;
	};

	let { messages, interval = 1000, class: className }: Props = $props();

	let index = $state(0);

	$effect(() => {
		const intervalId = setInterval(() => {
			index = (index + 1) % messages.length;
		}, interval);

		return () => clearInterval(intervalId);
	});
</script>

{#key index}
	<span class="inline-flex {className}" transition:slide={{ axis: 'x' }}>
		{messages[index]}
	</span>
{/key}
