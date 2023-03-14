// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	updateNavbar();
};

// Get the header
let header = document.getElementById('navBar');

// Get the offset position of the navbar
let sticky = header.offsetTop;
function traverseChildrenNoSticky(node) {
	node.classList.remove('silent-nav');
	for (let i = 0; i < node.children.length; i++) {
		traverseChildrenNoSticky(node.children[i]);
	}
}
function traverseChildrenToSticky(node) {
	node.classList.add('silent-nav');
	for (let i = 0; i < node.children.length; i++) {
		traverseChildrenToSticky(node.children[i]);
	}
}
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function updateNavbar() {
	if (window.pageYOffset > sticky) {
		header.classList.remove('silent-nav');
		traverseChildrenNoSticky(header);
	} else {
		header.classList.add('silent-nav');
		traverseChildrenToSticky(header);
	}
}

// resources tags text color
let tags = document.querySelectorAll('.resources-tag-w');
for (const tag of tags) {
	if (
		tag.style.backgroundColor == 'rgb(23, 184, 144)' ||
		tag.style.backgroundColor == 'rgb(65, 191, 232)' ||
		tag.style.backgroundColor == 'rgb(245, 233, 96)'
	) {
		tag.children[0].classList.remove('white-text');
	}
}

const player = Plyr.setup('.player', {
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
});

const url = window.location.href;
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let popupTrigger = document.querySelectorAll('[cd-popup=trigger]');

popupTrigger.forEach((i) => {
	i.addEventListener('click', () => {
		let currentPopup = i.querySelector(`.video-popup-c`);
		currentPopup.classList.add('active');
		document.body.appendChild(currentPopup);
		params.name = currentPopup.querySelector('.player').getAttribute('id');
		window.history.pushState({}, '', url + '?name=' + params.name);
		let closeBtn = currentPopup.querySelector('.video-popup-close-btn');
		closeBtn.addEventListener('click', () => {
			player.forEach((e) => {
				e.pause();
				currentPopup.classList.remove('active');
				i.appendChild(currentPopup);
				window.history.pushState({}, '', url.split('?')[0]);
			});
		});
	});
});

const modals = document.querySelectorAll('.video-popup-c');
modals.forEach((modal, idx) => {
	let video = modal.querySelector('.player');
	openModalOnLoad(modal, idx);
});

function openModalOnLoad(modal, idx) {
	const target = modal.querySelector('.player').getAttribute('id');

	if (params.name == target) {
		modal.classList.add('active');
		document.body.appendChild(modal);
		let closeBtn = modal.querySelector('.video-popup-close-btn');
		closeBtn.addEventListener('click', () => {
			player.forEach((e) => {
				e.pause();
				modal.classList.remove('active');
				modal.parentNode.appendChild(modal);
				window.history.pushState({}, '', url.split('?')[0]);
			});
		});
	} else {
		return;
	}
}
//add all filter to categories
// let categories = document.querySelector('.filters-categories');

// let allCategories = document.createElement('label');
// allCategories.classList.add('filter-button-w');
// allCategories.classList.add('reset-filter');
// allCategories.classList.add('w-radio');
// allCategories.setAttribute('fs-cmsfilter-active', 'active-filter');
// allCategories.setAttribute('fs-cmsfilter-element', 'reset');
// allCategories.innerHTML = `<input type="radio" id="radio" name="Radio" value="Radio" data-name="Radio" checked="" class="w-form-formradioinput filter-radio-buttons w-radio-input"><span class="filter-button-text w-form-label" for="radio">All</span>`;

// let newItem = document.createElement('div');
// newItem.setAttribute('role', 'listitem');
// newItem.classList.add('w-dyn-item');

// categories.prepend(newItem);
// newItem.appendChild(allCategories);
