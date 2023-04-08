import { headerComponent } from './components/header/index.js'
import { loginPage as startPage } from './pages/login/index.js'
import { checkRoute, handleRoute } from './utils/route.js'

//const header = document.querySelector('#header');
//const main = document.querySelector('#main');
//const footer = document.querySelector('#footer');

header.innerHTML = headerComponent;

handleRoute(startPage)

document.addEventListener('click', checkRoute);

