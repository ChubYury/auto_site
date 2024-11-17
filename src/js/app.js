import * as flsFunctions from "./modules/webpTest.js"
import './modules/modal.js';

import { 
  menuOpen,
  menuClose,
  langClick
} from "./modules/buttons.js";


document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  
  //--- My modules ------
  menuOpen();
  menuClose();
  langClick();
})
