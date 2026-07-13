enum ZIndex {
    PointerDescVisible = '5',
    PointerDescHidden = '1'
}

function setTooltips() {
    let tooltips: pointerCircleElement[];
    if (window.innerWidth <= 768) {
        tooltips = pointerCircleElements.filter(x => x.elem.classList.contains('mobile-pointer'))
    }
    else {
        tooltips = pointerCircleElements.filter(x => x.elem.classList.contains('pointer'))
    }

    // for each of the tooltips, add the reveal function on mouseover and hide on mouse out
    for (const e of tooltips) {
        const descElem = document.getElementById(e.elemID.replace('-mobile', '') + "-desc")!;
        e.elem.addEventListener('mouseenter', _ => reveal(descElem));
        e.elem.addEventListener('mouseleave', _ => hide(descElem));
    }
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
