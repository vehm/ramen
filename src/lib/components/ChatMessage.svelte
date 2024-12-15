<script lang="ts">
	import { slide } from 'svelte/transition';
	import { marked } from 'marked';

	import { User } from 'lucide-svelte';

	import RamenMini from '$lib/assets/ramen_mini.svg';

	type Props = {
		role: string;
		content: string;
	};

	let { role, content }: Props = $props();

	let isUser = $derived(role === 'user');
</script>

<li class="flex gap-2" transition:slide>
	<div class="flex w-full flex-col gap-2">
		{#if isUser}
			<span class="flex items-center gap-2">
				<User class="h-6 w-6 rounded bg-[#8AA1A8] p-1 text-[#090d15]" />
				<span class="w-min text-nowrap text-xs uppercase text-[#8AA1A8]">You</span>
			</span>
		{:else}
			<span class="flex items-center gap-2">
				<img src={RamenMini} alt="Ramen Logo" class="h-6 w-6 rounded" />
				<span class="w-min text-nowrap text-xs uppercase text-[#FA6E81]">Ramen</span>
			</span>
		{/if}
		<p class="prose prose-invert break-words text-white">
			{@html marked.parse(content)}
		</p>
	</div>
</li>
