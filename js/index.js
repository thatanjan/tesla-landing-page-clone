const menuBtn = document.querySelector('.menu__btn')
const blurOverlay = document.querySelector('.blur__overlay')
const fullpageElm = document.querySelector('#fullpage')

const navigation = document.querySelector('.navigation')

const navigationCloseBtn = document.querySelector('.navigation__close__button')

const IS__ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS__ACTIVE)
	blurOverlay.classList.toggle(IS__ACTIVE)
	fullpageElm.classList.toggle('no-scroll')
}

menuBtn.addEventListener('click', toggleNavigation)
navigationCloseBtn.addEventListener('click', toggleNavigation)
blurOverlay.addEventListener('click', toggleNavigation)

new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	scrollBar: true,
})

var rellax = new Rellax('.rellax', {
	// Activate horizantal scrolling
	// Turned off by default
	// horizontal: true,
	//Deactivate vertical scrolling
	vertical: true,
})
