$(document).ready(function () {

     let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');

    modal.fadeIn();
    modal_close.click(function () {
        modal.fadeOut();
    });

    modal.click(function () {
        modal.fadeOut();
    });

    modal_cont.click(function (event) {
        event.stopPropagation();
    });
    
    // 위로가기
    $('.gotop').click(function (e) {
        // href 를 막는다.
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });
    // 스크롤바 처리
    $(window).scroll(function () {
        // 스크롤바의 위치
        var scY = $(window).scrollTop();

        if (scY >= 300) {
            $('.gotop').addClass('gotop-active');
        } else {
            $('.gotop').removeClass('gotop-active');
        }

    });

    //  cs 슬라이드
    new Swiper('.sw-cs', {
        slidesPerView: 4,
        slidesPerGroup: 2,
        spaceBetween: 0,
        pagination: {
            el: ".sw-cs-pg",
            clickable: true,
        },
    });


    // 베스트 상품 메뉴 
    var best_cate_list = $('.best-cate-list>li');
    var best_cate_bg = $('.best-cate-bg');
    var distanceY = 55;
    $.each(best_cate_list, function (index, item) {
        var aTag = $(this).find('>a');
        var nowLi = $(this);
        aTag.click(function (e) {
            e.preventDefault();
            best_cate_bg.css('top', index * distanceY);
            best_cate_list.removeClass('best-cate-focus');
            nowLi.addClass('best-cate-focus');
        });
    });

    // 배너슬라이드
    new Swiper('.sw-banner2', {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: "fade",
        crossEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    // 펼침 목록 만들기
    $('.f-site-bt').click(function () {
        $('.f-site-list').stop().slideToggle();
        $('.f-site-bt').toggleClass('f-site-bt-active');
    });

});