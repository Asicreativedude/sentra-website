//testimonials swiperjs
var swiper = new Swiper('.swiper', {
	speed: 500,
	loop: true,
	autoplay: {
		delay: 5000,
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});

swiper.on('slideChange', () => {
	let activeSlide =
		document.querySelectorAll('.swiper-slide')[swiper.activeIndex];
	let companyNameText = document.querySelectorAll('.testimonial-company-name');
	for (let i = 0; i < companyNameText.length; i++) {
		companyNameText[i].style.opacity = 0.1;
		setTimeout(() => {
			companyNameText[i].innerHTML = activeSlide.getAttribute('company-name');
			companyNameText[i].style.opacity = 1;
		}, 400);
	}
});

//mobile tabs
const accSettings = {
	speed: 300, // Animation speed
	oneOpen: true, // Close all other accordion items if true
	offsetAnchor: true, // Activate scroll to top for active item
	offsetFromTop: 180, // In pixels – Scroll to top at what distance
	scrollTopDelay: 400, // In Milliseconds – Delay before scroll to top

	classes: {
		accordion: 'tabs-w',
		header: 'tab-link',
		item: 'tab-content-c',
		body: 'tab-content-w',
		icon: 'tab-plus-icon',
		iconOpen: 'tab-minus-icon',
		active: 'active',
	},
};

const prefix = accSettings.classes;

const accordion = (function () {
	const accordionElem = $(`.${prefix.accordion}`);
	const accordionHeader = accordionElem.find(`.${prefix.header}`);
	const accordionItem = $(`.${prefix.item}`);
	const accordionBody = $(`.${prefix.body}`);
	const accordionIcon = $(`.${prefix.icon}`);
	const accordionIconOpen = $(`.${prefix.iconOpen}`);
	const activeClass = prefix.active;

	return {
		// pass configurable object literal
		init: function (settings) {
			accordionHeader.on('click', function () {
				accordion.toggle($(this));
				if (accSettings.offsetAnchor) {
					setTimeout(() => {
						$('html').animate(
							{ scrollTop: $(this).offset().top - accSettings.offsetFromTop },
							accSettings.speed
						);
					}, accSettings.scrollTopDelay);
				}
			});

			$.extend(accSettings, settings);
			// ensure only one accordion is active if oneOpen is true
			if (settings.oneOpen && $(`.${prefix.item}.${activeClass}`).length > 1) {
				$(`.${prefix.item}.${activeClass}:not(:first)`)
					.removeClass(activeClass)
					.find(`.${prefix.header} > .${prefix.icon}`)
					.removeClass(activeClass);
			}
			// reveal the active accordion bodies
			$(`.${prefix.item}.${activeClass}`).find(`> .${prefix.body}`).show();
		},

		toggle: function ($this) {
			if (
				accSettings.oneOpen &&
				$this[0] !=
					$this
						.closest(accordionElem)
						.find(`> .${prefix.item}.${activeClass} > .${prefix.header}`)[0]
			) {
				$this
					.closest(accordionElem)
					.find(`> .${prefix.item}`)
					.removeClass(activeClass)
					.find(accordionBody)
					.slideUp(accSettings.speed);
				$this
					.closest(accordionElem)
					.find(`> .${prefix.item}`)
					.find(`> .${prefix.header} > .${prefix.icon}`)
					.removeClass(activeClass);

				$this.find(accordionIconOpen).toggleClass(activeClass);
				$this.find(accordionIcon).toggleClass(activeClass);
			}
			let icons = $this
				.closest(accordionItem)
				.siblings()
				.find(accordionIconOpen);

			for (let i = 0; i < icons.length; i++) {
				if (icons[i].classList.contains(activeClass)) {
					icons[i].classList.toggle(activeClass);
					icons[i].nextElementSibling.classList.toggle(activeClass);
				}
			}
			if (
				$this
					.closest(accordionItem)
					.siblings()
					.find(accordionIconOpen)
					.hasClass(activeClass)
			) {
				$this
					.closest(accordionItem)
					.siblings()
					.find(accordionIconOpen)
					.toggleClass(activeClass);
				$this
					.closest(accordionItem)
					.siblings()
					.find(accordionIcon)
					.toggleClass(activeClass);
			}
			// show/hide the clicked accordion item
			$this
				.closest(accordionItem)
				.toggleClass(`${activeClass}`)
				.find(`> .${prefix.header} > .${prefix.icon}`)
				.toggleClass(activeClass);
			$this.next().stop().slideToggle(accSettings.speed);
		},
	};
})();

$(document).ready(function () {
	accordion.init(accSettings);
});

document.querySelectorAll('.tab-link')[0].click();

//homepage video last frame
let video = document.querySelector('.homepageVid');
let lastFrame = document.querySelector('.homepagevid-lastframe');
video.addEventListener('ended', () => {
	lastFrame.style.display = 'block';
});
