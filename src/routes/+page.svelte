<script lang="ts">
	import { useAssistant } from '@ai-sdk/svelte';

	import { ChatForm, ChatMessageList, Navbar, WelcomeCard } from '$lib/components';

	const { input, submitMessage, messages, status, stop } = useAssistant({
		api: '/api/assistant'
	});
</script>

<svelte:head>
	<title>
		{$messages.length
			? $status === 'in_progress'
				? 'Thinking... 🧠'
				: 'Having a chat! 🍜'
			: "Let's have a chat! 🍜"}
	</title>
	<meta
		name="description"
		content="Hi, I'm Andrew - but you can call me Ramen! Explore my portfolio through an AI chatbot that knows all about my interests, hobbies, and web developer career!"
	/>
</svelte:head>

<main class="h-dvh">
	<div class="flex h-full items-center justify-center">
		<div class="flex h-full w-full max-w-3xl flex-col justify-center">
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
