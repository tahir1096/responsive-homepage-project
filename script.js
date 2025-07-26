$(document).ready(function () {

    $('.hamburger-menu').on('click', function () {
        $(this).toggleClass('open');
        $('.mobile-nav').slideToggle(200);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    $('.tab-link').on('click', function () {
        $('.tab-link').removeClass('active');
        $(this).addClass('active');

        var tabId = $(this).data('tab');
        $('.tab-pane').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    let currentSlide = 0;
    const slides = $('.testimonial-slide');
    const slideCount = slides.length;

    function showSlide(index) {
        slides.removeClass('active');
        $(slides.get(index)).addClass('active');
    }

    $('.next').on('click', function () {
        currentSlide = (currentSlide + 1) % slideCount;
        showSlide(currentSlide);
    });

    $('.prev').on('click', function () {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});