<script>
	import { 
		Icon, 
		Button, 
		Menu, 
		List, 
		ListItem, 
		NavigationDrawer,
		Overlay,
  } from 'svelte-materialify';
  import {link} from 'svelte-spa-router' 
  
  export let active = false;

  function click(){active = !active}

</script>

<NavigationDrawer absolute {active}>
  <List>
    <ListItem on:click={click}>
      <span slot="prepend">
        <Icon class="mdi mdi-view-dashboard" />
      </span>
      <a href="/" use:link>Home</a>
    </ListItem>
    <ListItem on:click={click}>
      <span slot="prepend">
        <Icon class="mdi mdi-account-box" />
      </span>
      <a href="/account" use:link>Account</a>
    </ListItem>
    <ListItem on:click={click}>
      <span slot="prepend">
        <Icon class="mdi mdi-gavel" />
      </span>
      <a href="/admin" use:link>Admin</a>
    </ListItem>
  </List>
</NavigationDrawer>
<Overlay index={1} {active} on:click={click} opacity={0.98} color="blue" absolute style="width:300px"/>
