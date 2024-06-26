<script>
	import { onMount } from 'svelte';
	import { json, text } from '@sveltejs/kit';
	import { page } from '$app/stores';
	import { Input } from 'postcss';

	let ID = $page.params.slug;
	export let data;
</script>

<main class="min-h-screen">
	<div class="w-full min-h-screen flex justify-center items-center">
		{#each data.props.data as item (item)}
			{#if item.id == ID}
				<form
					action=""
					class=" h-96 bg-gray-100 p-6 rounded-md shadow-md border-2 w-full transform scale-95 flex items-center flex-col"
				>
				
					<textarea
						name="text"
						class=" h-3/4 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
						value={item.text}
					></textarea>

					<button 
					type="submit" 
					class=" w-2/6 mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
					>versturen</button>
				</form>
			{/if}
		{/each}
			</div>
</main>
