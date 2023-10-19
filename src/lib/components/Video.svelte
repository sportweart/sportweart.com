<script>
	export let source;
</script>

{#key source}
	<video poster="https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg" muted autoplay class="w-full object-cover">
		<source type="video/mp4" src={source} />
	</video>
{/key}

<style>
	video {
		width: 100%;
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
	}
</style>
