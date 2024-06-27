<script>
	import Cookie from '../components/Cookie.svelte';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	// import { getContext } from 'svelte';
	// const { data,  } = getContext('data');

	import '../app.css';
	import { json } from '@sveltejs/kit';
	// console.log(data) 

</script>

<Cookie />
<Header />
<slot />
<Footer  />
