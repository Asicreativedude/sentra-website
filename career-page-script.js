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
function addCircleBetweenEveryOtherImage() {
	imagesWrapper.forEach((image, index) => {
		let circle = newListItem.cloneNode(true);
		switch (index) {
			case 0:
				circle.children[0].classList.add('purple');
				break;
			case 1:
				circle.children[0].classList.add('black');
				break;
			case 2:
				circle.children[0].classList.add('yellow');
				break;
			case 3:
				circle.children[0].classList.add('red');
				break;
			case 4:
				circle.children[0].classList.add('purple');
				break;
			case 5:
				circle.children[0].classList.add('black');
				break;
			case 6:
				circle.children[0].classList.add('yellow');
				break;
			case 7:
				circle.children[0].classList.add('red');
				break;
			case 8:
				circle.children[0].classList.add('purple');
				break;
			case 9:
				circle.children[0].classList.add('black');
				break;
			case 10:
				circle.children[0].classList.add('yellow');
				break;
			case 11:
				circle.children[0].classList.add('red');
				break;
			case 12:
				circle.children[0].classList.add('purple');
				break;
			case 13:
				circle.children[0].classList.add('black');
				break;
			case 14:
				circle.children[0].classList.add('yellow');
				break;
			case 15:
				circle.children[0].classList.add('red');
				break;
		}
		for (let i = 0; i < imageLists.length; i++) {
			if (imageLists[i].contains(image)) {
				imageLists[i].insertBefore(circle, image);
			}
		}
	});
}

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
