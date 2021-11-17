require('./index.html')
import style from "./style/style.css";
import { addEventListeners } from "./modules/UI.js";
import {loadData} from "./modules/Storage.js";

//adds all required event listeners for the page to run properly
addEventListeners();
loadData();
//end