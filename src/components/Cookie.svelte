<script>
	import { onMount } from 'svelte';

	let showCookieAlert = false;

	onMount(() => {
		const cookiesAccepted = document.cookie.includes('cookiesAccepted=true');
		const cookiesRefused = document.cookie.includes('cookiesRefused=true');
		showCookieAlert = !(cookiesAccepted || cookiesRefused);
	});

	function acceptCookies() {
		document.cookie = 'cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
		showCookieAlert = false;
	}

	function refuseCookies() {
		document.cookie = 'cookiesRefused=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
		showCookieAlert = false;
	}
</script>

{#if showCookieAlert}
	<div class="fixed bottom-0 right-0 max-w-96 p-10">
		<div class="flex flex-col w-full h-full bg-white border-2 rounded-xl p-2">
			<h1 class="font-bold ml-3 my-2">Cookies</h1>
			<p class="px-2 mb-3">
				Deze website gebruikt cookies om u een meer gepersonaliseerde en relevante browse-ervaring
				te bieden. <br />
				<a class="text-green-500 hover:underline" href="/"> Lees meer...</a>
			</p>
			<div class="flex justify-evenly w-full gap-2">
				<button
					class="bg-green-500 text-white border-2 rounded-md w-full py-2"
					on:click={acceptCookies}>Accepteren</button
				>
				<button class="bg-white border-2 rounded-md w-full py-2" on:click={refuseCookies}
					>Afwijzen</button
				>
			</div>
		</div>
	</div>
{/if}
