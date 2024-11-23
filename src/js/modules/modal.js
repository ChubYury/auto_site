import MicroModal from 'micromodal'

MicroModal.init({
  onShow: modal => {
    tut(modal)
  }, 
  onClose: modal => console.info(`${modal.id} is hidden`), 
  openTrigger: 'data-custom-open', 
  closeTrigger: 'data-custom-close', 
  disableScroll: true, 
  disableFocus: false, 
  awaitOpenAnimation: false, 
  awaitCloseAnimation: false, 
  debugMode: true, 
  targetModal: 'modal',
})

const buttons = Array.from(document.getElementsByClassName('js-modal-trigger'))

if (buttons.length) {
  buttons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault()
      const modalEntity = document.getElementById(button.dataset.modalName)
      const mymodal = document.getElementById('innerModal')
      
      mymodal.innerHTML = modalEntity.innerHTML
      MicroModal.show('formModal')
      document.dispatchEvent(new Event('dom-bind'))
    })
  })
}