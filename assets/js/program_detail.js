/*Sticky navbar*/
var navbarElem = document.getElementById('js-sticky-navbar');
var navbarSourceBottom = navbarElem.getBoundingClientRect().bottom + window.pageYOffset - 50;

window.onscroll = function() {
    if (navbarElem.classList.contains('second-nav__content--sticky') && window.pageYOffset < navbarSourceBottom) {
        navbarElem.classList.remove('second-nav__content--sticky');
        $('.room-preferences__content--fixed').addClass('room-preferences__content--absolute');
    } else if (window.pageYOffset > navbarSourceBottom) {
        navbarElem.classList.add('second-nav__content--sticky');
        $('.room-preferences__content--fixed').removeClass('room-preferences__content--absolute');
    }
};

/*Sticky navbar elements on scroll*/
var lastId,
    topMenu = $(".second-nav__menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 900);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("second-nav__menu-link--active")
            .end().filter("[href='#" + id + "']").parent().addClass("second-nav__menu-link--active");
    }
});

/*Sticky navbar elements on scroll*/
var lastId,
    topMenu = $(".second-nav__menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    e.preventDefault();
});

$('.second-nav__view.js-scroll').click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    $(this).addClass('point-down');
    e.preventDefault();
});



// Bind to scroll
$(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("second-nav__menu-link--active")
            .end().filter("[href='#" + id + "']").parent().addClass("second-nav__menu-link--active");
    }
});


$(window).scroll(function() {
    var room = document.getElementById("rooms").getBoundingClientRect();
    if (room.top < 200 && room.bottom > 210) {
        $(".room-preferences__content").removeClass('room-preferences__content--absolute');
        $(".second-nav__content").addClass('in-property-page-rooms-section');

    } else if (room.bottom < 200) {
        $(".room-preferences__content").addClass('room-preferences__content--absolute');
        $(".second-nav__content").removeClass('in-property-page-rooms-section');
        $(".second-nav__view-text--view").removeClass('point-down');
    } else {
        $(".second-nav__view-text--view").addClass('point-down');

        $(".second-nav__content").removeClass('in-property-page-rooms-section');
    }
});
/*Calculator*/


/*Select room*/
$(function() {
    function totalsum() {
        var program_price = parseInt($(".room-preferences__program .cost").text());
        var accommodation_price = parseInt($(".room-preferences__accommodation .cost").text());
        var miscellanious_price = parseInt($(".room-preferences__miscellanious .cost").text());
        var scholarship_price = parseInt($(".room-preferences__scholarship .percent").text());

        var totalsum = (program_price + accommodation_price + miscellanious_price) * (100 + scholarship_price) / 100;

        $('.room-preferences__total .room-preferences__program-price span').text(totalsum);
        $('.room-preferences__main input[name=program]').val(program_price);
        $('.room-preferences__main input[name=accommodation]').val(accommodation_price);
        $('.room-preferences__main input[name=miscellanious]').val(miscellanious_price);
        $('.room-preferences__main input[name=scholarship]').val(scholarship_price);
        $('.room-preferences__main input[name=total]').val(totalsum);

    }
    totalsum();

    $('.js-select-room').on('click', function() {
        var roomname = $(this).parents('.room-matrix__room ').find('.room-matrix__room-name').html();
        var roomprice = $(this).children('.room-matrix__select').find('.room-matrix__price').html();



        if ($(this).hasClass('selected-room')) {
            $(this).removeClass('selected-room');
            $('.room-preferences__accommodation .rp_subtitle_not').removeClass('hide');
            $('.room-preferences__accommodation .rp_subtitle').addClass('hide');
            $('.room-preferences__accommodation .rp_subtitle').empty();
            $('.room-preferences__accommodation .room-preferences__program-price .cost').text("0");
            totalsum();


        } else {
            $('.js-select-room').removeClass('selected-room');
            $(this).addClass('selected-room');
            $('.room-preferences__accommodation .rp_subtitle_not').addClass('hide');
            $('.room-preferences__accommodation .rp_subtitle').removeClass('hide');
            $('.room-preferences__accommodation .rp_subtitle').html(roomname);
            $('.room-preferences__accommodation .room-preferences__program-price .cost').text(roomprice);
            totalsum();

        };

    });
});

