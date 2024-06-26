<script lang="ts">
	import tuin1 from '../img/tuin-1.png';
	import tuin2 from '../img/tuin-2.png';
	import tuin4 from '../img/tuin-4.png';
	import tuin from '../img/background.jpg';
	import hendrik from '../img/hendrik.jpg';

	import { onMount, onDestroy } from 'svelte';

	let currentReviewIndex = 0;
	let interval: number | undefined;

	onMount(() => {
		interval = setInterval(() => {
			currentReviewIndex = (currentReviewIndex + 1) % data.reviews.length;
		}, 10000);
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

	export let data;
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
				<div class="h-full w-full py-10">
					<h1 class="pl-3 text-xl font-bold">Hendrik Hogendijk Hoveniers</h1>
					<p class="pt-8 ml-3">
						Geen opdracht is te klein of te groot voor mijn hoveniersbedrijf! Alle soorten
						werkzaamheden in en rond de tuin voer ik als hoveniersbedrijf met veel passie voor het
						vak uit. Zo kunt u er dan ook blindelings vanuit gaan dat uw tuin naar wens wordt
						opgeleverd, eerder zal ik namelijk niet vertrekken. Vakmanschap, kwaliteit en service,
						dat is het handelsmerk van Hogendijk Hoveniers.
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
					<h1 class="pl-3 text-xl font-bold">Passie & Precisie</h1>
					<p class="pt-8 ml-3">
						Droomt u van een prachtige tuin? Hendrik Hogendijk Hoveniers maakt het waar! Ik verzorg
						ontwerp, aanleg en onderhoud met passie en precisie. Kwaliteit en persoonlijke service
						gegarandeerd. Ik vorm
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
					<h1 class="pl-3 text-xl font-bold">Uw Perfecte Tuin</h1>
					<p class="pt-8 ml-3">
						Ik maak uw tuinwensen waar! Voor aanleg, renovatie en onderhoud, bied ik vakmanschap en
						topservice. Uw perfecte tuin begint hier.
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
		<h2 class="text-2xl font-bold mb-6">Over Mij</h2>
		<div class="max-w-4xl text-center">
			<p class="mb-4">
				Ik ben Hendrik Hogendijk, een gepassioneerde beginnende hovenier. In het afgelopen jaar heb
				ik met grote tevredenheid diverse projecten voltooid voor particuliere klanten. Mijn
				toewijding en vakmanschap in tuinaanleg, renovatie en onderhoud hebben mij een uitstekende
				reputatie opgeleverd. Ik sta klaar om uw tuindromen werkelijkheid te maken!
			</p>
			<p>
				Voortbouwend op deze basis, streef ik ernaar om elke tuin uniek te maken, afgestemd op uw
				persoonlijke wensen en levensstijl. Met een oog voor detail en een passie voor groen, zet ik
				mij in om niet alleen aan uw verwachtingen te voldoen, maar deze te overtreffen.
			</p>
		</div>
		<div class="mt-8">
			<img src={hendrik} alt="Hendrik Hogendijk" class="rounded-full w-32 h-32 mx-auto" />
		</div>
	</section>
	<section
		class="bg-white w-full flex flex-col items-center justify-center pb-32 pt-0 lg:pt-16 px-10"
	>
		<h2 class="text-2xl font-bold mb-6 pt-6">Recensies</h2>
		<div class="grid grid-cols-3 text-center max-w-6xl">
			{#if data.reviews.length > 0}
				<div class="border border-gray-200 rounded-md p-6 col-start-2 h-64 overflow-y-auto">
					<h3 class="font-bold">{data.reviews[currentReviewIndex].name}</h3>
					<p class="text-gray-600">
						{data.reviews[currentReviewIndex].review}
					</p>
				</div>
			{/if}
		</div>
		<button class="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
			Schrijf een recensie
		</button>
	</section>
</main>
