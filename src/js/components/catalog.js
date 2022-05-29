function gallery() {
    var swiper = new Swiper(".catalog-item .mySwiper", {
        spaceBetween: 12,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".catalog-item .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".catalog-item .swiper-button-next",
            prevEl: ".catalog-item .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

function sameSlider() {
    var swiper = new Swiper('.same-category .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 14,
    })
}

$(document).ready(function() {
    gallery()
    sameSlider()

    $(".filter__more").click(function() {
        $(this).toggleClass("filter__more--active")
        $(this).parents(".filter__group").find(".filter-hide").toggleClass("filter-show")
    })


    const rangeSlider = document.getElementById("range-slider")
    const rangeInput0 = document.getElementById("input-range0")
    const rangeInput1 = document.getElementById("input-range1")
    const rangeInputs = [rangeInput0, rangeInput1]
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            start: [0, 999999],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': 999999
            }
        });
    }
    if (rangeSlider) {
        rangeSlider.noUiSlider.on('update', function(values, handle) {
            rangeInputs[handle].value = Math.round(values[handle])
        })
        rangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        })
    }


    const setRangeSlider = (i, value) => {
        let array = [null, null];
        array[i] = value;

        rangeSlider.noUiSlider.set(array);
    };


    $(".filter__btn").click(function() {
        $(this).parents(".filter__group").toggleClass("filter__group--active")
    })

    $(".catalog__filter-btn").click(function() {
        $(".filter").addClass("filter--active")
        $("body").addClass("fixed-body")
    })

    $(".filter-bg").click(function() {
        $(".filter").removeClass("filter--active")
        $("body").removeClass("fixed-body")
    })

    $(".catalog-item__tab").click(function() {
        let path = $(this).attr("data-tabs-path")
        $(".catalog-item__tab").removeClass("catalog-item__tab--active")
        $(`.catalog-item__tab[data-tabs-path="${path}"]`).addClass("catalog-item__tab--active")
        $(".catalog-item__content").removeClass("catalog-item__content--active")
        $(`.catalog-item__content[data-content-path="${path}"]`).addClass("catalog-item__content--active")

    })
})