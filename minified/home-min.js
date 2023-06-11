var e = new Swiper('.swiper', {
	speed: 500,
	loop: !0,
	autoplay: { delay: 5e3 },
	effect: 'fade',
	fadeEffect: { crossFade: !0 },
	navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
	pagination: { el: '.swiper-pagination', type: 'bullets' },
});
e.on('slideChange', () => {
	let t = document.querySelectorAll('.swiper-slide')[e.activeIndex],
		s = document.querySelectorAll('.testimonial-company-name');
	for (let e = 0; e < s.length; e++)
		(s[e].style.opacity = 0.1),
			setTimeout(() => {
				(s[e].innerHTML = t.getAttribute('company-name')),
					(s[e].style.opacity = 1);
			}, 400);
});
const t = {
		speed: 300,
		oneOpen: !0,
		offsetAnchor: !0,
		offsetFromTop: 180,
		scrollTopDelay: 400,
		classes: {
			accordion: 'tabs-mobile-w',
			header: 'tab-link',
			item: 'tab-content-c',
			body: 'tab-content-w',
			icon: 'tab-plus-icon',
			iconOpen: 'tab-minus-icon',
			active: 'active',
		},
	},
	s = t.classes,
	o = (function () {
		const e = $(`.${s.accordion}`),
			n = e.find(`.${s.header}`),
			i = $(`.${s.item}`),
			l = $(`.${s.body}`),
			a = $(`.${s.icon}`),
			c = $(`.${s.iconOpen}`),
			d = s.active;
		return {
			init: function (e) {
				n.on('click', function () {
					o.toggle($(this)),
						t.offsetAnchor &&
							setTimeout(() => {
								$('html').animate(
									{ scrollTop: $(this).offset().top - t.offsetFromTop },
									t.speed
								);
							}, t.scrollTopDelay);
				}),
					$.extend(t, e),
					e.oneOpen &&
						$(`.${s.item}.${d}`).length > 1 &&
						$(`.${s.item}.${d}:not(:first)`)
							.removeClass(d)
							.find(`.${s.header} > .${s.icon}`)
							.removeClass(d),
					$(`.${s.item}.${d}`).find(`> .${s.body}`).show();
			},
			toggle: function (o) {
				t.oneOpen &&
					o[0] != o.closest(e).find(`> .${s.item}.${d} > .${s.header}`)[0] &&
					(o
						.closest(e)
						.find(`> .${s.item}`)
						.removeClass(d)
						.find(l)
						.slideUp(t.speed),
					o
						.closest(e)
						.find(`> .${s.item}`)
						.find(`> .${s.header} > .${s.icon}`)
						.removeClass(d),
					o.find(c).toggleClass(d),
					o.find(a).toggleClass(d));
				let n = o.closest(i).siblings().find(c);
				for (let e = 0; e < n.length; e++)
					n[e].classList.contains(d) &&
						(n[e].classList.toggle(d),
						n[e].nextElementSibling.classList.toggle(d));
				o.closest(i).siblings().find(c).hasClass(d) &&
					(o.closest(i).siblings().find(c).toggleClass(d),
					o.closest(i).siblings().find(a).toggleClass(d)),
					o
						.closest(i)
						.toggleClass(`${d}`)
						.find(`> .${s.header} > .${s.icon}`)
						.toggleClass(d),
					o.next().stop().slideToggle(t.speed),
					o.closest(i).hasClass(d) ||
						(o.closest(i).find(c).toggleClass(d),
						o.closest(i).find(a).toggleClass(d));
			},
		};
	})();
$(document).ready(function () {
	o.init(t);
}),
	document.querySelectorAll('.tab-link')[0].click();
