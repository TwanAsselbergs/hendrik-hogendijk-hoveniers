<script>
export let data;
</script>

<main class="flex flex-col min-h-screen">
	<section
		class="flex flex-col justify-center items-center w-full min-h-screen px-4 md:px-10 mt-20 lg:mt-32 text-center md:text-left"
	>
		<hr class="w-24 rounded-md mt-2" />
		<div
			class="bg-gray-100 rounded-md shadow-md flex flex-col lg:flex-row justify-between items-center w-full border-b-2 pt-10 pb-12 mt-10"
		>
			<div class="w-full lg:w-2/3 px-4">
				<h2 class="text-3xl font-semibold pb-12 pt-4 pl-4">{data.post.data[3].name}</h2>
				<p class="text-md pl-4">
					{data.post.data[3].text}
				</p>
			</div>
			<div class="mt-6 lg:mt-0 lg:mr-40">
				<img src="src/img/icon-tuinontwerp.png" alt="Tuinontwerp" class="max-w-xs mx-auto" />
			</div>
		</div>
		<div
			class="bg-gray-100 rounded-md shadow-md flex flex-col-reverse lg:flex-row justify-between items-center w-full border-b-2 pt-10 pb-10"
		>
			<div class="mt-6 lg:mt-0 lg:ml-40">
				<img src="src/img/icon-tuinonderhoud.png" alt="Tuinonderhoud" class="max-w-xs mx-auto" />
			</div>
			<div class="w-full lg:w-2/3 px-4">
				<h2 class="text-3xl font-semibold pb-12 pt-4">{data.post.data[4].name}</h2>
				<p class="text-md">
					{data.post.data[4].text}
				</p>
			</div>
		</div>
		<div
			class="bg-gray-100 rounded-md shadow-md flex flex-col lg:flex-row justify-between items-center w-full pt-10 border-b-2 pb-10"
		>
			<div class="w-full lg:w-2/3 px-4">
				<h2 class="text-4xl font-semibold pb-12 pt-4 pl-4">{data.post.data[5].name}</h2>
				<p class="text-lg pl-4">
					{data.post.data[5].text}
				</p>
			</div>
			<div class="mt-6 lg:mt-0 lg:mr-40">
				<img src="src/img/icon-tuinaanleg.png" alt="Tuinaanleg" class="max-w-xs mx-auto" />
			</div>
		</div>
		<div
			class="bg-gray-100 rounded-md shadow-md flex flex-col-reverse lg:flex-row justify-between items-center w-full border-b-2 pt-10 pb-10"
		>
			<div class="mt-6 lg:mt-0 lg:ml-40">
				<img src="src/img/icon-zwemvijvers.png" alt="Zwemvijvers" class="max-w-xs mx-auto" />
			</div>
			<div class="w-full lg:w-2/3 px-4">
				<h2 class="text-3xl font-semibold pb-12 pt-4">{data.post.data[6].name}</h2>
				<p class="text-md">
				{data.post.data[6].text}
				</p>
			</div>
		</div>
		<hr class="my-10" />
	</section>
</main>
