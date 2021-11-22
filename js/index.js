function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        fadeEffect: { crossFade: true },
        effect: 'fade',
        speed: 1800,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },

        }
    })
}




$(document).ready(function() {
    cartCalc()
    sliderMain()
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (       )         -' });
    $(".custom-scroll").mCustomScrollbar();
    $(".custom-scroll-x").mCustomScrollbar({
        axis: "x",
        theme: "light-3",
        advanced: {
            autoExpandHorizontalScroll: true
        }
    });

    if ($(window).innerWidth() < 768) {
        $(".custom-scroll-x-mob").mCustomScrollbar({
            axis: "x",
            theme: "light-3",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    }


    $(".consultation select").niceSelect()
    $(".modal1 select").niceSelect()

    $(".header__search-open").click(function() {
        $(".header__search").show()
    })

    $(".header__cart-show").click(function() {
        $(".header__cart-hidden").show()
    })

    $(".header-menu__item-show").click(function() {
        console.log(true)
        if ($(this).hasClass("header-menu__item-show--active")) {
            $(this).removeClass("header-menu__item-show--active")
        } else {
            $(".header-menu__item-show").removeClass("header-menu__item-show--active")
            $(this).addClass("header-menu__item-show--active")
        }
    })

    $(".header__burger").click(function() {
        $(".header-menu").show()
        $("body").addClass("fixed-body")
    })

    $(".header-menu__close").click(function() {
        $(".header-menu").hide()
        $("body").removeClass("fixed-body")
    })
    $(".header-menu__bg").click(function() {
        $(".header-menu").hide()
        $("body").removeClass("fixed-body")
    })

    $(document).mouseup(function(e) {
        var div = $(".header__search");
        clickOutsideElemnt(div, e)
    });
    $(document).mouseup(function(e) {
        var div = $(".header__cart-hidden");
        clickOutsideElemnt(div, e)
    });

    $(".header__search-cancel").click(function() {
        $(".header__search").hide();
    })

    $(".map__info-item").click(function() {
        console.log(true)
        $(".map__info-item").removeClass("map__info-item--active")
        $(this).addClass("map__info-item--active")
    })

    $(".cabinet-user__top").click(function() {
        $(this).toggleClass("cabinet-user__top--active")
    })

    $(".cabinet-nav__top").click(function() {
        $(this).toggleClass("cabinet-nav__top--active")
    })

    $(".cabinet-orders__all").click(function() {
        $(this).hide();
        $(".cabinet-orders__table-row").removeClass("cabinet-orders__table-row--hidden")
    })

    $(".cabinet-bonus__all").click(function() {
        $(this).hide();
        $(".cabinet-bonus__table-row").removeClass("cabinet-bonus__table-row--hidden")
    })

    $(".cabinet-pass__pass-toggle").click(function() {
        if ($(this).hasClass("cabinet-pass__pass-toggle--active")) {
            console.log(true)
            $(this).removeClass("cabinet-pass__pass-toggle--active")
            $(this).siblings("input").attr("type", "password")
        } else {
            $(this).addClass("cabinet-pass__pass-toggle--active")
            $(this).siblings("input").attr("type", "text")
            console.log(false)
        }
    })

    $(".category__sidebar-show").click(function() {
        $(this).toggleClass("category__sidebar-show--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".category__sidebar"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0 &&
            $(".category__sidebar-show").hasClass("category__sidebar-show--active")) { // и не по его дочерним элементам
            $(".category__sidebar-show").removeClass("category__sidebar-show--active")
        }
    });

    $(".order__tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".order__tab").removeClass("order__tab--active");
        $(`.order__tab[data-tab-path="${path}"]`).addClass("order__tab--active");
        $(".order__content").removeClass("order__content--active");
        $(`.order__content[data-content-path="${path}"]`).addClass("order__content--active");

    })

    $(".order__time-check input").change(function() {
        if ($(this).is(':checked')) {
            $(this).parents(".order__time-top").siblings(".order__time-form").addClass("order__time-form--hide")
        } else {
            $(this).parents(".order__time-top").siblings(".order__time-form").removeClass("order__time-form--hide")
        }
    })

    $(".order__address-check input").change(function() {
        if ($(this).is(':checked')) {
            $(this).parents(".order__address-check").siblings(".order__form-group").children("label").children(".red-star--show").addClass("red-star--removed")
        } else {
            $(this).parents(".order__address-check").siblings(".order__form-group").children("label").children(".red-star--show").removeClass("red-star--removed")
        }
    })

    $(".user__form-group--label input").keyup(function() {
        let inputVal = $(this).val()
        if (inputVal) {
            $(this).addClass("input-filled")
        } else {
            $(this).removeClass("input-filled")
        }
    });
})

function clickOutsideElemnt(div, e) {
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.hide();
    }
}

function cartCalc() {
    $('.ccalc .ccalc-minus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.ccalc').find('input').val(b);
        } else {
            $(this).closest('.ccalc').find('input').val(a);
            $(this).addClass("disabled");
        }
    });
    $('.ccalc .ccalc-plus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.ccalc').find('input').val(b);
        $(this).siblings(".ccalc-minus").removeClass("disabled");
    });
}


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.children(".nav__item-hidden").addClass("nav__item-hidden--active")
            }

        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-hidden").removeClass("nav__item-hidden--active")
    }
}