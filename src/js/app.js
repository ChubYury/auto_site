import * as flsFunctions from "./modules/webpTest.js"
import './modules/modal.js';
import './modules/slider.js';
import './modules/valid-form.js'
import { clickSlider } from './modules/custom-mod-slide.js'
import { submitForm } from './modules/valid-form.js'

import { 
  menuOpen,
  menuClose,
  langClick,
  dropdownClick,
  closeDropdown,
  langClose
} from "./modules/buttons.js";


document.addEventListener('DOMContentLoaded', () => {
  flsFunctions.isWebp();
  
  //--- My modules ------
  menuOpen();
  menuClose();
  langClick();
  dropdownClick();
  submitForm();
  closeDropdown();
  langClose();
  clickSlider();
})
