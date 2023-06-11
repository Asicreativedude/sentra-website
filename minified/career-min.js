let e = document.querySelectorAll(
		'.career-images-collection > .employee-pictures-w'
	),
	l = document.createElement('div');
l.setAttribute('role', 'listitem'),
	l.classList.add('w-dyn-item'),
	l.classList.add('carousel-circle-w');
let t = document.createElement('div');
t.classList.add('carousel-circle'), l.appendChild(t);
let c = document.querySelectorAll(
	'.career-images-collection > .employee-pictures-w > .w-dyn-item'
);
let i = document.querySelectorAll('.employee-details');
!(function () {
	let e = ['#feb236', '#f88286', '#b9abff'];
	i.forEach((l, t) => {
		let c = e[t % e.length];
		l.style.backgroundColor = c;
	});
})(),
	(function () {
		let t = ['red', 'black', 'yellow', 'purple'];
		c.forEach((c, i) => {
			let o = l.cloneNode(!0);
			!(function (e) {
				1 === Math.floor(5 * Math.random()) && e.classList.add('dashed-circle');
			})(o.children[0]);
			let r = t[i % t.length];
			o.children[0].classList.add(r);
			for (let l = 0; l < e.length; l++)
				e[l].contains(c) && e[l].insertBefore(o, c);
		});
	})();
let o = document.querySelectorAll('.employee-picture-c');
for (let e = 0; e < o.length; e++)
	o[e].addEventListener('mouseenter', (l) => {
		o[e].children[0].classList.toggle('flipped'),
			o[e].children[1].classList.toggle('flipped');
	}),
		o[e].addEventListener('mouseleave', (l) => {
			o[e].children[0].classList.toggle('flipped'),
				o[e].children[1].classList.toggle('flipped');
		});
o.forEach((e) => {
	1 === Math.floor(8 * Math.random()) &&
		(e.children[0].classList.toggle('flipped'),
		e.children[1].classList.toggle('flipped'));
});
