$(function () {
    // menu
    $('nav ul.menu li').mouseover(function () {
        $('ul.submenu').stop().fadeIn();
    });
    $('nav ul.menu li').mouseout(function () {
        $('ul.submenu').stop().fadeOut();
    });


    //menu호버시 배경 나옴
    $("ul.menu").hover(
        () => {
            $(".smenu_bar").stop().slideDown(1000);
            isHovered = true; // 마우스가 올라갔음을 표시
            updateStyles($(window).scrollTop() > 110, isHovered);
        },
        () => {
            $(".smenu_bar").stop().fadeOut('fast');
            isHovered = false; // 마우스가 나갔음을 표시
            updateStyles($(window).scrollTop() > 110, isHovered);
        }
    );


    
    //language
    $('.lang p').click(function () {
        var $ul = $(this).siblings('ul');
        $ul.stop().slideToggle(); // 클릭 시 슬라이드 토글
    });


     // 제품종류 호버
     $('.slider1 ul.slick-list li').hover(
        function() {
            // 마우스를 올렸을 때
            $(this).addClass('on'); // li에 .on 클래스 추가
            $(this).find('span.hover').show(); // 현재 li 내부의 span.hover 요소 보이기
        },
        function() {
            // 마우스를 떠날 때
            $(this).removeClass('on'); // li에서 .on 클래스 제거
            $(this).find('span.hover').hide(); // 현재 li 내부의 span.hover 요소 숨기기
        }
    );

    // 인디케이터
    var swiper = new Swiper(".slickContainer", {
        navigation: {
            nextEl: ".larrow",
            prevEl: ".rarrow",
        },
    });
});