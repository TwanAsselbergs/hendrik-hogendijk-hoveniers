<script lang="ts">
	import tuin1 from '../img/tuin-1.png';
	import tuin2 from '../img/tuin-2.png';
	import tuin3 from '../img/tuin-3.png';

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

<main class="flex flex-col min-h-screen pt-12">
	<section class="relative flex justify-center items-center w-full h-screen md:px-24">
		<div
			bind:this={scrollContent}
			on:scroll={(e) => (x = e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth))}
			class="px-10 md:px-36 py-10 flex items-center flex-row overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-10 h-[600px] min-w-full"
		>
			<div class="snap-center min-w-[460px] h-full py-10">
				<h1 class="pl-3 text-xl font-bold">Hendrik Hogendijk Hoveniers</h1>
				<p class="pt-8 ml-3">
					Geen opdracht is te klein of te groot voor mijn hoveniersbedrijf! Alle soorten
					werkzaamheden in en rond de tuin voer ik als hoveniersbedrijf met veel passie voor het vak
					uit. Zo kunt u er dan ook blindelings vanuit gaan dat uw tuin naar wens wordt opgeleverd,
					eerder zal ik namelijk niet vertrekken. Vakmanschap, kwaliteit en service, dat is het
					handelsmerk van Hogendijk Hoveniers.
				</p>
			</div>
			<div class="snap-center bg-black min-w-[460px] h-full rounded-lg overflow-hidden">
				<img class="w-full h-full object-cover" src={tuin1} alt="Tuin 1" />
			</div>
			<div class="snap-center min-w-[460px] h-full py-10">
				<h1 class="pl-3 text-xl font-bold">Example text</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam laboriosam
					optio aspernatur repudiandae assumenda beatae rem exercitationem minima enim. Aut,
					recusandae dolores. Fuga debitis, similique voluptas facere rerum sunt!
				</p>
			</div>
			<div class="snap-center bg-black min-w-[460px] h-full rounded-lg overflow-hidden">
				<img class="w-full h-full object-cover" src={tuin2} alt="Tuin 2" />
			</div>
			<div class="snap-center min-w-[460px] h-full py-10">
				<h1 class="pl-3 text-xl font-bold">Example text</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veniam laboriosam
					optio aspernatur repudiandae assumenda beatae rem exercitationem minima enim. Aut,
					recusandae dolores. Fuga debitis, similique voluptas facere rerum sunt!
				</p>
			</div>
			<div class="snap-center bg-black min-w-[460px] h-full">
				<img class="w-full h-full object-cover" src={tuin3} alt="Tuin 3" />
			</div>
		</div>
		<div class="absolute bg-gray-200 left-[50%] -translate-x-[50%] w-1/2 md:w-1/3 h-1 bottom-[10%]">
			<div bind:this={scrollBar} class="bg-black left-0 h-full"></div>
		</div>
	</section>
	<section class="w-full h-screen bg-black"></section>
</main>
