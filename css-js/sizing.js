
// TODO:
// Fix aspect ratio in resizeImage() : should be 1.777, not lower

function resizeImage() {
    // decent aspect ratio
    if (1.333 <= (window.innerWidth / window.innerHeight) && (window.innerWidth / window.innerHeight) <= 1.777) {
        image.style.height = window.innerHeight + "px"
        image.style.width = window.innerHeight * (1920 / 1080) + "px"
    }
    // width >> height : too wide
    else if (1.777 <= window.innerWidth / window.innerHeight) {
        image.style.width = window.innerWidth + "px"
        image.style.height = window.innerWidth * (1080 / 1920) + "px"

    }
    // width << height : too tall
    else {
        image.style.height = window.innerHeight + "px"
        image.style.width = window.innerHeight * (1920 / 1080) + "px"
    }
    window.scrollTo({
        // scrollHeight is the total screen size including scrolling
        // innerHeight is the window size
        top: (document.documentElement.scrollHeight - window.innerHeight) / 2,
        left: (document.documentElement.scrollWidth - window.innerWidth) / 2,
        behavior: "smooth"
    });
}

// replace singular icon
function rePlaceIcon(elem, circleElem, pctTop, pctLeft) {
    elem.style.top = pctTop * (document.documentElement.scrollHeight) + "px"
    elem.style.left = pctLeft * (document.documentElement.scrollWidth) + "px"
    elem.style.height = .01 * (document.documentElement.scrollHeight) + "px"

    circleElem.style.top = pctTop * (document.documentElement.scrollHeight) + "px"
    circleElem.style.left = pctLeft * (document.documentElement.scrollWidth) + "px"
    circleElem.style.height = .01 * (document.documentElement.scrollHeight) + "px"
}

// replace singular icon
function rePlaceText(elem, pctTop, pctLeft) {
    elem.style.top = pctTop * (document.documentElement.scrollHeight) + "px"
    elem.style.left = pctLeft * (document.documentElement.scrollWidth) + "px"
}

// animate icon
function animateIcon(elem) {
    elem.classList.toggle('fade-opacity');
    elem.classList.toggle('scale');

    if (elem.style.visibility == "visible") {
        elem.style.visibility = "hidden";
    } else {
        elem.style.visibility = "visible";
    }
}

function rePlaceIcons() {

    rePlaceIcon(document.getElementById("globe"), document.getElementById("globe-circle"), .36, .445)
    rePlaceText(document.getElementById("globe-desc"), .38, .445)

    rePlaceIcon(document.getElementById("flag"), document.getElementById("flag-circle"), .35, .487)
    rePlaceText(document.getElementById("flag-desc"), .38, .487)

    rePlaceIcon(document.getElementById("puck"), document.getElementById("puck-circle"), .365, .51)
    rePlaceText(document.getElementById("puck-desc"), .39, .51)

    rePlaceIcon(document.getElementById("newspaper"), document.getElementById("newspaper-circle"), .363, .55)
    rePlaceText(document.getElementById("newspaper-desc"), .385, .55)

    rePlaceIcon(document.getElementById("building"), document.getElementById("building-circle"), .31, .587)
    rePlaceText(document.getElementById("building-desc"), .33, .587)

    rePlaceIcon(document.getElementById("resume"), document.getElementById("resume-circle"), .617, .54)
    rePlaceText(document.getElementById("resume-desc"), .637, .54)


    rePlaceIcon(document.getElementById("computer"), document.getElementById("computer-circle"), .55, .60)
    rePlaceText(document.getElementById("computer-desc"), .57, .6)

    rePlaceIcon(document.getElementById("calendar"), document.getElementById("calendar-circle"), .28, .465)
    rePlaceText(document.getElementById("calendar-desc"), .31, .465)

    rePlaceIcon(document.getElementById("logo"), document.getElementById("logo-circle"), .7, .51)
    rePlaceText(document.getElementById("logo-desc"), .73, .51)

    rePlaceIcon(document.getElementById("fortune"), document.getElementById("fortune-circle"), .315, .496)
    rePlaceText(document.getElementById("fortune-desc"), .335, .496)

    rePlaceIcon(document.getElementById("drawing"), document.getElementById("drawing-circle"), .243, .583)
    rePlaceText(document.getElementById("drawing-desc"), .273, .583)


    rePlaceIcon(document.getElementById("magazine"), document.getElementById("magazine-circle"), .42, .39)
    rePlaceText(document.getElementById("magazine-desc"), .45, .39)
}


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


    setTimeout(animateIcons, 3000);
}

function resizeEverything() {
    resizeImage()
    rePlaceIcons()
}

window.onresize = resizeEverything
window.onload = resizeEverything

animateIcons();
resizeEverything();