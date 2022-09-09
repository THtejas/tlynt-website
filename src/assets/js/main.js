(() => {
  const domain = window.location.hostname
  if (!domain.endsWith('jointlynt.com') && domain !== 'localhost') {
    const newURL = window.location.href.replace('tlynt.com', 'joinTLYNT.com')
    window.location.replace(newURL)
  }

  const hamburger = {
    navToggle: document.querySelector('.menu-toggle'),
    navBody: document.querySelector('body'),
    doToggle: function (e) {
      e.preventDefault()
      this.navBody.classList.toggle('on')
    }
  }

  hamburger.navToggle.addEventListener('click', e => {
    hamburger.doToggle(e)
  })

  const modal = {
    modalToggle: document.querySelector('.modal-toggle'),
    modalClose: document.querySelector('.modal-close'),
    modalBody: document.querySelector('body'),
    doToggle: function (e) {
      e.preventDefault()
      this.modalBody.classList.toggle('open')
    }
  }

  modal.modalToggle.addEventListener('click', e => {
    modal.doToggle(e)
  })

  modal.modalClose.addEventListener('click', e => {
    modal.doToggle(e)
  })
})()
