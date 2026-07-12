enum ZIndex {
    PointerDescVisible = '4',
    PointerDescHidden = '2'
}

// list of tool tip points, pointers have the ID information
const tooltips = pointerCircleElements.filter(x => x.elem.classList.contains('pointer'))

// for each of the tooltips, add the reveal function on mouseover and hide on mouse out
for (const e of tooltips) {
    const descElem = document.getElementById(e.elemID + "-desc")!;
    e.elem.addEventListener('mouseenter', _ => reveal(descElem));
    e.elem.addEventListener('mouseleave', _ => hide(descElem));
}

function reveal(element: HTMLElement) {
    // set a high z-index to go over pointers
    element.style.zIndex = ZIndex.PointerDescVisible
    element.style.opacity = '1'
}

function hide(element: HTMLElement) {
    element.style.zIndex = ZIndex.PointerDescHidden
    element.style.opacity = '0'
}
