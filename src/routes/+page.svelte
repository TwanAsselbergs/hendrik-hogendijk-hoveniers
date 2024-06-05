<script>
	import logo from './logo.png';
</script>

<header
	style="background-color: white; color: grey; font-family: Arial, sans-serif;"
	class="text-center py-3"
>
	<div style="display: flex; justify-content: space-around; align-items: center;">
		<h1 class="text-2xl">
			<img src={logo} alt="Logo" style="height: 10rem; width: auto;" />
		</h1>
		<nav class="flex justify-around my-2">
			<a href="+page.svelte" style="color: grey; font-weight: bold; margin-right: 1rem;">Home</a>
			<a href="/about" style="color: grey; font-weight: bold; margin-right: 1rem;">Portfolio</a>
			<a href="/contact" style="color: grey; font-weight: bold;">Contact</a>
		</nav>
	</div>
</header>
<main style="font-family: Arial, sans-serif;" class="px-6">
	<h2 class="text-xl my-2">Welcome to my website!</h2>
	<p>This is where the main content of the page would go.</p>
</main>
<footer
	style="background-color: #28A644; color: white; font-family: Arial, sans-serif;"
	class="text-center py-3"
>
	<p>Copyright 2022. All rights reserved.</p>
</footer>
