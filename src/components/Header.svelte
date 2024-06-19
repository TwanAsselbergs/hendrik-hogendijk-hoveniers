<script>
	import { onMount } from 'svelte';
	import logo from '../img/logo.png';

	/** @type {number} */
	let y;

	$: out = y > 10;
</script>

<svelte:window bind:scrollY={y} />

<header
	class={'bg-white fixed flex justify-center border-b-2 w-full transition-all ' +
		(out ? 'h-20' : 'h-32')}
	style="z-index: 1000;"
>
	<div class="flex justify-between py-2 h-full w-3/4 min-w-[800px]">
		<a href="/" class="flex items-center h-full"><img class="h-full mr-10" src={logo} alt="" /></a>
		<div class="flex items-center h-full">
			<div
				class="bg-green-200 border-green-300 flex items-center gap-5 border-2 h-12 p-3 rounded-md transition-colors"
			>
				<a href="/">Home</a>
				<a href="diensten">Diensten</a>
				<a href="contact">Contact</a>
			</div>
		</div>
	</div>
</header>
