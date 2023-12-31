(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-hero]'),
    closeModalBtn: document.querySelector('[data-modal-close-hero]'),
    modal: document.querySelector('[data-modal-hero]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-hero');
  }
})();
