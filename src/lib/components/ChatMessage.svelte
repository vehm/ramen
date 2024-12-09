<script lang="ts">
	import { slide } from 'svelte/transition';
	import { marked } from 'marked';

	type Props = {
		role: string;
		content: string;
	};

	let { role, content }: Props = $props();
</script>

<li class="flex gap-2" transition:slide>
	<div>
		<div
			class="h-6 w-6 rounded-full"
			class:bg-[#8AA1A8]={role === 'user'}
			class:bg-[#FA6E81]={role === 'assistant'}
		></div>
	</div>
	<div class="flex flex-col gap-2">
		<span
			class="font-bold capitalize"
			class:text-[#8AA1A8]={role === 'user'}
			class:text-[#FA6E81]={role === 'assistant'}
		>
			{role}
		</span>
		<p class="prose prose-invert text-white">{@html marked.parse(content)}</p>
	</div>
</li>
