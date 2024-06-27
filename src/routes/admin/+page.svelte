<script>
	import { json, text } from '@sveltejs/kit';
	import Logo from '../../components/Logo.svelte';
	export let data;
</script>

<main class="flex justify-center items-center min-h-screen flex-col pt-32">
	<h1 class="text-3xl font-bold mb-12">Admin Panel</h1>
	<hr class="w-24 rounded-md mt-2" />
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
					href="/update/{item.id}"
					class=" w-2/6 mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
				>
					Bewerk
				</a>
			</div>
		{/each}
		<div class="w-82 border border-green-400 border-2 rounded-md p-2 flex flex-col justify-between">
			{#each data.props.dataH as item (item)}
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
			{/each}
			<button class="mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 w-2/6">
				Bewerk
			</button>
		</div>
	</div>

	<h2 class="font-bold text-3xl mt-12">Recensies</h2>
	<hr class="w-24 rounded-md mt-2" />
	<div class="flex flex-row gap-12 m-12 flex-wrap">
		{#each data.props.dataR as item (item)}
			<div class="border w-60 flex h-96 flex-col p-2 rounded-md border-green-400 border-2">
				<h2>{item.name}</h2>
				<br />
				<p>{item.review}</p>
				<div class="mt-auto flex gap-2 justify-center">
					<form method="post">
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
