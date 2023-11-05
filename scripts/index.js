import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'

//Add navbar
createNavbar("Home");

//Add buttons
addButtonClickListener('btnLinkedInMateo', 'https://www.linkedin.com/in/mateo-van-damme-4826a5269/');
addButtonClickListener('btnGitHubMateo', 'https://github.com/MateoVanDamme');