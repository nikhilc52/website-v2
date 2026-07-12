"use strict";
const classCurrentlyShowing = { v: 'projects' };
const imageBlurred = { v: false };
const image = document.getElementById('image');
const about = document.getElementById('about');
const aboutMenu = document.getElementById('about-menu');
about.addEventListener('click', e => { e.stopImmediatePropagation(); clickMenuElement('about'); });
const more = document.getElementById('more');
const moreMenu = document.getElementById('more-menu');
more.addEventListener('click', e => { e.stopImmediatePropagation(); clickMenuElement('more'); });
const moreElements = [];
const pointerCircleElements = [];
const classNames = ['projects', 'personal', 'everything-else'];
for (const name of classNames) {
    // for each class, get all the elements from it and all the pointers/circles from it
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
function moreElementSetup(elem, name) {
    elem.addEventListener('click', e => {
        e.stopImmediatePropagation();
        classCurrentlyShowing.v = name;
        toggleDots(true, name);
        clickMenuElement('more');
    });
    elem.addEventListener('mouseenter', _ => {
        for (const other of moreElements) {
            if (other.elemType === name) {
                other.elem.style.opacity = '1';
            }
            else {
                other.elem.style.opacity = '0.3';
            }
        }
    });
    elem.addEventListener('mouseleave', _ => {
        for (const other of moreElements) {
            if (other.elemType === classCurrentlyShowing.v) {
                other.elem.style.opacity = '1';
            }
            else {
                other.elem.style.opacity = '0.3';
            }
        }
    });
}
function toggleDots(turningOn, className) {
    for (const p of pointerCircleElements) {
        if (turningOn && p.elemType === className && !p.elem.classList.contains('circle')) {
            p.elem.style.pointerEvents = 'all';
            p.elem.style.opacity = '1';
        }
        else if (turningOn && p.elemType === className && p.elem.classList.contains('circle')) {
            p.elem.classList.add('explode-animation');
            p.elem.style.animationDelay = 1 * Math.random() + 's';
        }
        else if (p.elem.classList.contains('circle')) {
            p.elem.classList.remove('explode-animation');
        }
        else {
            p.elem.style.pointerEvents = 'none';
            p.elem.style.opacity = '0';
        }
    }
    classCurrentlyShowing.v = className;
}
function clickMenuElement(elem) {
    if (!imageBlurred.v) {
        image.style.filter = 'blur(10px)';
        if (elem === 'about') {
            aboutMenu.style.opacity = '1';
            more.style.opacity = '0.3';
            more.style.pointerEvents = 'none';
        }
        else if (elem === 'more') {
            moreMenu.style.opacity = '1';
            moreMenu.style.pointerEvents = 'all';
            for (const innerMenuElem of moreElements.filter(x => x.elemType === classCurrentlyShowing.v)) {
                innerMenuElem.elem.style.opacity = '1';
            }
            about.style.opacity = '0.3';
            about.style.pointerEvents = 'none';
        }
        imageBlurred.v = true;
        toggleDots(false, classCurrentlyShowing.v);
        window.addEventListener('click', removeMenuElements);
    }
    else {
        removeMenuElements();
        // add touchend to this?
        window.removeEventListener('click', removeMenuElements);
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
}
toggleDots(true, classCurrentlyShowing.v); //initialize with projects
