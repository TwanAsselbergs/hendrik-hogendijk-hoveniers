<script>
	import Cookie from '../components/Cookie.svelte';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	
	import '../app.css';

	export let data;
</script>

<Cookie />
<Header />
<slot />
<Footer FrontName={data} />