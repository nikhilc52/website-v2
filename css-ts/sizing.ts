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

// 
function reStyleIcon(id: string, pctTop: number, pctLeft: number) {
    const [width, height] = calculateDimensions()
    const elem = document.getElementById(id)!
    const circleElem = document.getElementById(id + '-circle')!
    const descElem = document.getElementById(id + '-desc')!;
    const mobileElem = document.getElementById(id + '-mobile')!;

    [elem, circleElem, descElem, mobileElem].forEach(x => {
        if (x.classList.contains('mobile-pointer')) {
            if (window.innerWidth <= 768) {
                x.style.visibility = 'visible'
            }
            else {
                x.style.visibility = 'hidden'
            }
        }
        if (x.classList.contains('pointer-desc')) {
            x.style.top = (0.02 + pctTop) * (height) + "px"
            x.style.left = pctLeft * (width) + "px"
            x.style.width = 0.115 * (width) + 'px'
            x.style.borderRadius = 0.026 * (height) + 'px'
            const h5s = x.getElementsByTagName('h5')
            for (const h5 of h5s) {
                h5.style.margin = 0.0130 * (height) + 'px'
                h5.style.fontSize = 0.0174 * (height) + 'px'
                h5.style.lineHeight = 0.0196 * (height) + 'px'
            }
            const imgs = x.getElementsByTagName('img')
            for (const img of imgs) {
                img.style.marginBottom = 0.0130 * (height) + 'px'
            }
        }
        else {
            x.style.top = pctTop * (height) + "px"
            x.style.left = pctLeft * (width) + "px"
            x.style.height = Math.max(2 * Math.round(.01 * (height) / 2), 2) + "px"
            x.style.width = Math.max(2 * Math.round(.01 * (height) / 2), 2) + "px"
        }
    });
}

// place icons at given %'s
function reStyleIcons() {
    reStyleIcon('basketball', .367, .447)
    reStyleIcon('win', .377, .502)
    reStyleIcon('crossword', .360, .556)
    reStyleIcon('building', .314, .588)
    reStyleIcon('resume', .617, .54)
    reStyleIcon('cdj', .675, .523)
    reStyleIcon('computer', .55, .60)
    reStyleIcon('book', .32, .605)
    reStyleIcon('calendar', .28, .465)
    reStyleIcon('logo', .7, .51)
    reStyleIcon('fortune', .315, .496)
    reStyleIcon('drawing', .243, .583)
    reStyleIcon('magazine', .42, .39)
    reStyleIcon('vinyl', .215, .48)
    reStyleIcon('canvas', .27, .499)
    reStyleIcon('gunner-book', .23, .629)
    reStyleIcon('coates-book', .82, .53)
}

// resize all the icons
function resizeEverything() {
    resizeImage()
    reStyleIcons()
    setTooltips()
}

// on both load and resize, resize all the icons/images
window.onresize = resizeEverything
window.onload = resizeEverything

// animate the icons and resize on startup
resizeEverything();