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
  
  export let active = false;

  function click(){active = !active}

</script>

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
<Overlay index={1} {active} on:click={click} opacity={0.98} color="blue" absolute style="width:300px"/>
