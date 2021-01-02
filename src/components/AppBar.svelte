<script>
	import { 
		MaterialApp, 
		AppBar, 
		Icon, 
		Button, 
		Menu, 
		List, 
		ListItem, 
    Overlay,
  } from 'svelte-materialify';
  import {link, push} from 'svelte-spa-router' 
  
  export let active = false;

  function click(){active = !active}

</script>

<AppBar style="position: relative;z-index: 1;">
  <div slot="icon">
    <Button fab depressed on:click={click}>
      <Icon class="mdi mdi-menu" />
    </Button>
  </div>
  <span slot="title">Title</span>
  <div style="flex-grow:1" />
  <Button><a href="/" use:link>Home</a></Button>
  <Button><a href="/account" use:link>Account</a></Button>
  <Button><a href="/admin" use:link>Admin</a></Button>
  <Menu right>
    <div slot="activator">
      <Button fab depressed>
        <Icon class="mdi mdi-dots-vertical" />
      </Button>
    </div>
    <List>
      <ListItem on:click={() => push('/')}>Home</ListItem>
      <ListItem on:click={() => push('/account')}>Account</ListItem>
      <ListItem on:click={() => push('/admin')}>Admin</ListItem>
    </List>
  </Menu>
</AppBar>