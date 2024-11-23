export function submitForm() {
  const formList = [...document.getElementsByClassName('js-form')];

  if (formList.length <= 0) return;
  formList.forEach(activeForm => {
    activeForm.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log([...activeForm.querySelectorAll('input[type=radio]')].find(r => r.checked)?.value);
      activeForm.querySelectorAll('input[type=radio]')
      
      
    });

    // const body = new FormData(activeForm)
    // const method = activeForm.getAttribute('method');
    // const action = activeForm.getAttribute('action');
    // const inputList = activeForm.querySelectorAll('input');
    // const textAreaItem = activeForm.getElementById('textarea');

    // const form = document.forms['myForm'];
    // const radios = activeForm.elements['js-radio-group'];
    
    // const selectedRadio = Array.from(radios).find(r => r.checked)?.value;

    
    
  });
  
  // formList.forEach(activeForm => {
  //   activeForm.addEventListener('submit', (e) => {e.preventDefault()});
  //   const activeFormValid = new Validator(activeForm, async(isValid) => {
  //     if (isValid) {
  //       const {method} = activeForm.dataset;
  //       const action = `http://localhost:3010/${activeForm.dataset.action}`;
        
  //       if (method === 'GET') {
  //         const emailValue = activeForm.querySelector('[data-rules]').value;
  //         const reqPath = action+'/'+emailValue  
  //         console.log(reqPath);
  //         const response = await fetch(reqPath);

  //         if (response.ok) {
  //           const result = await response.json();
            
  //           activeForm.reset();
  //           console.log(result);
  //           document.cookie = `token=${result.token}`
  //           // document.location = 'http://localhost:3001/changePasword';
  //         };
  //       } else {
  //         const body = new FormData(activeForm)
  //         const value = Object.fromEntries(body.entries());
  //         // console.log('Out data: '+action, value);
          
  //         const response = await fetch(action, {
  //           credentials: 'include',
  //           method,
  //           headers: {
  //             'Content-Type': 'application/JSON;charset=utf-8',
  //           },
  //           body: JSON.stringify(value),
  //         });

  //         if (response.ok) {
  //           activeForm.reset();
  //           const result = await response.json();
            
  //           if (activeForm.id == 'form-contact') {
  //             const bodyModal = document.getElementById('contact-popap');
              
  //             bodyModal.classList.toggle('modal--active');
  //             notScroll();
  //           }

  //           if (result.refreshToken) {
  //             console.log(result.refreshToken);
  //           }
  //           // console.log(result);
  //         };
  //       }

  //     };
  //   });
  //   activeFormValid.init();
  // });
};

