// add svg circle between images
let imageLists = document.querySelectorAll(
	'.career-images-collection > .employee-pictures-w'
);
let newListItem = document.createElement('div');
newListItem.setAttribute('role', 'listitem');
newListItem.classList.add('w-dyn-item');
newListItem.classList.add('carousel-circle-w');

let circleDefault = document.createElement('div');
circleDefault.classList.add('carousel-circle');
newListItem.appendChild(circleDefault);

let imagesWrapper = document.querySelectorAll(
	'.career-images-collection > .employee-pictures-w > .w-dyn-item'
);

function randomlyAddDashClassToCircle(circle) {
	let random = Math.floor(Math.random() * 5);
	if (random === 1) {
		circle.classList.add('dashed-circle');
	}
}

function addCircleBetweenEveryOtherImage() {
	let colors = ['red', 'black', 'yellow', 'purple'];
	imagesWrapper.forEach((image, index) => {
		let circle = newListItem.cloneNode(true);
		randomlyAddDashClassToCircle(circle.children[0]);
		let circleColor = colors[index % colors.length];
		circle.children[0].classList.add(circleColor);
		for (let i = 0; i < imageLists.length; i++) {
			if (imageLists[i].contains(image)) {
				imageLists[i].insertBefore(circle, image);
			}
		}
	});
}

let employeeDetails = document.querySelectorAll('.employee-details');
function addRandomColorToEmployeeDetails() {
	let colors = ['#feb236', '#f88286', '#b9abff'];
	employeeDetails.forEach((detail, index) => {
		let color = colors[index % colors.length];
		detail.style.backgroundColor = color;
	});
}
addRandomColorToEmployeeDetails();
addCircleBetweenEveryOtherImage();

let employeeImages = document.querySelectorAll('.employee-picture-c');
for (let i = 0; i < employeeImages.length; i++) {
	employeeImages[i].addEventListener('mouseenter', (e) => {
		employeeImages[i].children[0].classList.toggle('flipped');
		employeeImages[i].children[1].classList.toggle('flipped');
	});
	employeeImages[i].addEventListener('mouseleave', (e) => {
		employeeImages[i].children[0].classList.toggle('flipped');
		employeeImages[i].children[1].classList.toggle('flipped');
	});
}

function randomlyFlipEmployeeImages() {
	employeeImages.forEach((image) => {
		let random = Math.floor(Math.random() * 8);
		if (random === 1) {
			image.children[0].classList.toggle('flipped');
			image.children[1].classList.toggle('flipped');
		}
	});
}
randomlyFlipEmployeeImages();
