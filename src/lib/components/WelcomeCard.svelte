<script lang="ts">
	import RamenMiniLogo from '$lib/assets/ramen_mini.svg';

	import { TextSlideshow } from '.';
</script>

<div class="flex flex-col gap-2 px-4 text-center md:text-start">
	<h1
		class="flex flex-col items-center gap-4 text-4xl font-light text-white md:flex-row md:items-end"
	>
		<img src={RamenMiniLogo} alt="Ramen Logo" class="h-12 w-12" />
		<span>
			Hi there, I'm <TextSlideshow
				messages={['Ramen', 'Andrew']}
				interval={6000}
				class="font-bold text-[#FA6E81]"
			/>!
		</span>
	</h1>
	<p class="text-white/75">
		This is a chatbot with knowledge on my <TextSlideshow
			messages={['career', 'projects', 'skills', 'interests', 'hobbies', 'experience']}
			interval={2000}
			class="text-[#FA6E81]"
		/>.
	</p>
</div>
