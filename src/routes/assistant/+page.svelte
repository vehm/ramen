<script lang="ts">
	import { useAssistant } from '@ai-sdk/svelte';

	import { ChatForm, ChatMessageList, Navbar, WelcomeCard } from '$lib/components';

	const { input, submitMessage, messages, status, stop } = useAssistant({
		api: '/api/assistant'
	});
</script>

<svelte:head>
	<title>
		{$status}
	</title>
</svelte:head>

<main class="h-dvh max-h-dvh overflow-auto">
	<div class="flex h-full items-center justify-center">
		<div class="flex h-full w-full max-w-3xl flex-col justify-center gap-4 pb-4">
			{#if $messages.length === 0}
				<WelcomeCard />
			{:else}
				<Navbar />
				<ChatMessageList messages={$messages} />
			{/if}
			<ChatForm
				bind:input={$input}
				handleSubmit={submitMessage}
				handleStop={stop}
				isLoading={$status === 'in_progress'}
			/>
		</div>
	</div>
</main>
