/* Abre e fecha menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Esconde menu ao clicar em link */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Carrosel */
document.querySelectorAll('.image-slider').forEach((slider) => {
    const pagination = slider.nextElementSibling;
  
    new Swiper(slider, {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: pagination,
        clickable: true
      }
    });
  });