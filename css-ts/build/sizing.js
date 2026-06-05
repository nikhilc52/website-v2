"use strict";
function calculateDimensions() {
    // width >> height : too wide, fit width
    if (1.777 <= window.innerWidth / window.innerHeight) {
        const width = window.innerWidth;
        const height = window.innerWidth * (2160 / 3840);
        return [width, height];
    }
    // width << height : too tall, fit height
    else {
        const height = window.innerHeight;
        const width = window.innerHeight * (3840 / 2160);
        return [width, height];
    }
}
function resizeImage() {
    image.style.width = calculateDimensions()[0] + "px";
    image.style.height = calculateDimensions()[1] + "px";
    window.scrollTo({
        // scrollHeight is the total screen size including scrolling
        // innerHeight is the window size
        // goes halfway for centering
        top: (document.documentElement.scrollHeight - window.innerHeight) / 2,
        left: (document.documentElement.scrollWidth - window.innerWidth) / 2,
        behavior: "smooth"
    });
}
// replace singular icon (and circle) at given %'s
function rePlaceIcon(elem, circleElem, pctTop, pctLeft) {
    const [width, height] = calculateDimensions();
    elem.style.top = pctTop * (height) + "px";
    elem.style.left = pctLeft * (width) + "px";
    elem.style.height = .01 * (height) + "px";
    circleElem.style.top = pctTop * (height) + "px";
    circleElem.style.left = pctLeft * (width) + "px";
    circleElem.style.height = .01 * (height) + "px";
}
// replace singular text element (no resizing for accessibility)
function rePlaceText(elem, pctTop, pctLeft) {
    const [width, height] = calculateDimensions();
    elem.style.top = pctTop * (height) + "px";
    elem.style.left = pctLeft * (width) + "px";
}
// animate icon
function animateIcon(elem) {
    elem.classList.toggle('fade-opacity');
    elem.classList.toggle('scale');
    // if we are coming from being visible, then hide the way back down
    elem.style.visibility = elem.style.visibility == 'visible' ? 'hidden' : 'visible';
}
// place icons at given %'s
function rePlaceIcons() {
    rePlaceIcon(document.getElementById("basketball"), document.getElementById("basketball-circle"), .374, .449);
    rePlaceText(document.getElementById("basketball-desc"), .394, .445);
    rePlaceIcon(document.getElementById("flag"), document.getElementById("flag-circle"), .35, .487);
    rePlaceText(document.getElementById("flag-desc"), .37, .487);
    rePlaceIcon(document.getElementById("crossword"), document.getElementById("crossword-circle"), .363, .545);
    rePlaceText(document.getElementById("crossword-desc"), .383, .51);
    rePlaceIcon(document.getElementById("building"), document.getElementById("building-circle"), .31, .587);
    rePlaceText(document.getElementById("building-desc"), .33, .587);
    rePlaceIcon(document.getElementById("resume"), document.getElementById("resume-circle"), .617, .54);
    rePlaceText(document.getElementById("resume-desc"), .637, .54);
    rePlaceIcon(document.getElementById("computer"), document.getElementById("computer-circle"), .55, .60);
    rePlaceText(document.getElementById("computer-desc"), .57, .6);
    rePlaceIcon(document.getElementById("calendar"), document.getElementById("calendar-circle"), .28, .465);
    rePlaceText(document.getElementById("calendar-desc"), .30, .465);
    rePlaceIcon(document.getElementById("logo"), document.getElementById("logo-circle"), .7, .51);
    rePlaceText(document.getElementById("logo-desc"), .72, .51);
    rePlaceIcon(document.getElementById("fortune"), document.getElementById("fortune-circle"), .315, .496);
    rePlaceText(document.getElementById("fortune-desc"), .325, .496);
    rePlaceIcon(document.getElementById("drawing"), document.getElementById("drawing-circle"), .243, .583);
    rePlaceText(document.getElementById("drawing-desc"), .273, .583);
    rePlaceIcon(document.getElementById("magazine"), document.getElementById("magazine-circle"), .42, .39);
    rePlaceText(document.getElementById("magazine-desc"), .44, .39);
    rePlaceIcon(document.getElementById("vinyl"), document.getElementById("vinyl-circle"), .215, .48);
    rePlaceText(document.getElementById("vinyl-desc"), .235, .48);
    rePlaceIcon(document.getElementById("canvas"), document.getElementById("canvas-circle"), .27, .499);
    rePlaceText(document.getElementById("canvas-desc"), .29, .499);
    rePlaceIcon(document.getElementById("gunner-book"), document.getElementById("gunner-book-circle"), .28, .622);
    rePlaceText(document.getElementById("gunner-book-desc"), .30, .622);
    rePlaceIcon(document.getElementById("coates-book"), document.getElementById("coates-book-circle"), .82, .53);
    rePlaceText(document.getElementById("coates-book-desc"), .84, .53);
}
// kickstart animation for all circles
function animateIcons() {
    for (const icon of pointerCircleElements) {
        if (icon.elemClass.contains('circle')) {
            animateIcon(icon.elem); // can also call animateIcon(document.getElementById("resume-circle"))
        }
    }
    setTimeout(animateIcons, 3000);
}
// resize all the icons
function resizeEverything() {
    resizeImage();
    rePlaceIcons();
}
// on both load and resize, resize all the icons/images
window.onresize = resizeEverything;
window.onload = resizeEverything;
// animate the icons and resize on startup
animateIcons();
resizeEverything();
