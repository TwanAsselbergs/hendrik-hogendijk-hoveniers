<script>
	import { onMount } from 'svelte';
	import { json, text } from '@sveltejs/kit';
	import { page } from '$app/stores';
	import { Input } from 'postcss';
	import { goto } from '$app/navigation';

	let ID = $page.params.id;
	export let data;

	onMount(() => {
		if (!data.logged) goto('/admin/login');
	});
</script>

{#if data.logged}
	<main class="min-h-screen">
		<div class="w-full min-h-screen flex justify-center items-center">
			{#each data.props.dataH as item (item)}
				{#if item.id == ID}
					<form
						method="post"
						class=" bg-gray-100 mt-20 p-6 rounded-md shadow-md border-2 w-full transform scale-95 flex items-center flex-col"
					>
						<div class="flex justify-start w-full">
							<a
								href="../../admin"
								class="mt-4 bg-green-600 text-white text-center px-6 py-2 rounded-md hover:bg-green-700"
								>Terug</a
							>
						</div>
						<label for="Fname" class="text-xl mb-5">Voornaam</label>
						<input
							type="text"
							name="Fname"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.Fname}
						/>
						<label for="Lname" class="text-xl mb-5">Achernaam</label>
						<input
							type="text"
							name="Lname"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.Lname}
						/>
						<label for="Email" class="text-xl mb-5">Email</label>
						<input
							type="email"
							name="Email"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.Email}
						/>
						<label for="Number" class="text-xl mb-5">Telefoonnummer</label>
						<input
							type="tel"
							name="Number"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.Number}
						/>
						<label for="City" class="text-xl mb-5">Stad</label>
						<input
							type="text"
							name="City"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.City}
						/>
						<label for="Street" class="text-xl mb-5">Straat</label>
						<input
							type="text"
							name="Street"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.Street}
						/>
						<label for="text" class="text-xl mb-5">Huisnummer</label>
						<input
							type="number"
							name="HNumber"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.HNumber}
						/>
						<label for="text" class="text-xl mb-5">Postcode</label>
						<input
							type="type"
							name="PostalCode"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.PostalCode}
						/>
						<label for="text" class="text-xl mb-5">Facebook</label>
						<input
							type="text"
							name="Facebook"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.Facebook}
						/>
						<label for="text" class="text-xl mb-5">Instagram</label>
						<input
							type="text"
							name="Instagram"
							class=" h-1/6 textarea peer outline-none w-3/6 h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
							value={item.Instagram}
						/>

						<input type="hidden" value={ID} name="IDU" />
						<button
							type="submit"
							class=" w-2/6 mt-4 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
							>Versturen</button
						>
					</form>
				{/if}
			{/each}
		</div>
	</main>
{/if}
