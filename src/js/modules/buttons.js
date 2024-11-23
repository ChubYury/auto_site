import $ from 'jquery'
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
  const clickArea = btnMenu.firstChild.nextSibling;
  
  clickArea.addEventListener('click', e => {
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

export function langClose() {
  document.addEventListener('click', e => {
    const isObjLang = e.target.classList.contains("js-lang-open");
    const isIconLang = e.target.parentElement.classList.contains("js-lang-open");
    const isContentLang = e.target.classList.contains("js-lang-box");
    const isItemLang = e.target.parentElement.classList.contains("js-lang-box");
    const [boxLang] = document.getElementsByClassName('js-lang-box');

    if (isContentLang || isItemLang || isObjLang || isIconLang) return;
    boxLang.classList.remove('header_langs-box--active');
  })
}

//*** Dropdown ***************************** */

 export function closeDropdown() {
  const dropdownBtnList = [...document.getElementsByClassName('js-sort-btn')];
  
  if (dropdownBtnList <= 0) return
  document.addEventListener('click', e => {
    const isContentDd = e.target.parentElement.classList.contains("js-sort-dropdown");
    const isItemDd = e.target.parentElement.parentElement.classList.contains("js-sort-dropdown");
    
    if (isContentDd || isItemDd || dropdownBtnList.length <= 0) return;
    
    dropdownBtnList.forEach(ddEl => {
      const dropdownIcon = ddEl.firstElementChild;
      const dropdownContent = ddEl.parentElement.lastElementChild;

      dropdownIcon.classList.remove('sales_sort-inp--active');
      dropdownContent.classList.remove('sales_sort-list--active');
    });
  });
};

export function dropdownClick() {
  const dropdownBtnList = [...document.getElementsByClassName('js-sort-btn')];
  
  if (dropdownBtnList.length <= 0) return
  
  dropdownBtnList.forEach(ddEl => {
    ddEl.addEventListener('click', e => {
      e.preventDefault;
      const dropdownIcon = ddEl.firstElementChild;
      const dropdownContent = ddEl.parentElement.lastElementChild;

      dropdownIcon.classList.toggle('sales_sort-inp--active');
      dropdownContent.classList.toggle('sales_sort-list--active');
    });
  });
};

//**** Button up ****************************************************** */

$(window).on("scroll", function () {
  let scroll = $(window).scrollTop();
  if (scroll > 0) {
    $('.js-btn-up').addClass('btn-top_body--active');
  }
  else {
    $('.js-btn-up').removeClass('btn-top_body--active');
  }
});