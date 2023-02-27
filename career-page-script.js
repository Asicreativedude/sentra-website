// add svg circle between images
let imageList = document.getElementById('imageListTop1');
let imageList2 = document.getElementById('imageListTop2');
let newListItem = document.createElement('div');
newListItem.setAttribute('role', 'listitem');
newListItem.classList.add('w-dyn-item');
newListItem.classList.add('carousel-circle-w');

let circleDefault = document.createElement('div');
circleDefault.classList.add('carousel-circle');
newListItem.appendChild(circleDefault);

let imagesWrapper = document.querySelectorAll('#imageListTop1 > .w-dyn-item');
let imagesWrapper2 = document.querySelectorAll('#imageListTop2 > .w-dyn-item');
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
		}

		imageList.insertBefore(circle, image);
	});
	imagesWrapper2.forEach((image, index) => {
		let circle2 = newListItem.cloneNode(true);
		switch (index) {
			case 0:
				circle2.children[0].classList.add('purple');
				break;
			case 1:
				circle2.children[0].classList.add('black');
				break;
			case 2:
				circle2.children[0].classList.add('yellow');
				break;
			case 3:
				circle2.children[0].classList.add('red');
				break;
			case 4:
				circle2.children[0].classList.add('purple');
				break;
			case 5:
				circle2.children[0].classList.add('black');
				break;
		}
		imageList2.insertBefore(circle2, image);
	});
}

addCircleBetweenEveryOtherImage();
