export function clickSlider() {
  const btnOpenList = [...document.getElementsByClassName('js-open-slider')];
  const btnCloseList = [...document.getElementsByClassName('js-close-slider')];
  
  if (btnOpenList.length >= 0) btnOpen(btnOpenList);
  if (btnCloseList.length >= 0) btnClose(btnCloseList);
}

function btnOpen(btnOpenlist) {
  btnOpenlist.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      
      const [bodySlider] = document.getElementsByClassName('js-body-slider');
      // console.log(bodySlider);
      

      bodySlider.classList.add('modal-slider--active');
    });
  });
};

function btnClose(btnCloselist) {
  btnCloselist.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const [bodySlider] = document.getElementsByClassName('js-body-slider');

      bodySlider.classList.remove('modal-slider--active');
    });
  });
};