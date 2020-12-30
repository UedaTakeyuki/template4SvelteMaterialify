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
  
  export let active = false;
  
  function click(){active = !active}

</script>

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