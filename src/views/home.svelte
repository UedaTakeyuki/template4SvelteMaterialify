<script>
  import {link} from 'svelte-spa-router'
</script>

<h1 on:click|self>Home</h1>
<ol>
  <li><a href="/account" use:link>Account</a></li>
  <li><a href="/admin" use:link>Admin</a></li>
</ol>
