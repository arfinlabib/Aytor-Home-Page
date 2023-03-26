$(function () {
    $('.banner_slider').slick({
        arrows:'false',
        dots:'true',
        dotsClass:'banner_dots',
    });
    $('.product_slider').slick({
        slidesToShow:4,
        dots: 'true',
        dotsClass: 'banner_dots',
        prevArrow: '<i class="fa-solid fa-chevron-left product_slider_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right product_slider_arrow"></i>',
    });
    $('#deals_countdown').countdown('2024/12/31', function (event) {
        var $this = $(this).html(event.strftime(''
            +'<div class="coundown_item"><h4>%d</h4><p>Day</p></div>' +
            '<span>:</span>' +
            +'<div class="coundown_item"><h4>%H</h4><p>Hour</p></div>' +
            '<span>:</span>' +
            +'<div class="coundown_item"><h4>%M</h4><p>Minute</p></div>' +
            '<span>:</span>' +
            +'<<div class="coundown_item"><h4>%S</h4><p>sec</p></div>'));
    });
    $('.offer_slider').slick({
        slidesToShow: 2,
        dots: 'true',
        dotsClass: 'offer_slider_btn',
        arrows: false,
    });
    $('.news_slider').slick({
        slidesToShow: 4,
        arrows: false,
    });
    new VenoBox({
        selector: ".venoBox"
    });
    
})
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
