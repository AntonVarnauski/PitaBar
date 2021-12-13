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

$('.tab').click(function() {
    let id = $(this).attr('data-tab'),
        content = $('.tab_content[data-tab="' + id + '"]');

    $('.tab.active').removeClass('active');
    $(this).addClass('active');
    console.log(id)
    $('.tab_content.tab_active').removeClass('tab_active');
    content.addClass('tab_active');
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}