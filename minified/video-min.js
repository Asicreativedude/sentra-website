window.onscroll = function () {
	window.pageYOffset > t
		? (e.classList.remove('silent-nav'), o(e))
		: (e.classList.add('silent-nav'), r(e));
};
let e = document.getElementById('navBar'),
	t = e.offsetTop;
function o(e) {
	e.classList.remove('silent-nav');
	for (let t = 0; t < e.children.length; t++) o(e.children[t]);
}
function r(e) {
	e.classList.add('silent-nav');
	for (let t = 0; t < e.children.length; t++) r(e.children[t]);
}
let l = document.querySelectorAll('.resources-tag-w');
for (const e of l)
	('rgb(23, 184, 144)' != e.style.backgroundColor &&
		'rgb(65, 191, 232)' != e.style.backgroundColor &&
		'rgb(245, 233, 96)' != e.style.backgroundColor) ||
		e.children[0].classList.remove('white-text');
const n = Plyr.setup('.player', {
		controls: [
			'play-large',
			'play',
			'progress',
			'current-time',
			'mute',
			'volume',
			'captions',
			'settings',
			'pip',
			'airplay',
		],
	}),
	c = window.location.href,
	i = new URLSearchParams(window.location.search),
	s = Object.fromEntries(i.entries());
document.querySelectorAll('[cd-popup=trigger]').forEach((e) => {
	e.addEventListener('click', () => {
		let t = e.querySelector('.video-popup-c');
		t.classList.add('active'),
			document.body.appendChild(t),
			(s.name = t.querySelector('.player').getAttribute('id')),
			window.history.pushState({}, '', c + '?name=' + s.name),
			t
				.querySelector('.video-popup-close-btn')
				.addEventListener('click', () => {
					n.forEach((o) => {
						o.pause(),
							t.classList.remove('active'),
							e.appendChild(t),
							window.history.pushState({}, '', c.split('?')[0]);
					});
				});
	});
});
document.querySelectorAll('.video-popup-c').forEach((e, t) => {
	e.querySelector('.player');
	!(function (e, t) {
		const o = e.querySelector('.player').getAttribute('id');
		if (s.name != o) return;
		e.classList.add('active'),
			document.body.appendChild(e),
			e
				.querySelector('.video-popup-close-btn')
				.addEventListener('click', () => {
					n.forEach((t) => {
						t.pause(),
							e.classList.remove('active'),
							e.parentNode.appendChild(e),
							window.history.pushState({}, '', c.split('?')[0]);
					});
				});
	})(e);
});
