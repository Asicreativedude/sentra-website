function d(e) {
	console.log(e);
	let t = document.createElement('div');
	t.classList.add('letter-tube-c');
	let l = document.createElement('h2');
	l.classList.add('glossary-letter'), (l.textContent = e);
	let n = document.createElement('img');
	(n.src =
		'https://assets-global.website-files.com/63e21dce115cee384ab9eeca/63e369b9575098fd89563f86_builtFor-pipe.svg'),
		(n.loading = 'lazy'),
		(n.alt = 'decorative-pipe'),
		n.classList.add('letter-pipe-img'),
		t.appendChild(n);
	let o = document.createElement('div');
	return (
		(o.id = e),
		o.classList.add('letter-anchor-embed'),
		l.appendChild(o),
		t.appendChild(l),
		t
	);
}
async function u(e) {
	e.forEach((e) => {
		let t = e.getAttribute('title');
		if ((console.log(t), t && t.length > 0)) {
			let l = t[0].toUpperCase();
			if (!c.has(l)) {
				const t = d(l);
				e.prepend(t), c.add(l);
			}
		}
	});
}
let c = new Set();
const a = new Event('mouseover');
(window.fsAttributes = window.fsAttributes || []),
	window.fsAttributes.push([
		'cmsload',
		(e) => {
			console.log('cmsload Successfully loaded!');
			const [t] = e;
			t.renderingQueue
				.then(async () => {
					function e() {
						for (let e = 0; e < l.length; e++)
							for (let t = 0; t < n.length; t++)
								n[t].textContent == l[e].textContent &&
									!n[t].classList.contains('w-condition-invisible') &&
									l[e].classList.remove('disabled-link');
					}
					const t = document.querySelectorAll('.glossary-item');
					await u(t);
					let l = document.querySelectorAll('.letter-anchor-link'),
						n = document.querySelectorAll('.glossary-letter');
					e(),
						document
							.querySelector('.glossary-lobby-box')
							.addEventListener('mouseenter', () => {
								document.querySelector('.right-arrow-link').dispatchEvent(a);
							});
				})
				.catch((e) => {
					console.error(e);
				});
		},
	]);
