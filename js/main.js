'use strict'
AOS.init();
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
$(function() {
    var h_hght = $('.hello').outerHeight();
    var h_nav = $('.header').outerHeight();
    var top;
    $(window).scroll(function() {
        top = $(this).scrollTop();
        if ((h_hght - top) <= h_nav) {
            $('.header').css('top', '0');
        } else if (top < h_hght && top > 0) {
            $('.header').css({ 'bottom': top, 'top': '' });
        } else if (top < h_nav) {
            $('.header').css({ 'top': '', 'bottom': '0' });
        }
    });
});