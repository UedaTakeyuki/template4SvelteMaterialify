<script>
  import {link} from 'svelte-spa-router' 
</script>

<h1 on:click={() => console.log("h1:admin")}>Admin</h1>
<ol>
  <li><a href="/account" use:link>Account</a></li>
  <li><a href="/" use:link>Home</a></li>
</ol>
