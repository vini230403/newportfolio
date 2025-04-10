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
      },
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
    });
  });


/* scrollRevel */
const isMobile = window.innerWidth <= 768;

ScrollReveal().reveal(
  `#about .title, #about .image, #about .text,
  .divider-1, #skills .title, #skills .icons, 
  #education .title, #education .school-item, #education .course-item, 
  #education .language-item, #portfolio .title, #portfolio .portfolio-page, 
  #portfolio .swiper, #portfolio .swiper-pagination, #portfolio .divider-2, 
  #experience .title, #experience .jobs`,
  {
      origin: 'top',
      distance: '20px',
      duration: 500,
      reset: false,
      viewFactor: isMobile ? 0.1 : 0.2,
      interval: 100
  }
)