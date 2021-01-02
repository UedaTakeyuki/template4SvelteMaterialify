<script>
  import {link} from 'svelte-spa-router' 
</script>

<h1 on:click={() => console.log("h1:account")}>Account</h1>
<ol>
  <li><a href="/admin" use:link>Admin</a></li>
  <li><a href="/" use:link>Home</a></li>
</ol>
