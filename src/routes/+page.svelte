
<script>
	let scrollBar,
		scrollContent,
		x = 0

	$: {if (scrollBar) scrollBar.style.width = `${scrollBar.parentElement.clientWidth*x}px`;}

	let mouseIsDown = false,
		mousePosX = 0,
	    mouseStartX = 0,
		scrollToX = 0,
		scrollStartX = 0

	function mouseMove(e) {
		mousePosX = e.clientX
		scrollToX = (mousePosX - mouseStartX)/scrollBar.parentElement.clientWidth

		if (mouseIsDown) {
			scrollContent.scrollLeft = scrollStartX + scrollContent.clientWidth*scrollToX
		}
	}

	function mouseDown() {
		mouseStartX = mousePosX;
		scrollStartX = scrollContent.scrollLeft;
		mouseIsDown = true;

		scrollContent.classList.remove("snap-x");
	}

	function mouseUp() {
		mouseIsDown = false;

		scrollContent.classList.add("snap-x");
	}
</script>

<svelte:window on:mousemove={mouseMove} on:mouseup={mouseUp} />


<main class="flex flex-col min-h-screen">
	<section class="relative flex justify-center items-center w-full h-screen">
		<div bind:this={scrollContent} on:scroll={e => x = e.target.scrollLeft/(e.target.scrollWidth - e.target.clientWidth)} class="pl-32 pr-[280px] py-10 flex items-center flex-row overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-10 h-[600px] min-w-full">
			<div class="snap-center bg-black min-w-[460px] h-full"></div>
			<div class="snap-center bg-black min-w-[460px] h-full"></div>
			<div class="snap-center bg-black min-w-[460px] h-full"></div>
			<div class="snap-center bg-black min-w-[460px] h-full"></div>
			<div class="snap-center bg-black min-w-[460px] h-full"></div>
			<div class="snap-center bg-black min-w-[460px] h-full"></div>
		</div>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div on:mousedown={mouseDown} class="absolute bg-gray-200 left-[50%] -translate-x-[50%] w-1/2 h-1 bottom-20"><div bind:this={scrollBar} class="bg-black left-0 h-full"></div></div>
	</section>
	<section class="w-full h-screen bg-black"></section>
</main>
