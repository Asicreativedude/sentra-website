const s = document.querySelector('.product-page-posture-s'),
	e = document.querySelector('.tab-dropdown-img-default'),
	t = {
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
			image: 'tab-dropdown-img',
			active: 'active',
		},
	},
	o = t.classes,
	i = (function () {
		const l = $(`.${o.accordion}`),
			n = l.find(`.${o.header}`),
			c = $(`.${o.item}`),
			a = $(`.${o.body}`),
			d = $(`.${o.icon}`),
			g = $(`.${o.iconOpen}`),
			f = $(`.${o.image}`),
			r = o.active;
		return {
			init: function (s) {
				n.on('click', function () {
					i.toggle($(this)),
						t.offsetAnchor &&
							window.innerWidth < 991 &&
							setTimeout(() => {
								$('html').animate(
									{ scrollTop: $(this).offset().top - t.offsetFromTop },
									t.speed
								);
							}, t.scrollTopDelay);
				}),
					$.extend(t, s),
					s.oneOpen &&
						$(`.${o.item}.${r}`).length > 1 &&
						$(`.${o.item}.${r}:not(:first)`)
							.removeClass(r)
							.find(`.${o.header} > .${o.icon}`)
							.removeClass(r),
					$(`.${o.item}.${r}`).find(`> .${o.body}`).show();
			},
			toggle: function (i) {
				t.oneOpen &&
					i[0] != i.closest(l).find(`> .${o.item}.${r} > .${o.header}`)[0] &&
					(i
						.closest(l)
						.find(`> .${o.item}`)
						.removeClass(r)
						.find(a)
						.slideUp(t.speed),
					i
						.closest(l)
						.find(`> .${o.item}`)
						.find(`> .${o.header} > .${o.icon}`)
						.removeClass(r),
					i.find(g).toggleClass(r),
					i.find(d).toggleClass(r));
				let $ = i.closest(c).siblings().find(g);
				for (let s = 0; s < $.length; s++)
					$[s].classList.contains(r) &&
						($[s].classList.toggle(r),
						$[s].nextElementSibling.classList.toggle(r));
				let m = i.closest(c).siblings().find(f);
				for (let s = 0; s < m.length; s++)
					m[s].classList.contains(r) && m[s].classList.toggle(r);
				i.closest(c).siblings().find(g).hasClass(r) &&
					(i.closest(c).siblings().find(g).toggleClass(r),
					i.closest(c).siblings().find(d).toggleClass(r)),
					i
						.closest(c)
						.toggleClass(`${r}`)
						.find(`> .${o.header} > .${o.icon}`)
						.toggleClass(r),
					i.next().stop().slideToggle(t.speed),
					i.closest(c).find(a).find(f).toggleClass(r),
					i.closest(c).find(n).toggleClass(r),
					e.classList.remove(r),
					s.classList.remove(r),
					i.closest(c).hasClass(r) ||
						(i.closest(c).find(g).toggleClass(r),
						i.closest(c).find(d).toggleClass(r),
						e.classList.add(r),
						s.classList.add(r));
			},
		};
	})();
$(document).ready(function () {
	i.init(t);
}),
	document.querySelectorAll('.tab-link')[0].click();
