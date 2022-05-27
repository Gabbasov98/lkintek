$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { placeholder: '+7             ' });
    $(".custom-select").niceSelect()


    $(".header__burger").click(function() {
        $(".header__mob").addClass("header__mob--active")
        $("body").addClass("fixed-body")
    })

    $(".header__close").click(function() {
        $(".header__mob").removeClass("header__mob--active")
        $("body").removeClass("fixed-body")
    })

    $(".header-backdrop").click(function() {
        $(".header__mob").removeClass("header__mob--active")
        $("body").removeClass("fixed-body")
    })

    $(".header-catalog__item-show").click(function() {
        if (window.innerWidth > 992) {
            $(this).parents(".header-catalog__item").addClass("header-catalog__item--active")
        } else {
            $(this).parents(".header-catalog__item").toggleClass("header-catalog__item--active")
            $(this).siblings(".header-catalog__hidden").slideToggle()
        }

    })

    $(document).mouseup(function(e) {
        if (window.innerWidth > 992) {
            var div = $('.header-catalog__item');
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                if ($(div).hasClass("header-catalog__item--active")) {
                    $(div).removeClass("header-catalog__item--active")
                }
            }
        }
    });

    $(".footer__title").click(function() {
        $(this).toggleClass("footer__title--active")
        $(this).siblings(".footer__links").slideToggle()
    })
});