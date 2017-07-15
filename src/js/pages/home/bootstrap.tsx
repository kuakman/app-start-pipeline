/**
*	Home Page Bootstrapping
*	@author kuakman <3dimentionar@gmail.com>
**/
import 'bootstrap';
import 'bootstrap-css/bootstrap.min.css!';
import HomePage from 'pages/home/home';
import { module } from '@hot';

export let component = HomePage.bootstrap();

if(module) component.setState(module.component.state);
