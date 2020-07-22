const jumboTL = gsap.timeline();

// create a timeline of each animation

/* Jumbo ANIMATION */
jumboTL
  .fromTo(
    '.jumbo__transparent-color',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1.2,
    }
  )
  .fromTo(
    '.header__logo',
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
    }
  )
  .fromTo(
    '.header__menu',
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    '>-1.3'
  )
  .fromTo(
    '.jumbo__titles',
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    '>-1'
  )
  .fromTo(
    '.jumbo__state',
    {
      x: '100%',
    },
    {
      x: 0,
      duration: 1.3,
    }
  )
  .fromTo(
    '.jumbo__store-info',
    {
      y: '100%',
    },
    {
      y: 0,
      duration: 1,
    },
    '>-1.8'
  )
  .fromTo(
    '.jumbo__store-info img',
    {
      y: 400,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    },
    '>-1.8'
  );

/* Collections ANIMATION */
const collectionsTL = gsap.timeline();
collectionsTL
  .fromTo(
    '.collections .col-md-6',
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  )
  .fromTo(
    '.collections .l-coll-title ',
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  )
  .fromTo(
    '.collections .r-coll-title span',
    {
      y: 300,
      opacity: 0,
    },
    {
      y: -100,
      opacity: 1,
      duration: 1,
    },
    '>-.8'
  );

/* ANIMATE ON SCROLL */
const homeController = new ScrollMagic.Controller();
const collectionsScene = new ScrollMagic.Scene({
  triggerElement: '.collections',
  triggerHook: 1,
  reverse: false,
  offset: 150,
  duration: 0,
})
  .setTween(collectionsTL)
  // .addIndicators()
  .addTo(homeController);

/* Header ANIMATION */
const headerTL = gsap.timeline();
headerTL
  .fromTo(
    '.header',
    {
      backgroundColor: 'rgba(0,0,0,0)',
    },
    {
      backgroundColor: 'rgba(0,0,0,1)',
      duration: 0.4,
    }
  )
  .fromTo(
    '.header__logo a',
    {
      scale: 1,
    },
    {
      scale: 0.8,
      duration: 0.3,
    },
    '>-.4'
  );

const headerScene = new ScrollMagic.Scene({
  triggerElement: '.jumbo',
  triggerHook: 1,
  reverse: true,
  offset: document.querySelector('.jumbo').offsetHeight + 100,
  duration: 0,
})
  .setTween(headerTL)
  // .addIndicators()
  .addTo(homeController);

/* Off-sale ANIMATION */
const offsaleTL = gsap.timeline();
offsaleTL
  .fromTo(
    '.off-sale',
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )
  .fromTo(
    '.off-sale__number',
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
    }
  )
  .fromTo(
    '.off-sale__title',
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
    },
    '>-1'
  );

const offsaleScene = new ScrollMagic.Scene({
  triggerElement: '.off-sale',
  triggerHook: 1,
  reverse: true,
  offset: 150,
  duration: document.querySelector('.off-sale').offsetHeight,
})
  .setTween(offsaleTL)
  // .addIndicators()
  .addTo(homeController);

/* Products ANIMATION */
const productsTL = gsap.timeline();
productsTL.fromTo(
  '.products .product__bg',
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 0.3,
  }
);

const productsScene = new ScrollMagic.Scene({
  triggerElement: '.products',
  triggerHook: 1,
  reverse: false,
  offset: 20,
  duration: 0,
})
  .setTween(productsTL)
  // .addIndicators()
  .addTo(homeController);

/* Footer ANIMATION */
const footerTL = gsap.timeline();
footerTL.fromTo(
  '.footer .footer-fade-in',
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.3,
    duration: 0.3,
  }
);

const footerScene = new ScrollMagic.Scene({
  triggerElement: '.footer',
  triggerHook: 1,
  reverse: false,
  offset: 50,
  duration: 0,
})
  .setTween(footerTL)
  // .addIndicators()
  .addTo(homeController);

/* Mobile ANIMATION */
const mobileMenuTL = gsap.timeline({ paused: true });
mobileMenuTL
  .fromTo(
    '.mobile-menu',
    {
      x: '-100%',
    },
    {
      x: 0,
      duration: 0.7,
    }
  )
  .fromTo(
    '.mobile-menu__link',
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
    }
  );

/* open mobile menu when clicking on hamburger menu */

const openMobileMenu = document.querySelector('.open-menu');
openMobileMenu.addEventListener('click', () => mobileMenuTL.play());

/* close mobile menu when clicking on close menu button */

const closeMobileMenu = document.querySelector('.close-menu');
closeMobileMenu.addEventListener('click', () => mobileMenuTL.reverse());

/* add classes based on screen size */

const mobileModeOn = () => {
  if (window.innerWidth <= 991) {
    document.querySelector('.header__menu').classList.add('mobile-mode');
  } else {
    document.querySelector('.header__menu').classList.remove('mobile-mode');
  }
};

mobileModeOn();

window.addEventListener('resize', (event) => mobileModeOn());

/* check screen size */
