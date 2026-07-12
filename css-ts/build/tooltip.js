"use strict";
var ZIndex;
(function (ZIndex) {
    ZIndex["PointerDescVisible"] = "5";
    ZIndex["PointerDescHidden"] = "1";
})(ZIndex || (ZIndex = {}));
// list of tool tip points, pointers have the ID information
const tooltips = pointerCircleElements.filter(x => x.elem.classList.contains('pointer'));
// for each of the tooltips, add the reveal function on mouseover and hide on mouse out
for (const e of tooltips) {
    const descElem = document.getElementById(e.elemID + "-desc");
    e.elem.addEventListener('mouseenter', _ => reveal(descElem));
    e.elem.addEventListener('mouseleave', _ => hide(descElem));
}
function reveal(element) {
    // set a high z-index to go over pointers
    element.style.zIndex = ZIndex.PointerDescVisible;
    element.style.opacity = '1';
}
function hide(element) {
    element.style.zIndex = ZIndex.PointerDescHidden;
    element.style.opacity = '0';
}
