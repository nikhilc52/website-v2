"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ZIndex;
(function (ZIndex) {
    ZIndex["ImageHidden"] = "1";
    ZIndex["ImageVisible"] = "4";
    ZIndex["PointersHidden"] = "-1";
    ZIndex["PointersVisible"] = "3";
    ZIndex["CirclesHidden"] = "0";
    ZIndex["CirclesVisible"] = "2";
    ZIndex["Text"] = "5";
    ZIndex["PointerDescHidden"] = "2";
    ZIndex["PointerDescVisible"] = "5";
})(ZIndex || (ZIndex = {}));
const image = document.getElementById("image");
image.style.zIndex = ZIndex.ImageHidden; //hidden is just below the dots
const aboutDesc = document.getElementById("about-desc");
// initially fade to invert
aboutDesc.classList.toggle('fade-opacity');
const about = document.getElementById("about");
let aboutVisible = false;
about.addEventListener('click', clickAbout);
const more = document.getElementById("more");
more.addEventListener('click', clickMore);
const moreElements = [];
const pointerCircleElements = [];
const classNames = ["projects", "personal", "everything-else"];
for (const name of classNames) {
    // for each class, get all the elements from it and all the pointers/circles from it
    const textElement = document.getElementById(name);
    const elementPoints = document.getElementsByClassName(name);
    moreElements.push({
        elem: textElement,
        elemType: name
    });
    // sets up mouseover/out and clicking events for the more elements
    moreElementSetup(textElement, name);
    for (const p of elementPoints) {
        pointerCircleElements.push({
            elem: p,
            elemType: name,
            elemClass: p.classList,
            elemID: p.id
        });
    }
}
function moreElementSetup(elem, name) {
    // initially hide elements
    elem.style.visibility = 'hidden';
    elem.classList.toggle('fade-opacity');
    elem.classList.toggle('no-click');
    elem.addEventListener('click', function () {
        bringClassToFront(name);
        clickMore();
    });
    elem.addEventListener('mouseover', function () {
        for (const other of moreElements) {
            if (other.elemType != name) {
                other.elem.classList.add('half-fade');
            }
        }
    });
    elem.addEventListener('mouseout', function () {
        for (const other of moreElements) {
            if (other.elemType != name) {
                other.elem.classList.remove('half-fade');
            }
        }
    });
}
// brings one of the three classes in front, moves everything else behind
function bringClassToFront(className) {
    for (const e of pointerCircleElements) {
        // if its a circle, it should be just ahead, don't mess with visibility
        if (e.elemClass.contains("circle")) {
            e.elem.style.zIndex = e.elemType == className ? ZIndex.CirclesVisible : ZIndex.CirclesHidden;
        }
        else {
            e.elem.style.visibility = e.elemType == className ? 'visible' : 'hidden';
            e.elem.style.zIndex = e.elemType == className ? ZIndex.PointersVisible : ZIndex.PointersVisible;
        }
    }
}
function toggleClickingDots() {
    for (const p of pointerCircleElements) {
        p.elem.classList.toggle('no-click');
    }
}
function toggleImageZ() {
    image.style.zIndex = image.style.zIndex == ZIndex.ImageHidden ? ZIndex.ImageVisible : ZIndex.ImageHidden;
}
function clickMore() {
    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    about.classList.toggle('no-click');
    for (const e of moreElements) {
        e.elem.style.visibility = 'visible'; //just need to do this once, but include it here too
        e.elem.classList.toggle('fade-opacity');
        e.elem.classList.toggle('no-click');
    }
    toggleImageZ();
    toggleClickingDots();
}
function clickAbout() {
    aboutDesc.style.visibility = 'visible'; //just need to do this once, but include it here too
    aboutVisible = !aboutVisible;
    image.classList.toggle('blur');
    aboutDesc.classList.toggle('fade-opacity');
    more.classList.toggle('half-fade');
    more.classList.toggle('no-click');
    toggleImageZ();
    toggleClickingDots();
    hideMoreOrAbout(aboutVisible, clickAbout);
}
// function to make it such that if you click anywhere after about it toggles about, and removes that behavior if about isn't out
function hideMoreOrAbout(visible, toggleFunction) {
    return __awaiter(this, void 0, void 0, function* () {
        if (visible) {
            // wait a bit to isolate the event
            yield sleep(100);
            // touchend for mobile
            window.addEventListener('click', toggleFunction);
            window.addEventListener('touchend', toggleFunction);
        }
        else {
            window.removeEventListener('click', toggleFunction);
            window.removeEventListener('touchend', toggleFunction);
        }
    });
}
bringClassToFront("projects"); //initialize with projects
