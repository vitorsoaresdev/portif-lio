const tablinks = document.querySelectorAll('.tab-links');
const tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

const sidemenu = document.querySelector('#sidemenu');

function openmenu() {
    sidemenu.style.right = '0';
}

function closemenu() {
    sidemenu.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzURYXhfr9y3TQUrXVyRzHnRcjjZEtTYTtJn4agG40dnoavAzs2QJdSBrhmWFb8GEmV/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.querySelector('#msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Mensagem enviada com sucesso!'
        setTimeout(function() {
            msg.innerHTML = ''
        }, 3000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })