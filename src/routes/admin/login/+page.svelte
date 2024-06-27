<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let form;

	onMount(() => {
		if (form?.success) goto('/admin');
	});
</script>

<main class="justify-center items-center flex min-h-screen">
	<form class="border-2 bg-white rounded-md p-20" method="post" action="?/login">
		<h1 class="text-center text-3xl mb-8 mt-[-40px]">Log in</h1>
		<div class="relative mb-4 h-10">
			<input
				class="peer outline-none w-full h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
				type="text"
				placeholder=" "
				name="username"
				required
			/>
			<label
				for="username"
				class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
								before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
								after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
				>Gebruikersnaam</label
			>
		</div>
		<div class="relative mb-4 h-10">
			<input
				class="peer outline-none w-full h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
				type="password"
				placeholder=" "
				name="password"
				required
			/>
			<label
				for="password"
				class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
								before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
								after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
				>Wachtwoord</label
			>
		</div>
		{#if form?.failed}
			<p>{form.message}</p>
		{/if}
		<div class="flex justify-center mt-12 mb-[-20px] w-72">
			<button
				class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline border border-green-500 shadow-md"
				type="submit">Inloggen</button
			>
		</div>
	</form>
</main>