$(function() {
    function count_totals() {

        var total = 0; // значение общей суммы заказа

        var list = ""; // перечень заказанных товаров

        var listHidden = "";

        var discount = 0.15; //скидка

        var col = 0;
        $('.cart_item').each(function() {

            var price = $(this).find(".product-price__value").text(); // исходная цена товар
            var qty = $(this).find(".product-quantity__input").val(); // значение value number
            var title = $(this).find(".product-name__text").text(); // название товара

            var summ = price * qty; // значение конечной цены за товар


            $(this).find(".product-subtotal__price").text(summ);

            total += summ;

            if (summ != 0) { list += "<li> " + title + " " + qty + " шт" + " </li> "; }

            if (summ != 0) { listHidden += "| " + title + " " + qty + " шт" + " |"; }
            col += +qty

        });
        var sale = '';

        if (col >= 100) {
            sale = total * discount; //считаем скидку
            total = total - sale;
        }
        list = '<ul>' + list + '</ul>';
        listHidden = listHidden + " Общая сумма заказа " + total + " руб.";

        $(".order-amount__second p").text(total + ' ' + sale); // обновляем общую сумму
        $(".list_products").html(list); // в textarea добавляем
        $("#hidden-info").val(listHidden);
    }

    count_totals();
    $("input").on("change", function() {
        count_totals();
    })

});



$('.room-preferences__selected-clear').on('click', function() {
    $('.room-preferences__unselected').removeClass('hide');
    $('.room-preferences__selected').addClass('hide');
    $('.js-select-room').removeClass('selected-room');
});



$(document).ready(function() {
    $('#lightgallery').lightGallery();

});



$('.gall_item_click').on('click', function() {
    $('.gall_item:nth-child(n+8)').trigger('click');
});
$(document).ready(function() {

    $('.program_detail .tabs_nav .nav-tabs li').click(function() {
        var tab_id = $(this).children('').attr('href');

        $('.program_detail .nav-tabs li').removeClass('current');
        $('.tab-content .tab-pane').removeClass('current');

        $(this).addClass('current');
        $(tab_id).addClass('current');
    })

});


$('.pe_icon').on('click', function() {
    if ($(this).parents('.popular-entities-list-item').hasClass('opened')) {
        $(this).parents('.program_desc').children('.about__button--more').removeClass('expand');
        $(this).parents('.program_desc').removeClass('about__summary-wrapper--open');
        $(this).parents('.popular-entities-list-item').removeClass('opened');
    } else {
        $('.popular-entities-list-item').removeClass('opened');
        $(this).parents('.program_desc').children('.about__button--more').addClass('expand');
        $(this).parents('.program_desc').addClass('about__summary-wrapper--open');
        $(this).parents('.popular-entities-list-item').addClass('opened');
    }

});

$('.about__button--more').on('click', function() {
    $(this).toggleClass('expand');
    $(this).parents('.program_desc').toggleClass('about__summary-wrapper--open');
});


$('.tabs_nav .nav-tabs li a').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    var target = $(href);
    var top = target.offset().top;
    $('html,body').stop();
});


$('.secondary-nav-dropdown__trigger').on('click', function() {
    $(this).parents('.secondary-nav-dropdown').children('.secondary-nav-dropdown-menu').toggle();
});
var cbpHorizontalMenu = (function() {

    var $listItems = $('#cbp-hrmenu > ul > li'),
        $menuItems = $listItems.children('a'),
        $body = $('body'),
        current = -1;

    function init() {
        $menuItems.on('click', open);
        $listItems.on('click', function(event) { event.stopPropagation(); });
    }

    function open(event) {
        $('.secondary-nav-dropdown-menu').hide();
        if (current !== -1) {
            $listItems.eq(current).removeClass('cbp-hropen');
        }

        var $item = $(event.currentTarget).parent('li'),
            idx = $item.index();

        if (current === idx) {
            $item.removeClass('cbp-hropen');
            current = -1;
        } else {
            $item.addClass('cbp-hropen');
            current = idx;
            $body.off('click').on('click', close);
        }

        return false;

    }

    function close(event) {
        $listItems.eq(current).removeClass('cbp-hropen');
        current = -1;
    }

    return { init: init };

})();

$(function() {
    cbpHorizontalMenu.init();
});