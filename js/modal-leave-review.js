document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-review]'),
    closeModalBtn: document.querySelector('[data-modal-close-review]'),
    modal: document.querySelector('[data-modal-review]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-review');
  }

  const phoneNumberInput = document.getElementById('phone');
  let isTyping = false; // Folosit pentru a verifica dacă utilizatorul este în timpul tastării

  // Inițializați intlTelInput
  const iti = window.intlTelInput(phoneNumberInput, {
    separateDialCode: true,
    utilsScript:
      'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js',
  });

  // Stabiliți valorile de padding în funcție de latimea ecranului
  function updatePaddingBasedOnScreenWidth() {
    if (window.innerWidth <= 767) {
      phoneNumberInput.style.paddingLeft = '106px';
    } else {
      phoneNumberInput.style.paddingLeft = '177px';
    }
  }

  // Ascultați evenimentul de focus pentru a detecta când utilizatorul începe să tasteze
  phoneNumberInput.addEventListener('focus', () => {
    isTyping = true;
  });

  // Ascultați evenimentul de blur pentru a detecta când utilizatorul a ieșit din câmpul de număr de telefon
  phoneNumberInput.addEventListener('blur', () => {
    isTyping = false;
    updatePaddingBasedOnScreenWidth(); // Actualizați padding-ul atunci când utilizatorul iese din câmp
  });

  // Asigurați-vă că valoarea de număr de telefon este corectă atunci când se modifică prefixul
  phoneNumberInput.addEventListener('change', () => {
    const numberWithoutPrefix = iti.getNumber(
      intlTelInputUtils.numberFormat.NATIONAL
    );

    if (
      numberWithoutPrefix.startsWith(
        `+${iti.getSelectedCountryData().dialCode}`
      )
    ) {
      phoneNumberInput.value = numberWithoutPrefix.slice(
        iti.getSelectedCountryData().dialCode.length + 1
      );
    } else {
      phoneNumberInput.value = numberWithoutPrefix;
    }
  });

  // Actualizați valorile de padding la redimensionarea ferestrei
  window.addEventListener('resize', () => {
    if (!isTyping) {
      updatePaddingBasedOnScreenWidth(); // Actualizați padding-ul numai dacă nu este în timpul tastării
    }
  });

  // Inițializați padding-ul la încărcarea paginii
  updatePaddingBasedOnScreenWidth();
});
