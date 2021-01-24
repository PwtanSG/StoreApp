/**
 * @format
 */
import { AppRegistry } from "react-native";


import App from './App';
//import Flex from '../components/Flex';
import Products from './components/Products'
//import  Home  from './components/homepage'
//import Startscreen from './components/Splashscreen'

import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => App);
