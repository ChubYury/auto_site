// cse - change of state of elements
export function cseForMenu() {
  const bodyHTML = document.body;
  const headerBody = document.getElementById('js-header');
  const [headerBlock] = document.getElementsByClassName('js-header-bg');
  const [contentMenu] = headerBlock.getElementsByClassName('js-content-menu');

  bodyHTML.classList.toggle('not-scroll');
  headerBody.classList.toggle('header-wrap--active');
  headerBlock.classList.toggle('header--active');
  contentMenu.classList.toggle('header_content-wrap--active');
};

// *** Menu button ******************
export function menuOpen() {
  const [btnMenu] = document.getElementsByClassName('js-btn-menu');
  
  btnMenu.addEventListener('click', e => {
    e.preventDefault;
    
    btnMenu.classList.toggle('btn-menu--active');
    cseForMenu();
  });
};

export function menuClose() {
  const linkList = [...document.getElementsByClassName('js-menu-close')];
  const [btnOpen] = document.getElementsByClassName('js-btn-menu');
  
  linkList.forEach(el => {
    el.addEventListener('click', e => {
      const isMenuOpen = btnOpen.classList.contains('btn-menu--active');
      
      if (!isMenuOpen) return
      btnOpen.classList.toggle('btn-menu--active');
      cseForMenu();

    });
  });
};

//*** Lang button ************************/

export function langClick() {
  const [btnLang] = document.getElementsByClassName('js-lang-open');
  const [boxLang] = document.getElementsByClassName('js-lang-box');

  btnLang.addEventListener('click', e => {
    boxLang.classList.toggle('header_langs-box--active');
  })
};