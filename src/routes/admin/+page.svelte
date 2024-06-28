<script>
	import { json, text } from '@sveltejs/kit';
	import Logo from '../../components/Logo.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		if (!data.logged) goto('/admin/login');
	});
</script>

{#if data.logged}
	<main class="flex justify-left items-center min-h-screen flex-col pt-32">
		<form method="post" action="?/logout">
			<input
				class="mt-4 mb-4 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 self-start"
				type="submit"
				value="Uitloggen"
			/>
		</form>
		<h1 class="text-3xl font-bold mb-12">Beheerpaneel</h1>
		<div class="flex">
			<div class=""></div>
			<div></div>
		</div>
		<div class="flex row gap-10 justify-center flex-wrap">
			{#each data.props.data as item (item)}
				<div
					class="w-80 border border-green-400 border-2 rounded-md p-2 flex flex-col justify-between"
				>
					<div class="">{item.text}</div>

					<!-- <form action="update" method="post">
					<input type="hidden" value={item.id} name="IDG" />
					<button
						type="submit"
						class=" w-2/6 mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
					>
						Bewerk
					</button>
				</form> -->
					<a
						href="/admin/update/{item.id}"
						class="w-2/6 mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
					>
						Bewerk
					</a>
				</div>
			{/each}
			{#each data.props.dataH as item (item)}
				<div
					class="w-82 border border-green-400 border-2 rounded-md p-2 flex flex-col justify-between"
				>
					<div class=" flex flex-col gap-2">
						<h2>{item.Fname} {item.Lname}</h2>
						<p>{item.Number}</p>
						<p>{item.Email}</p>
						<p>{item.City}</p>
						<p>{item.Street} {item.HNumber}</p>
						<p>{item.PostalCode}</p>
						<p>{item.Instagram}</p>
						<p>{item.Facebook}</p>
					</div>
					<a
						href="/admin/updateH/{item.id}"
						class="mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 w-2/6"
					>
						Bewerk
					</a>
				</div>
			{/each}
		</div>
		<h2 class="font-bold text-3xl mt-12">Recensies</h2>
		<div class="flex flex-row gap-12 m-12 flex-wrap">
			{#each data.props.dataR as item (item)}
				<div class="w-60 flex h-96 flex-col p-2 rounded-md border-green-400 border-2">
					<h2>{item.name}</h2>
					<br />
					<p>{item.review}</p>
					<div class="mt-auto flex gap-2 justify-center">
						<form method="post" action="?/delete">
							<input type="hidden" value={item.id} name="IDR" />
							<button
								type="submit"
								class=" w-5/5 mb-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
								>Verwijder</button
							>
						</form>
					</div>
				</div>
			{/each}
		</div>
	</main>
{/if}
