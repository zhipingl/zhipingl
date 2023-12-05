// JavaScript Document

// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');

// Below code for preventing nav from animating on 
// browser re-size modified from code found at
// this stackoverflow question and answer:
//
// https://goo.gl/6s3pAZ


btnMenu.addEventListener('click', openMenu);
// Prevents the focus state from activating
btnMenu.addEventListener('mousedown', function (e) {
	e.preventDefault();
});

function openMenu() {
	body.classList.toggle('show');
	nav.classList.add('activated');
}

// Media Query Event Listener
// - This is used to remove the "activated"
// class from the navigation when the user
// resizes the browser

// Create a media query list using
// matchMedia
const mql = window.matchMedia('(min-width: 560px)');

// Add a Media Query Listener to the 
// above media query list
mql.addListener(removeTransition);

// Function to remove the transition
// from the navigation when the user
// resizes the browser to desktop
// sizes. In this case when the
// screen width becomes wider then
// 560px
function removeTransition(e) {
	// e -> is the event object
	// e.matches -> stores a true false
	// value depending if the media query
	// list set above matches or not
	if (e.matches) {
		body.classList.remove('show');
		nav.classList.remove('activated');
	}
}

