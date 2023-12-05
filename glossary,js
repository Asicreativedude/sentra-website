let c = new Set();
const a = new Event('mouseover');
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
	'cmsload',
	(o) => {
		console.log('cmsload Successfully loaded!');
		const [l] = o;
		l.renderingQueue
			.then(async () => {
				const e = document.querySelectorAll('.glossary-item');
				await u(e);
				let t = document.querySelectorAll('.letter-anchor-link'),
					n = document.querySelectorAll('.glossary-letter');
				function i() {
					for (let s = 0; s < t.length; s++)
						for (let r = 0; r < n.length; r++)
							n[r].textContent == t[s].textContent &&
								!n[r].classList.contains('w-condition-invisible') &&
								t[s].classList.remove('disabled-link');
				}
				i(),
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
function d(o) {
	console.log(o);
	let l = document.createElement('div');
	l.classList.add('letter-tube-c');
	let e = document.createElement('h2');
	e.classList.add('glossary-letter'), (e.textContent = o);
	let t = document.createElement('img');
	(t.src =
		'https://assets-global.website-files.com/63e21dce115cee384ab9eeca/63e369b9575098fd89563f86_builtFor-pipe.svg'),
		(t.loading = 'lazy'),
		(t.alt = 'decorative-pipe'),
		t.classList.add('letter-pipe-img'),
		l.appendChild(t);
	let n = document.createElement('div');
	return (
		(n.id = o),
		n.classList.add('letter-anchor-embed'),
		e.appendChild(n),
		l.appendChild(e),
		l
	);
}
async function u(o) {
	o.forEach((l) => {
		let e = l.getAttribute('title');
		if ((console.log(e), e && e.length > 0)) {
			let t = e[0].toUpperCase();
			if (!c.has(t)) {
				const n = d(t);
				l.prepend(n), c.add(t);
			}
		}
	});
}
