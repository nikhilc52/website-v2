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
    image.style.width = calculateDimensions()[0] + 'px';
    image.style.height = calculateDimensions()[1] + 'px';
    window.scrollTo({
        // scrollHeight is the total screen size including scrolling
        // innerHeight is the window size
        // goes halfway for centering
        top: (document.documentElement.scrollHeight - window.innerHeight) / 2,
        left: (document.documentElement.scrollWidth - window.innerWidth) / 2,
        behavior: 'smooth'
    });
}
// reStyles a given icon (and implied description, circle, and mobile pointer) 
// and places at given %s
function reStyleIcon(id, pctTop, pctLeft) {
    const [width, height] = calculateDimensions();
    // get elements corresponding to this id
    const elem = document.getElementById(id);
    const circleElem = document.getElementById(id + '-circle');
    const mobileElem = document.getElementById(id + '-mobile');
    // restyle description element (separate function)
    const descElem = document.getElementById(id + '-desc');
    reStyleDesc(descElem, pctTop, pctLeft);
    // style each of the corresponding elements
    [elem, circleElem, mobileElem].forEach(x => {
        // if the element is a mobile pointer, only show when it's a mobile screen
        if (x.classList.contains('mobile-pointer')) {
            x.style.visibility = window.innerWidth <= 768 ? 'visible' : 'hidden';
        }
        // regardless, style the elements as below
        x.style.top = pctTop * (height) + 'px';
        x.style.left = pctLeft * (width) + 'px';
        // round to nearest even pixel value (to ensure circle shape)
        // and ensure pixel rounding only goes as low as 2px
        x.style.height = Math.max(2 * Math.round(.01 * (height) / 2), 2) + 'px';
        x.style.width = Math.max(2 * Math.round(.01 * (height) / 2), 2) + 'px';
    });
}
// restyle description element, called by when restyling an icon
function reStyleDesc(x, pctTop, pctLeft) {
    const [width, height] = calculateDimensions();
    // note 0.02 is the % increase in height for the description
    x.style.top = (0.02 + pctTop) * (height) + 'px';
    x.style.left = pctLeft * (width) + 'px';
    x.style.width = 0.115 * (width) + 'px';
    x.style.borderRadius = 0.026 * (height) + 'px';
    // get text for the description element
    const h5s = x.getElementsByTagName('h5');
    for (const h5 of h5s) {
        h5.style.margin = 0.0130 * (height) + 'px';
        h5.style.fontSize = 0.0174 * (height) + 'px';
        h5.style.lineHeight = 0.0196 * (height) + 'px';
    }
    // get the image (if it exists) for the description element
    const imgs = x.getElementsByTagName('img');
    // adjust height by case
    for (const img of imgs) {
        switch (x.id.replace('-desc', '')) {
            case 'logo':
                img.width = 0.045 * (height);
                break;
            case 'fortune':
            case 'drawing':
            case 'calendar':
                img.width = 0.15 * (height);
                break;
        }
        img.style.marginBottom = 0.0130 * (height) + 'px';
    }
}
// style icons at given %'s
function reStyleIcons() {
    reStyleIcon('basketball', .151, .602);
    reStyleIcon('win', .377, .502);
    reStyleIcon('crossword', .360, .556);
    reStyleIcon('building', .314, .588);
    reStyleIcon('resume', .615, .538);
    reStyleIcon('cdj', .675, .523);
    reStyleIcon('computer', .55, .60);
    reStyleIcon('book', .32, .605);
    reStyleIcon('calendar', .28, .465);
    reStyleIcon('logo', .7, .51);
    reStyleIcon('fortune', .315, .496);
    reStyleIcon('drawing', .243, .583);
    reStyleIcon('magazine', .42, .39);
    reStyleIcon('vinyl', .215, .48);
    reStyleIcon('canvas', .27, .499);
    reStyleIcon('gunner-book', .23, .629);
    reStyleIcon('coates-book', .82, .53);
    reStyleIcon('lego', .404, .448);
}
// resize the image/icons/tooltips
function resizeEverything() {
    resizeImage();
    reStyleIcons();
    setTooltips();
}
// on both load and resize, resize all the icons/images/tooltips
window.onresize = resizeEverything;
window.onload = resizeEverything;
// resize on startup
resizeEverything();
