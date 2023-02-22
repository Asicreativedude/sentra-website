const defaultImage = document.querySelector('.tab-dropdown-img-default');
const accSettings = {
	speed: 300, // Animation speed
	oneOpen: true, // Close all other accordion items if true
	offsetAnchor: true, // Activate scroll to top for active item
	offsetFromTop: 180, // In pixels – Scroll to top at what distance
	scrollTopDelay: 400, // In Milliseconds – Delay before scroll to top

	classes: {
		accordion: 'tabs-mobile-w',
		header: 'tab-link',
		item: 'tab-content-c',
		body: 'tab-content-w',
		icon: 'tab-plus-icon',
		iconOpen: 'tab-minus-icon',
		image: 'tab-dropdown-img',
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
	const accordionImage = $(`.${prefix.image}`);
	const activeClass = prefix.active;

	return {
		// pass configurable object literal
		init: function (settings) {
			accordionHeader.on('click', function () {
				accordion.toggle($(this));
				if (accSettings.offsetAnchor && window.innerWidth < 991) {
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
			let images = $this.closest(accordionItem).siblings().find(accordionImage);
			for (let j = 0; j < images.length; j++) {
				if (images[j].classList.contains(activeClass)) {
					images[j].classList.toggle(activeClass);
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
			$this
				.closest(accordionItem)
				.find(accordionBody)
				.find(accordionImage)
				.toggleClass(activeClass);
			$this
				.closest(accordionItem)
				.find(accordionHeader)
				.toggleClass(activeClass);
			defaultImage.classList.remove(activeClass);

			if (!$this.closest(accordionItem).hasClass(activeClass)) {
				$this
					.closest(accordionItem)
					.find(accordionIconOpen)
					.toggleClass(activeClass);
				$this
					.closest(accordionItem)
					.find(accordionIcon)
					.toggleClass(activeClass);
				defaultImage.classList.add(activeClass);
			}
		},
	};
})();

$(document).ready(function () {
	accordion.init(accSettings);
});

document.querySelectorAll('.tab-link')[0].click();
