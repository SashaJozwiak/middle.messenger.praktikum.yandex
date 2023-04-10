import { headerComponent } from './components/header/index.js'
import { loginPage as startPage } from './pages/login/index.js'
import { checkRoute, handleRoute } from './utils/route.js'

header.innerHTML = headerComponent;

handleRoute(startPage)

document.addEventListener('click', checkRoute);
