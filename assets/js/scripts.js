"use strict";

Number.isNaN = Number.isNaN || function (value) {
  return typeof value === 'number' && isNaN(value);
}; // BEGIN SELECT


if (!Math.sign) Math.sign = function (x) {
  return (x > 0) - (x < 0) || +x;
};
$(document).scroll(function () {
  svg4everybody();
});
var mySwiper = new Swiper('.activity', {
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev'
  }
});
var swiper = new Swiper(".gallery__slider", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.slider-next2',
    prevEl: '.slider-prev2'
  }
});
var swiper = new Swiper(".gallery__slider2", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.slider-next3',
    prevEl: '.slider-prev3'
  }
});
var swiper = new Swiper(".gallery__slider3", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.slider-next4',
    prevEl: '.slider-prev4'
  }
});
var swiper = new Swiper(".gallery__slider4", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.slider-next5',
    prevEl: '.slider-prev5'
  }
});
var swiper = new Swiper(".promo__slider", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: '.slider-next6',
    prevEl: '.slider-prev6'
  }
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.slider-next7',
    prevEl: '.slider-prev7'
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper
  }
});
var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1400);
  return false;
});
$('.gallery__head_item--1').click(function () {
  $('.gallery__body__item').not('.gallery__body__item--1').slideUp();
  $('.gallery__body__item--1').slideDown();
  $('.gallery__head_item').removeClass('active');
  $(this).addClass('active');
});
$('.gallery__head_item--2').click(function () {
  $('.gallery__body__item').not('.gallery__body__item--2').slideUp();
  $('.gallery__body__item--2').slideDown();
  $('.gallery__head_item').removeClass('active');
  $(this).addClass('active');
});
$('.gallery__head_item--3').click(function () {
  $('.gallery__body__item').not('.gallery__body__item--3').slideUp();
  $('.gallery__body__item--3').slideDown();
  $('.gallery__head_item').removeClass('active');
  $(this).addClass('active');
});
$('.gallery__head_item--4').click(function () {
  $('.gallery__body__item').not('.gallery__body__item--4').slideUp();
  $('.gallery__body__item--4').slideDown();
  $('.gallery__head_item').removeClass('active');
  $(this).addClass('active');
});