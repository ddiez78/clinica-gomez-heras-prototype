(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-principal');
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      if (open) nav.removeAttribute('hidden');
      else nav.setAttribute('hidden', '');
    };
    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 719px)').matches) setOpen(false);
      });
    });
  }

  const form = document.getElementById('form-cita');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.hidden = false;
        status.className = 'form-status is-err';
        status.textContent = 'No hemos podido enviar. Llámanos al 925 23 36 37.';
        form.reportValidity();
        return;
      }
      status.hidden = false;
      status.className = 'form-status is-ok';
      status.textContent = 'Gracias. Te contactamos para confirmar tu cita. Si prefieres, llama al 925 23 36 37.';
      form.reset();
    });
  }
})();
