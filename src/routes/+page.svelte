<script lang="ts">
	import tuin1 from '../img/tuin-1.png';
	import tuin2 from '../img/tuin-2.png';
	import tuin4 from '../img/tuin-4.png';
	import tuin from '../img/background.jpg';
	import hendrik from '../img/hendrik.jpg';
	import { json } from '@sveltejs/kit';
	import { onMount, onDestroy,setContext } from 'svelte';
	export let data;
	setContext('data', { data});
	let interval: number | undefined;	
	// console.log(data);	let currentReviewIndex = 0;
	let opacity = 1;
	let showPopup = false;

	function togglePopup() {
		showPopup = !showPopup;
	}

	onMount(() => {
		interval = setInterval(() => {
			opacity = 0;
			setTimeout(() => {
				currentReviewIndex = (currentReviewIndex + 1) % data.props.reviews.length;
				opacity = 1;
			}, 500);
		}, 10000);
		console.log(interval);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	/**
	 * @type {HTMLDivElement}
	 */
	let scrollBar,
		scrollContent,
		x = 0;

	// @ts-ignore
	$: {
		if (scrollBar) scrollBar.style.width = `${scrollBar.parentElement.clientWidth * x}px`;
	}
</script>

<main class="flex flex-col min-h-screen snap-y">
	<section class="relative flex w-full h-screen">
		<img class="w-full h-full object-cover" src={tuin} alt="Background" />
		<div class="absolute flex flex-col justify-center items-center h-full w-full text-white">
			<h1 class="text-4xl font-bold shadow-black text-shadow text-center">
				Hendrik Hogendijk Hoveniers
			</h1>
			<p class="font-bold max-w-[600px] shadow-black text-shadow">
				Zelfstandig hovenier in de regio Zeist en de Bilt
			</p>
			<p class="mt-[-12.5px]">______</p>
		</div>
	</section>
	<section
		class="relative flex justify-center items-center w-full h-screen md:h-[80vh] md:px-24 mb-10 mt-12 lg:mt-[-60px]"
	>
		<div
			bind:this={scrollContent}
			on:scroll={(e) => (x = e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth))}
			class="px-10 md:px-36 py-10 flex items-center flex-row overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-10 h-[800px] lg:h-[600px] min-w-full"
		>
			<div
				class="snap-center flex flex-col-reverse lg:flex-row min-w-[320px] lg:min-w-[920px] h-full py-10"
			>
				<div class="h-full w-full py-10 mr-4">
					<h1 class="pl-3 text-xl font-bold">Hendrik Hogendijk Hoveniers</h1>
					<p class="pt-8 ml-3">
						De tuin is een belangrijke plek van de woning, waar je het liefst zoveel mogelijk tijd
						in doorbrengt. Bij Hendrik Hogendijk Hoveniers vinden wij het daarom belangrijk dat
						iedereen zich thuis voelt in zijn of haar tuin. Ik maak de tuin onderdeel van jouw
						‘thuis’, door hem volledig op jouw wensen af te stemmen.
					</p>
				</div>
				<div class="bg-black w-full h-full rounded-md overflow-hidden">
					<img class="w-full h-full object-cover" src={tuin1} alt="Tuin 1" />
				</div>
			</div>
			<div
				class="snap-center flex flex-col-reverse lg:flex-row min-w-[320px] lg:min-w-[920px] h-full py-10"
			>
				<div class="w-full h-full py-10">
					<h1 class="pl-3 text-xl font-bold">Duurzame Producten</h1>
					<p class="pt-8 ml-3 mr-4">
						Met behulp van mooie, natuurlijke en duurzame producten en materialen creëer ik een
						tuin, die garant staat voor een jarenlang plezierig buitenleven. Van een knusse veranda
						en een mooie vijver, tot een gezellig terras en een kleurrijke bloemenborder: ik stop al
						mijn energie erin.
					</p>
				</div>
				<div class="bg-black w-full h-full rounded-md overflow-hidden">
					<img class="w-full h-full object-cover" src={tuin2} alt="Tuin 2" />
				</div>
			</div>
			<div
				class="snap-center flex flex-col-reverse lg:flex-row min-w-[320px] lg:min-w-[920px] h-full py-10"
			>
				<div class="w-full h-full py-10">
					<h1 class="pl-3 text-xl font-bold">Je Perfecte Tuin</h1>
					<p class="pt-8 ml-3 mr-4">
						Wat jouw wensen ook zijn, ik maak een goed doordacht ontwerp voor de tuin van je dromen.
						Met mijn ontwerp krijg je een duidelijk beeld van jouw toekomstige tuin.
					</p>
				</div>
				<div class="bg-black w-full h-full rounded-md overflow-hidden">
					<img class="w-full h-full object-cover" src={tuin4} alt="Tuin 3" />
				</div>
			</div>
		</div>
		<div
			class="flex items-center absolute bg-gray-200 left-[50%] -translate-x-[50%] w-1/2 md:w-1/3 h-1 bottom-[5%] rounded-md"
		>
			<div bind:this={scrollBar} class="bg-green-600 left-0 h-1 rounded-md"></div>
		</div>
	</section>
	<section
		class="bg-gray-100 w-full flex flex-col items-center justify-center py-12 lg:py-20 px-10"
	>
		<h2 class="text-2xl font-bold">Over Mij</h2>
		<hr class="w-12 border-1 mb-6 mt-1 rounded-md" />
		<div class="max-w-4xl text-center">
			<p class="mb-4">
				Ik ben Hendrik Hogendijk, een gepassioneerde beginnende hovenier. In het afgelopen jaar heb
				ik met grote tevredenheid diverse projecten voltooid voor particuliere klanten. Mijn
				toewijding en vakmanschap in tuinaanleg, renovatie en onderhoud hebben mij een uitstekende
				reputatie opgeleverd. Ik sta klaar om jouw tuindromen werkelijkheid te maken!
			</p>
			<p>
				Voortbouwend op deze basis, streef ik ernaar om elke tuin uniek te maken, afgestemd op je
				persoonlijke wensen en levensstijl. Met een oog voor detail en een passie voor groen, zet ik
				mij in om niet alleen aan je verwachtingen te voldoen, maar deze te overtreffen.
			</p>
		</div>
		<div class="mt-8">
			<img src={hendrik} alt="Hendrik Hogendijk" class="rounded-full w-32 h-32 mx-auto" />
		</div>
	</section>
	<section
		class="bg-white w-full flex flex-col items-center justify-center pb-32 pt-0 lg:pt-16 px-10"
	>
		<h2 class="text-2xl font-bold pt-6">Recensies</h2>
		<hr class="w-12 border-1 mb-6 mt-1 rounded-md" />
		<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center max-w-6xl">
			{#if data.props.reviews.length > 0}
				<div class="border border-gray-200 rounded-md p-6 col-start-2 h-64 overflow-y-auto">
					<div class="transition-opacity duration-500" style="opacity: {opacity};">
						<h3 class="font-bold">{data.props.reviews[currentReviewIndex].name}</h3>
						<p class="text-gray-600 mt-2">
							{data.props.reviews[currentReviewIndex].review}
						</p>
					</div>
				</div>
			{/if}
		</div>
		<button
			class="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 mb-[-20px]"
			on:click={togglePopup}
		>
			Schrijf een recensie
		</button>

		{#if showPopup}
			<div
				class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 px-2 sm:px-4"
			>
				<div class="bg-white p-4 rounded-md shadow-lg w-full sm:w-1/3 md:w-1/2 lg:w-1/3">
					<h2 class="text-xl font-bold mb-4">Schrijf een recensie</h2>
					<form on:submit|preventDefault>
						<div class="relative mb-4 h-10">
							<input
								class="peer outline-none w-full h-full font-md border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline-0"
								type="text"
								placeholder=" "
								required
							/>
							<label
								for="name"
								class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
										before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
										after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
								>Naam</label
							>
						</div>
						<div class="relative mb-4">
							<textarea
								id="review"
								class="peer outline-none w-full border focus:border-2 placeholder-shown:border-t-gray-200 border-t-transparent focus:border-t-transparent rounded-md px-3 py-2.5 font-light shadow-sm transition-all outline outline-0 h-48 resize-none"
								placeholder=" "
								required
							></textarea>
							<label
								for="review"
								class="flex h-full w-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate leading-tight peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] text-gray-400
										before:content[' '] before:block before:w-2.5 before:h-1.5 before:mt-[6px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all before:!border-gray-200
										after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all after:!border-gray-200"
								>Recensie</label
							>
						</div>
						<div class="flex justify-between">
							<button
								type="submit"
								class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
								>Verstuur</button
							>
							<button
								type="button"
								class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
								on:click={togglePopup}>Sluiten</button
							>
						</div>
					</form>
				</div>
			</div>
		{/if}
	</section>
</main>
