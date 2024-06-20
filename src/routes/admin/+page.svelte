<script>
	import { json } from '@sveltejs/kit';
	export let data;
</script>

<main class="flex justify-center items-center h-screen">
	<div class="flex">
		<div class=""></div>
		<div></div>
	</div>
	<div class="flex row gap-10">
		<div class="w-80 border border-green-400 border-2 rounded-md p-2">
			{#each data.props.data as item (item)}
				<div class="">{item}</div>
			{/each}
			<button class="mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                edit
            </button>
		</div>
		<div class=" border border-green-400 border-2 rounded-md p-2">
			{#each data.props.dataH as item (item)}
				<div>
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
            <button class="mt-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                edit
            </button>
		</div>

        
	</div>

	<div></div>
</main>
