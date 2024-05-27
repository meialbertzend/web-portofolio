// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

//Form to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyimwJTlIg5tA7rNsHWEOnpW8xb2TQGbgv6LAO2r9Ho96aDj08qa1_RYAXLFtwFEuKNcw/exec'
const form = document.forms['contact-form']
const btnSubmit = document.querySelector('.btn-submit');
const loader = document.querySelector('.loader');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault()
  // Ketika tombol sumbit diklik
  // tampilkan loader hilangkan tombol kirim
  loader.classList.toggle('hidden');
  btnSubmit.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
  // tampilkan kirim hilangkan tombol loader
        loader.classList.toggle('hidden');
        btnSubmit.classList.toggle('hidden');
        //tampilkan alert
        myAlert.classList.toggle('hidden');
        //reset form
        form.reset();
        console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})
document.getElementById('close-alert').addEventListener('click', function() {
    document.getElementById('success-alert').classList.add('hidden');
});

