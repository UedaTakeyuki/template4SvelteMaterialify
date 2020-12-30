<script>
	import { 
		MaterialApp, 
		Icon, 
		Button, 
		Menu, 
		List, 
		ListItem, 
		NavigationDrawer,
		Overlay,
		Footer,
	} from 'svelte-materialify';

	let theme = 'light';
	import * as S from 'svelte-materialify';

	import Router from 'svelte-spa-router';
	import Home from './routes/home.svelte';
	import Showpage from './routes/showpage.svelte';
	import AppBar from './components/AppBar.svelte';
	import Navigation from './components/Navigation.svelte';

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

	<MaterialApp theme="{theme}">
		<slot />
	</MaterialApp>

	<S.Button>These Are</S.Button>

	<S.Button>The Same Thing</S.Button>

	<Router {routes}/>

	<Footer padless class="indigo theme--dark justify-center flex-column">
  <div class="indigo lighten-1 pa-2 text-center" style="width:100%">
    2020 -
    <b>Svelte Materialify</b>
  </div>
</Footer>
</div>
</main>

<style>
</style>