// list of tool tip points, pointers have the ID information
const tooltips = pointerCircleElements.filter(e => e.elemClass.contains('pointer'))

// for each of the tooltips, add the reveal function on mouseover and hide on mouse out
for (const e of tooltips) {
    const descElem = document.getElementById(e.elemID + "-desc")!;
    e.elem.addEventListener('mouseover', function () { reveal(descElem) });
    // initially fade out
    descElem.classList.toggle('fade-opacity');
    e.elem.addEventListener('mouseout', function () { hide(descElem) });
}

function reveal(element: HTMLElement) {
    element.style.visibility = 'visible'
    // set a high z-index to go over pointers
    element.style.zIndex = ZIndex.PointerDescVisible
    element.classList.toggle('fade-opacity');
}

function hide(element: HTMLElement) {
    element.style.zIndex = ZIndex.PointerDescHidden
    element.classList.toggle('fade-opacity');
}
