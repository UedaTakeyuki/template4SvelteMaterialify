import Account from '../views/account.svelte'
import Admin from '../views/admin.svelte'
import Home from '../views/home.svelte'

const routes = {
  '/': Home,
  '/account/': Account,
  '/admin/': Admin,
}

export {routes};
