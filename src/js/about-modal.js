(() => {
  const refs = {
    openAboutBtn: document.querySelector('[about-open]'),
    closeAboutBtn: document.querySelector('[about-close]'),
    modal: document.querySelector('[about-modal]'),
  };

  refs.openAboutBtn.addEventListener('click', toggleModal);
  refs.closeAboutBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

