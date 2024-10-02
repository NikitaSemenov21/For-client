const widthWin = document.documentElement.clientWidth;

function burgerAnimation() {
    const header = document.querySelector('.header'),
        firstLogo = document.querySelector('.logo-first'),
        headerContainer = document.querySelector('.header-container'),
        burgerButton = document.querySelector('.burger-menu'),
        navItems = document.querySelectorAll('.nav-menu-link'),
        topLineBurger = document.querySelector('.top-line-burger-menu'),
        centerLineBurger = document.querySelector('.center-line-burger-menu'),
        bottomLineBurger = document.querySelector('.bottom-line-burger-menu'),
        topLineClose = document.querySelector('.top-line-close-icon'),
        bottomLineClose = document.querySelector('.bottom-line-close-icon'),
        closeButton = document.querySelector('.close-icon'),
        banner = document.querySelector('.banner'),
        imageMain = document.querySelector('.image-container-main'),
        heightBanner = banner.offsetHeight,
        activeClass = 'active-burger-menu',
        activeHeader = 'active-header';
    
    function openMenu() {
        firstLogo.style.display = 'none';
        burgerButton.style.display = 'none';
        header.classList.add(activeHeader);
        headerContainer.classList.add(activeClass);
        headerContainer.classList.remove('container');
        closeButton.style.display = 'block';
        document.body.style.overflow = 'hidden';
        topLineClose.style.animationName = 'openCloseIconTop';
        bottomLineClose.style.animationName = 'openCloseIconBottom';
    };

    function closeMenu() {
        firstLogo.style.display = 'block';
        burgerButton.style.display = 'grid';
        header.classList.remove(activeHeader);
        headerContainer.classList.remove(activeClass);
        headerContainer.classList.add('container');
        closeButton.style.display = 'none';  
        document.body.style.overflow = 'visible';
        topLineBurger.style.animationName = 'closeBurgerLineTop';
        centerLineBurger.style.animationName = 'closeBurgerLineCenter';
        bottomLineBurger.style.animationName = 'closeBurgerLineBottom';
    };

    burgerButton.addEventListener('click', function() {
        topLineBurger.style.animationName = 'openBurgerLineTop';
        centerLineBurger.style.animationName = 'openBurgerLineCenter';
        bottomLineBurger.style.animationName = 'openBurgerLineBottom';
        setTimeout(openMenu, 200);
    });

    closeButton.addEventListener('click', function() {
        topLineClose.style.animationName = 'cloCloseIconTop';
        bottomLineClose.style.animationName = 'cloCloseIconBottom';
        setTimeout(closeMenu, 200);
    });

    if (widthWin < 1140) {
        navItems.forEach(navItem => {
            navItem.addEventListener('click', closeMenu);
        });
    }

    if (banner.style.display != 'none') {
        if (widthWin < 980 && widthWin > 630) {
            if (imageMain) {
                imageMain.style.top = (heightBanner + 85) + 'px';
            }
        }
    }
};

function closeBanner() {
    const banner = document.querySelector('.banner'),
        burgerButton = document.querySelector('.burger-menu'),
        imageMain = document.querySelector('.image-container-main'),
        closeButton = document.querySelector('.close-icon-banner');

    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
        if (widthWin < 980 && widthWin > 630) {
            if (imageMain) {
                imageMain.style.top = '85px';
            }
        } else {
            if (imageMain) {
                imageMain.style.top = '0px';
            }
        }
    });
    
};

function slider() {
    const link = document.createElement('link');

    if (widthWin < 650) {
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        const swiper = new Swiper('.swiper', {
            navigation: {
              nextEl: '.slider-arrow-right',
              prevEl: '.slider-arrow-left',
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 1.1,
                },
                420: {
                    slidesPerView: 1.4,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1.4,
                },
                // when window width is >= 640px
                600: {
                    slidesPerView: 1.9,
                }
            },

            mousewhell: true,
            keyboard: true,
        });
        

    }
};

document.addEventListener('DOMContentLoaded', function() {
    burgerAnimation();
    closeBanner();
});

slider();