<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="/fonts/inter/inter.css" />
</svelte:head>

{@render children()}
