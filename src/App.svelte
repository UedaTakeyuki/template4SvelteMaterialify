<script>
	import { 
		MaterialApp, 
		AppBar, 
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
	import Home from './routes/home.svelte'
	import Showpage from './routes/showpage.svelte'

	let active = false;

	const routes = {
			'/': Home,
			'/showpage/': Showpage,
	}

	function click(){active = !active}

</script>

<main>
	<AppBar>
		<div slot="icon">
			<Button fab depressed on:click={click}>
				<Icon class="mdi mdi-menu" />
			</Button>
		</div>
		<span slot="title">Title</span>
		<div style="flex-grow:1" />
		<Button>Item</Button>
		<Menu right>
			<div slot="activator">
				<Button fab depressed>
					<Icon class="mdi mdi-dots-vertical" />
				</Button>
			</div>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</Menu>
	</AppBar>

<div style="position:relative;">
  <NavigationDrawer absolute {active}>
    <List>
      <ListItem>
        <span slot="prepend">
          <Icon class="mdi mdi-view-dashboard" />
        </span>
        Dashboard
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon class="mdi mdi-account-box" />
        </span>
        Account
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon class="mdi mdi-gavel" />
        </span>
        Admin
      </ListItem>
    </List>
  </NavigationDrawer>
  <Overlay index={1} {active} on:click={close} opacity={0.98} color="blue" absolute style="width:300px"/>

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