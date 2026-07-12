function calculateDimensions() {
    // width >> height : too wide, fit width
    if (1.777 <= window.innerWidth / window.innerHeight) {
        const width = window.innerWidth
        const height = window.innerWidth * (2160 / 3840)
        return [width, height]
    }
    // width << height : too tall, fit height
    else {
        const height = window.innerHeight
        const width = window.innerHeight * (3840 / 2160)
        return [width, height]
    }
}

function resizeImage() {
    image.style.width = calculateDimensions()[0] + "px"
    image.style.height = calculateDimensions()[1] + "px"
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
function rePlaceIcon(elem: HTMLElement, circleElem: HTMLElement, pctTop: number, pctLeft: number) {
    const [width, height] = calculateDimensions()

    elem.style.top = pctTop * (height) + "px"
    elem.style.left = pctLeft * (width) + "px"
    elem.style.height = Math.max(2 * Math.round(.01 * (height) / 2), 2) + "px"
    elem.style.width = Math.max(2 * Math.round(.01 * (height) / 2), 2) + "px"

    circleElem.style.top = pctTop * (height) + "px"
    circleElem.style.left = pctLeft * (width) + "px"
    circleElem.style.height = Math.max(2 * Math.round(.01 * (height) / 2), 2) + "px"
    circleElem.style.width = Math.max(2 * Math.round(.01 * (height) / 2), 2) + "px"
}

// replace singular text element (no resizing for accessibility)
function rePlaceText(elem: HTMLElement, pctTop: number, pctLeft: number) {
    const [width, height] = calculateDimensions()

    elem.style.top = pctTop * (height) + "px"
    elem.style.left = pctLeft * (width) + "px"
    elem.style.width = 0.115 * (width) + 'px'
    elem.style.borderRadius = 0.026 * (height) + 'px'
    const h5s = elem.getElementsByTagName('h5')
    for (const h5 of h5s) {
        h5.style.margin = 0.0130 * (height) + 'px'
        h5.style.fontSize = 0.0174 * (height) + 'px'
        h5.style.lineHeight = 0.0196 * (height) + 'px'
    }
    const imgs = elem.getElementsByTagName('img')
    for (const img of imgs) {
        img.style.marginBottom = 0.0130 * (height) + 'px'
    }
}

// place icons at given %'s
function rePlaceIcons() {
    rePlaceIcon(document.getElementById("basketball")!, document.getElementById("basketball-circle")!, .367, .447)
    rePlaceText(document.getElementById("basketball-desc")!, .387, .447)

    rePlaceIcon(document.getElementById("win")!, document.getElementById("win-circle")!, .377, .502)
    rePlaceText(document.getElementById("win-desc")!, .397, .502)

    rePlaceIcon(document.getElementById("crossword")!, document.getElementById("crossword-circle")!, .360, .556)
    rePlaceText(document.getElementById("crossword-desc")!, .380, .556)

    rePlaceIcon(document.getElementById("building")!, document.getElementById("building-circle")!, .314, .588)
    rePlaceText(document.getElementById("building-desc")!, .334, .588)

    rePlaceIcon(document.getElementById("resume")!, document.getElementById("resume-circle")!, .617, .54)
    rePlaceText(document.getElementById("resume-desc")!, .637, .54)

    rePlaceIcon(document.getElementById("cdj")!, document.getElementById("cdj-circle")!, .675, .523)
    rePlaceText(document.getElementById("cdj-desc")!, .695, .523)

    rePlaceIcon(document.getElementById("computer")!, document.getElementById("computer-circle")!, .55, .60)
    rePlaceText(document.getElementById("computer-desc")!, .57, .6)


    rePlaceIcon(document.getElementById("book")!, document.getElementById("book-circle")!, .32, .605)
    rePlaceText(document.getElementById("book-desc")!, .34, .605)

    rePlaceIcon(document.getElementById("calendar")!, document.getElementById("calendar-circle")!, .28, .465)
    rePlaceText(document.getElementById("calendar-desc")!, .30, .465)

    rePlaceIcon(document.getElementById("logo")!, document.getElementById("logo-circle")!, .7, .51)
    rePlaceText(document.getElementById("logo-desc")!, .72, .51)

    rePlaceIcon(document.getElementById("fortune")!, document.getElementById("fortune-circle")!, .315, .496)
    rePlaceText(document.getElementById("fortune-desc")!, .335, .496)

    rePlaceIcon(document.getElementById("drawing")!, document.getElementById("drawing-circle")!, .243, .583)
    rePlaceText(document.getElementById("drawing-desc")!, .263, .583)


    rePlaceIcon(document.getElementById("magazine")!, document.getElementById("magazine-circle")!, .42, .39)
    rePlaceText(document.getElementById("magazine-desc")!, .44, .39)

    rePlaceIcon(document.getElementById("vinyl")!, document.getElementById("vinyl-circle")!, .215, .48)
    rePlaceText(document.getElementById("vinyl-desc")!, .235, .48)

    rePlaceIcon(document.getElementById("canvas")!, document.getElementById("canvas-circle")!, .27, .499)
    rePlaceText(document.getElementById("canvas-desc")!, .29, .499)

    rePlaceIcon(document.getElementById("gunner-book")!, document.getElementById("gunner-book-circle")!, .23, .629)
    rePlaceText(document.getElementById("gunner-book-desc")!, .25, .629)

    rePlaceIcon(document.getElementById("coates-book")!, document.getElementById("coates-book-circle")!, .82, .53)
    rePlaceText(document.getElementById("coates-book-desc")!, .84, .53)
}

// resize all the icons
function resizeEverything() {
    resizeImage()
    rePlaceIcons()
}

// on both load and resize, resize all the icons/images
window.onresize = resizeEverything
window.onload = resizeEverything

// animate the icons and resize on startup
// animateIcons();
resizeEverything();