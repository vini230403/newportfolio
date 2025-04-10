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
      duration: 600,
      reset: true,
      viewFactor: isMobile ? 0.3 : 0.4,
      interval: 100
  }
)

/* button back */
const backToTopButton = document.querySelector('.back-to-top')
const footer = document.querySelector('footer') // ou use a classe/id real do seu footer

function arrowUpWhenScroll() {
  const footerTop = footer.getBoundingClientRect().top + window.scrollY
  const windowBottom = window.scrollY + window.innerHeight
  const overlap = windowBottom > footerTop

  // Mostra/esconde botão
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }

  // Se estiver sobrepondo o footer, sobe o botão
  if (overlap) {
    backToTopButton.style.bottom = '5rem'
  } else {
    backToTopButton.style.bottom = '1rem'
  }
}

window.addEventListener('scroll', arrowUpWhenScroll)