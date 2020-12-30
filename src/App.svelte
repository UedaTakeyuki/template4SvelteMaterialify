<script>
	import Router from 'svelte-spa-router';
	import Home from './routes/home.svelte';
	import Showpage from './routes/showpage.svelte';
	import AppBar from './components/AppBar.svelte';
	import Navigation from './components/Navigation.svelte';
	import Footer from './components/Footer.svelte'

	let active = false;

	const routes = {
			'/': Home,
			'/showpage/': Showpage,
	}

</script>

<main>
	<AppBar bind:active={active}/>

	<div style="position:relative;">
		<Navigation bind:active={active}/>

		<Router {routes}/>

		<Footer/>
	</div>
</main>

<style>
</style>