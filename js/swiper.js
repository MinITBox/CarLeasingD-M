// https://swiperjs.com/demos
const swiper = new Swiper('.swiper', {
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
});
