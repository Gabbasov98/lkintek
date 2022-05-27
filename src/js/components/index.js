function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000
        },
        speed: 1000,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    })
}

function bannerSlider() {
    var swiper = new Swiper('.banners .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 13
            },
            768: {
                slidesPerView: 3,
            },
        }
    })
}

function categoriesSlider() {
    var swiper = new Swiper('.index-categories .swiper-container', {
        slidesPerView: "auto",
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            576: {
                spaceBetween: 28,
            },
        }
    })
}

let collectionSlidersArray = []

function collectionSliders() {
    $(".collection__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        collectionSlidersArray[index] = new Swiper(`.collection__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 4,
            spaceBetween: 13,
            navigation: {
                nextEl: `.collection__slider[data-slider-id="${index}"] .swiper-button-next `,
                prevEl: `.collection__slider[data-slider-id="${index}"] .swiper-button-prev `,
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                },
                1050: {
                    slidesPerView: 4,
                },
                1250: {
                    slidesPerView: 5,
                },
            }
        })
    })
}

function serviceSlider() {
    var swiper = new Swiper('.service-collection .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.service-collection .swiper-button-next',
            prevEl: '.service-collection .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 12
            },
            992: {
                slidesPerView: 3,
            },
        }
    })
}


$(document).ready(function() {
    mainSlider()
    bannerSlider()
    categoriesSlider()
    collectionSliders()
    serviceSlider()

})