"use strict";
// matches CSS
var ZIndex;
(function (ZIndex) {
    ZIndex["PointerDescVisible"] = "5";
    ZIndex["PointerDescHidden"] = "1";
})(ZIndex || (ZIndex = {}));
// set which elements are used to trigger tooltips
function setTooltips() {
    // if on mobile, then use mobile pointers (bigger circles), else use regular pointers
    let tooltips;
    if (window.innerWidth <= 768) {
        tooltips = pointerCircleElements.filter(x => x.elem.classList.contains('mobile-pointer'));
    }
    else {
        tooltips = pointerCircleElements.filter(x => x.elem.classList.contains('pointer'));
    }
    // for each of the tooltips, add the reveal function on mouseover and hide on mouse out
    for (const e of tooltips) {
        // replace does nothing if '-mobile' isn't in in the id (for desktop view)
        const descElem = document.getElementById(e.elemID.replace('-mobile', '') + '-desc');
        e.elem.addEventListener('mouseenter', _ => reveal(descElem));
        e.elem.addEventListener('mouseleave', _ => hide(descElem));
    }
}
function reveal(element) {
    // set a high z-index to go over pointers
    element.style.zIndex = ZIndex.PointerDescVisible;
    // fade in
    element.style.opacity = '1';
}
function hide(element) {
    // go back under pointers
    element.style.zIndex = ZIndex.PointerDescHidden;
    // fade out
    element.style.opacity = '0';
}
