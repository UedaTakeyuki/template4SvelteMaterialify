<script>
	import Router from 'svelte-spa-router';
	import AppBar from './components/AppBar.svelte';
	import Navigation from './components/Navigation.svelte';
	import Footer from './components/Footer.svelte'
	import { routes } from './routes/routes'

	let active = false;

</script>

<main>
	<div class="appbar">
		<AppBar bind:active={active}/>
	</div>

	<div style="position:relative;" class="body">

		<Navigation bind:active={active}/>

		<Router {routes}/>

	</div>
	
	<div class="footer">
		<Footer/>
	</div>

</main>

<style>
/* for sticky footer */
main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
.appbar {
    flex-shrink: 0;
}
.body{
    flex-grow: 1;
    overflow: auto;
    min-height: 2em;
}
.footer{
    flex-shrink: 0;
}
</style>