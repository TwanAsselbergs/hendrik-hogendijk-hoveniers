<script>
	import { onMount } from 'svelte';
	import { json, text } from '@sveltejs/kit';
	import { page } from '$app/stores';

	let textAreas;
	let ID = $page.params.slug;
	export let data;

	function autoGrow(element) {
		element.style.height = "5px";
		element.style.height = (element.scrollHeight) + "px"; 
	}

	onMount(() => {
		if (textAreas) {
			textAreas.forEach(ta => autoGrow(ta));
		}
	});
</script>

<main class="min-h-screen">
	<section class="w-full min-h-screen flex justify-center items-center">
		{#each data.props.data as item (item)}
		{#if item.id == ID}
		<form
			action=""
			class="bg-gray-100 p-6 rounded-md shadow-md border-2 w-full transform scale-95 flex justify-center"
		>
			<textarea
				bind:this={textAreas}
				name="text"
				class="textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
				bind:value={item.text}
			    on:input="{event => autoGrow(event.target)}"
			></textarea>
		</form>
		{/if}
		{/each}
	</section>
</main>

