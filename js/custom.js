const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1.2,
    initialSlide: 1,
    longSwipes: false,
    loop: true,
    centeredSlides: true,
    speed: 1500,
    spaceBetween: -80,
    effect: 'coverflow',
    direction: 'horizontal',
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        // when window width is >= 376px
        372: {
            slidesPerView: 1.5,
            spaceBetween: -120
        },
        // when window width is >= 550px
        550: {
            slidesPerView: 1.8,
            spaceBetween: -140
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2.1,
            spaceBetween: -180
        },
        // when window width is >= 1278px
        1278: {
            slidesPerView: 3,
            spaceBetween: -200
        }
    }
});
const swiper2 = new Swiper('.swiperNum2', {
    slidesPerView: 1.2,
    initialSlide: 1,
    longSwipes: false,
    loop: true,
    centeredSlides: true,
    speed: 1000,
    spaceBetween: -80,
    effect: 'coverflow',
    direction: 'horizontal',
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
        // when window width is >= 376px
        372: {
            slidesPerView: 1.5,
            spaceBetween: -120
        },
        // when window width is >= 550px
        550: {
            slidesPerView: 1.8,
            spaceBetween: -140
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2.1,
            spaceBetween: -180
        },
        // when window width is >= 1278px
        1278: {
            slidesPerView: 3,
            spaceBetween: -200
        }
    }
});