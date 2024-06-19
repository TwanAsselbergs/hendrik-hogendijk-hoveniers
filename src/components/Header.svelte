<script>
	import { page } from '$app/stores'
	import logo from '../img/logo-png.png';

	/** @type {number} */
	let y;

	console.log($page.route.id)

	$: out = y > 500 || $page.route.id != '/';
</script>

<svelte:window bind:scrollY={y} />

<header
	class={'fixed flex justify-center border-b-2 w-full transition-all duration-300 ' +
		(out ? 'bg-white h-20' : 'h-32 backdrop-blur-sm border-transparent')}
	style="z-index: 1000;"
>
	<div class="flex justify-between h-full w-3/4 min-w-[800px]">
		<div class="flex items-center ">
			<div class={'h-full rounded-md transition-all duration-300 ' +
						(out ? 'h-full' : 'h-full bg-transparent')}>
				<a href="/" class="flex items-center h-full">
					<img class="h-full" src={logo} alt="" />
				</a>
			</div>
		</div>
		<div class="flex items-center h-full">
			<div
				class={'flex items-center gap-5 border-2 h-12 p-3 rounded-md transition-all ' +
					(out ? ' ' : 'border-transparent text-white') }
			>
				<a href="/">Home</a>
				<a href="diensten">Diensten</a>
				<a href="contact">Contact</a>
			</div>
		</div>
	</div>
</header>
