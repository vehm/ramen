<script lang="ts">
	import { useChat } from '@ai-sdk/svelte';

	import { ChatForm, ChatMessageList, Navbar, WelcomeCard } from '$lib/components';

	const { input, handleSubmit, messages, isLoading } = useChat();
</script>

<svelte:head>
	<title>
		{$isLoading
			? 'Thinking... 🧠'
			: $messages.length
				? 'Having a chat! 🍜'
				: "Hi there, let's chat! 🍜"}
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
			<ChatForm bind:input={$input} {handleSubmit} isLoading={$isLoading} />
		</div>
	</div>
</main>
