"use strict";
// global flag to get class of currently showing pointers
const classCurrentlyShowing = { v: 'projects' };
// global flag if image is blurred
const imageBlurred = { v: false };
const image = document.getElementById('image');
const about = document.getElementById('about');
const aboutMenu = document.getElementById('about-menu');
// use stopImmediatePropagation() to prevent a window listener from using the same event
about.addEventListener('click', e => { e.stopImmediatePropagation(); clickMenuElement('about'); console.log('about'); });
const more = document.getElementById('more');
const moreMenu = document.getElementById('more-menu');
// use stopImmediatePropagation() to prevent a window listener from using the same event
more.addEventListener('click', e => { e.stopImmediatePropagation(); clickMenuElement('more'); });
// lists of more menu elements (projects, personal, miscellaneous)
const moreElements = [];
// list of pointers (including mobile) and circles
const pointerCircleElements = [];
const classNames = ['projects', 'personal', 'miscellaneous'];
for (const name of classNames) {
    // for each class, get all the elements from it and all the pointers/circles from it (and the menu item)
    const textElement = document.getElementById(name);
    const elementPoints = document.getElementsByClassName(name);
    moreElements.push({
        elem: textElement,
        elemType: name
    });
    moreElementSetup(textElement, name);
    for (const p of elementPoints) {
        pointerCircleElements.push({
            elem: p,
            elemType: name,
            elemID: p.id
        });
    }
}
// set up a more inner menu element
function moreElementSetup(elem, name) {
    // when clicked, isolate the event so that window doesn't use it too
    elem.addEventListener('click', e => {
        e.stopImmediatePropagation();
        // toggle dots on (true), for this class
        toggleDots(true, name);
        clickMenuElement('more');
    });
    // when a mouse goes over it, make this element highlighted
    elem.addEventListener('mouseenter', _ => {
        for (const e of moreElements) {
            if (e.elemType === name) {
                e.elem.style.opacity = '1';
            }
            else {
                e.elem.style.opacity = '0.3';
            }
        }
    });
    // when a mouse leaves, make the the element that is currently showing highlighted again
    elem.addEventListener('mouseleave', _ => {
        for (const e of moreElements) {
            if (e.elemType === classCurrentlyShowing.v) {
                e.elem.style.opacity = '1';
            }
            else {
                e.elem.style.opacity = '0.3';
            }
        }
    });
}
// toggle dots on or off, for a given a class
function toggleDots(turningOn, className) {
    for (const p of pointerCircleElements) {
        if (p.elem.classList.contains('circle')) {
            // if this is a circle that is supposed to be turning on and of the right class, animate it w/ a delay
            if (turningOn && p.elemType === className) {
                p.elem.classList.add('explode-animation');
                p.elem.style.animationDelay = Math.random() + 's';
            }
            // otherwise this is a circle that should be 'turning off', so remove the animation 
            else {
                p.elem.classList.remove('explode-animation');
            }
        }
        // if this is not a circle (is a mobile pointer or regular pointer)
        else {
            // if this is a pointer that is supposed to be turning on and of the right class, make it clickable and visible
            if (turningOn && p.elemType === className) {
                p.elem.style.pointerEvents = 'all';
                p.elem.style.opacity = '1';
            }
            // otherwise this is a pointer that should be 'turning off', so remove the make it invisible and unclickable 
            else {
                p.elem.style.pointerEvents = 'none';
                p.elem.style.opacity = '0';
            }
        }
    }
    // update the class that's currently showing (this is the only function that can change this value)
    classCurrentlyShowing.v = className;
}
// click a 'main' menu element ('elem' is about or more)
function clickMenuElement(elem) {
    // if the image is not blurred, show the menus
    if (!imageBlurred.v) {
        image.style.filter = 'blur(10px)';
        imageBlurred.v = true;
        // if the clicked element was 'about', make 'about' visible and 'more' not
        if (elem === 'about') {
            aboutMenu.style.opacity = '1';
            more.style.opacity = '0.3';
            more.style.pointerEvents = 'none';
        }
        // otherwise if the clicked element was 'more', make 'more' visible and 'about' not
        else if (elem === 'more') {
            moreMenu.style.opacity = '1';
            moreMenu.style.pointerEvents = 'all';
            // make the currently shown class highlighted in the inner menu (defaults to 0.3 otherwise)
            for (const innerMenuElem of moreElements.filter(x => x.elemType === classCurrentlyShowing.v)) {
                innerMenuElem.elem.style.opacity = '1';
            }
            about.style.opacity = '0.3';
            about.style.pointerEvents = 'none';
        }
        // turn off dots (second parameter does nothing here)
        toggleDots(false, classCurrentlyShowing.v);
        // makes it such that a window click event removes the menu items too
        window.addEventListener('click', removeMenuElements);
    }
    // if the menu is blurred already (inner menus out), remove the inner menu elements
    else {
        removeMenuElements();
    }
}
function removeMenuElements() {
    image.style.filter = 'blur(0px)';
    aboutMenu.style.opacity = '0';
    moreMenu.style.opacity = '0';
    moreMenu.style.pointerEvents = 'none';
    about.style.opacity = '1';
    more.style.opacity = '1';
    about.style.pointerEvents = 'all';
    more.style.pointerEvents = 'all';
    toggleDots(true, classCurrentlyShowing.v);
    imageBlurred.v = false;
    // add touchend to this?
    // remove the listener on window, since more is now hidden (no longer needed)
    window.removeEventListener('click', removeMenuElements);
}
toggleDots(true, classCurrentlyShowing.v); //initialize with projects
