<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Logo from './Logo.svelte';

	/** @type {number} */
	let y;
	/** @type {number} */
	let height;

	/**
	 * @type {SVGElement}
	 */
	let logoText;

	$: out = y > height - 100 || $page.route.id != '/';

	$: out,
		(() => {
			if (logoText) {
				if (out) {
					logoText.classList.remove('fill-white');
					logoText.classList.add('fill-[#b3bcb5]');
				} else {
					logoText.classList.remove('fill-[#b3bcb5]');
					logoText.classList.add('fill-white');
				}
			}
		})();

	onMount(() => {
		logoText = document.getElementById('logo-text');
	});
</script>

<svelte:window bind:innerHeight={height} bind:scrollY={y} />

<header
	class={'fixed flex justify-center border-b-2 w-full transition-all duration-300 z-10 ' +
		(out ? 'bg-white h-20' : 'h-28 border-transparent backdrop-blur-[2px]')}
>
	<div class="flex justify-between h-full w-3/4 min-w-[800px]">
		<div class="flex items-center">
			<div
				class={'h-full rounded-md transition-all duration-300 ' +
					(out ? 'h-full' : 'h-full bg-transparent')}
			>
				<a href="/" class="flex items-center h-full py-6">
					<Logo />
				</a>
			</div>
		</div>
		<div class="flex items-center h-full">
			<div
				class={'flex items-center gap-5 border-2 h-12 p-3 rounded-md transition-all ' +
					(out ? ' ' : 'border-white text-white')}
			>
				<a href="/">Home</a>
				<a href="diensten">Diensten</a>
				<a href="contact">Contact</a>
			</div>
		</div>
	</div>
</header>
