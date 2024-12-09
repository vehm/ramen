<script lang="ts">
	import TextSlideshow from './TextSlideshow.svelte';
</script>

<div class="flex flex-col gap-2 px-4 text-center md:text-start">
	<h1 class="text-4xl font-light text-white">
		Hi there, I'm <TextSlideshow
			messages={['Ramen', 'Andrew']}
			interval={6000}
			class="font-bold text-[#FA6E81]"
		/>!
	</h1>
	<p class="text-white/75">
		This is a chatbot with knowledge on my <TextSlideshow
			messages={['career', 'projects', 'skills', 'interests', 'hobbies', 'experience']}
			interval={2000}
			class="text-[#FA6E81]"
		/>.
	</p>
</div>
