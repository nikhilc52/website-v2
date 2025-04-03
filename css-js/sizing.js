function resizeImage() {
    // width >> height : too wide, fit width
    if (1.777 <= window.innerWidth / window.innerHeight) {
        image.style.width = window.innerWidth + "px"
        image.style.height = window.innerWidth * (1080 / 1920) + "px"
    }
    // width << height : too tall, fit height
    else {
        image.style.height = window.innerHeight + "px"
        image.style.width = window.innerHeight * (1920 / 1080) + "px"
    }
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
    if (1.777 <= window.innerWidth / window.innerHeight) {
        width = window.innerWidth
        height = window.innerWidth * (1080 / 1920)
    }
    else {
        height = window.innerHeight
        width = window.innerHeight * (1920 / 1080)
    }

    elem.style.top = pctTop * (height) + "px"
    elem.style.left = pctLeft * (width) + "px"
    elem.style.height = .01 * (height) + "px"

    circleElem.style.top = pctTop * (height) + "px"
    circleElem.style.left = pctLeft * (width) + "px"
    circleElem.style.height = .01 * (height) + "px"
}

// replace singular text element (no resizing for accessibility)
function rePlaceText(elem, pctTop, pctLeft) {
    if (1.777 <= window.innerWidth / window.innerHeight) {
        width = window.innerWidth
        height = window.innerWidth * (1080 / 1920)
    }
    else {
        height = window.innerHeight
        width = window.innerHeight * (1920 / 1080)
    }

    elem.style.top = pctTop * (height) + "px"
    elem.style.left = pctLeft * (width) + "px"
}

// animate icon
function animateIcon(elem) {
    elem.classList.toggle('fade-opacity');
    elem.classList.toggle('scale');

    // if we are coming from being visible, then hide the way back down
    if (elem.style.visibility == "visible") {
        elem.style.visibility = "hidden";
    } else {
        elem.style.visibility = "visible";
    }
}

// place icons at given %'s
function rePlaceIcons() {

    rePlaceIcon(document.getElementById("globe"), document.getElementById("globe-circle"), .36, .445)
    rePlaceText(document.getElementById("globe-desc"), .38, .445)

    rePlaceIcon(document.getElementById("flag"), document.getElementById("flag-circle"), .35, .487)
    rePlaceText(document.getElementById("flag-desc"), .36, .487)

    rePlaceIcon(document.getElementById("puck"), document.getElementById("puck-circle"), .365, .51)
    rePlaceText(document.getElementById("puck-desc"), .385, .51)

    rePlaceIcon(document.getElementById("newspaper"), document.getElementById("newspaper-circle"), .363, .55)
    rePlaceText(document.getElementById("newspaper-desc"), .383, .55)

    rePlaceIcon(document.getElementById("building"), document.getElementById("building-circle"), .31, .587)
    rePlaceText(document.getElementById("building-desc"), .33, .587)

    rePlaceIcon(document.getElementById("resume"), document.getElementById("resume-circle"), .617, .54)
    rePlaceText(document.getElementById("resume-desc"), .637, .54)


    rePlaceIcon(document.getElementById("computer"), document.getElementById("computer-circle"), .55, .60)
    rePlaceText(document.getElementById("computer-desc"), .57, .6)

    rePlaceIcon(document.getElementById("calendar"), document.getElementById("calendar-circle"), .28, .465)
    rePlaceText(document.getElementById("calendar-desc"), .30, .465)

    rePlaceIcon(document.getElementById("logo"), document.getElementById("logo-circle"), .7, .51)
    rePlaceText(document.getElementById("logo-desc"), .72, .51)

    rePlaceIcon(document.getElementById("fortune"), document.getElementById("fortune-circle"), .315, .496)
    rePlaceText(document.getElementById("fortune-desc"), .325, .496)

    rePlaceIcon(document.getElementById("drawing"), document.getElementById("drawing-circle"), .243, .583)
    rePlaceText(document.getElementById("drawing-desc"), .273, .583)


    rePlaceIcon(document.getElementById("magazine"), document.getElementById("magazine-circle"), .42, .39)
    rePlaceText(document.getElementById("magazine-desc"), .44, .39)

    rePlaceIcon(document.getElementById("vinyl"), document.getElementById("vinyl-circle"), .215, .48)
    rePlaceText(document.getElementById("vinyl-desc"), .235, .48)

    rePlaceIcon(document.getElementById("canvas"), document.getElementById("canvas-circle"), .27, .499)
    rePlaceText(document.getElementById("canvas-desc"), .29, .499)

    rePlaceIcon(document.getElementById("gunner-book"), document.getElementById("gunner-book-circle"), .28, .622)
    rePlaceText(document.getElementById("gunner-book-desc"), .30, .622)

    rePlaceIcon(document.getElementById("coates-book"), document.getElementById("coates-book-circle"), .82, .53)
    rePlaceText(document.getElementById("coates-book-desc"), .84, .53)
}

// kickstart animation for all circles
function animateIcons() {
    animateIcon(document.getElementById("globe-circle"))
    animateIcon(document.getElementById("flag-circle"))
    animateIcon(document.getElementById("puck-circle"))
    animateIcon(document.getElementById("newspaper-circle"))
    animateIcon(document.getElementById("building-circle"))
    animateIcon(document.getElementById("resume-circle"))


    animateIcon(document.getElementById("computer-circle"))
    animateIcon(document.getElementById("calendar-circle"))
    animateIcon(document.getElementById("logo-circle"))
    animateIcon(document.getElementById("fortune-circle"))
    animateIcon(document.getElementById("drawing-circle"))


    animateIcon(document.getElementById("magazine-circle"))
    animateIcon(document.getElementById("vinyl-circle"))
    animateIcon(document.getElementById("canvas-circle"))
    animateIcon(document.getElementById("gunner-book-circle"))
    animateIcon(document.getElementById("coates-book-circle"))

    setTimeout(animateIcons, 3000);
}

// resize all the icons
function resizeEverything() {
    resizeImage()
    rePlaceIcons()
}

// on both load and resize, resize all the icons/images
window.onresize = resizeEverything
window.onload = resizeEverything
document.onvisibilitychange = resizeEverything

// animate the icons and resize on startup
animateIcons();
resizeEverything();