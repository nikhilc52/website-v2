/* Z-Indexes:

image: 1 | 4

pointers: -1 | 3
circles : -1 | 2

text: 5
pointer-desc: 3 */

// TODO:
// Blurring of dots on selection
// Fixing z-indexing returning null initially

const image = document.getElementById("image");
image.style.zIndex = 1;

const aboutdesc = document.getElementById("about-desc");
// initially fade to invert
aboutdesc.classList.toggle('fade-opacity');

const about = document.getElementById("about");
about.addEventListener('click', toggleBlurAbout);

const more = document.getElementById("more");
more.addEventListener('click', toggleBlurMore);

const projects = document.getElementById("projects");
// initially fade(s) to invert(s)
projects.classList.toggle('fade-opacity');
projects.addEventListener('click', function () {
    bringClassToFront("projects"); toggleDots(1);
    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    about.classList.toggle('no-click');
    projects.classList.toggle('fade-opacity');
    personal.classList.toggle('fade-opacity');
    everything.classList.toggle('fade-opacity');
    resizeEverything();
});

const personal = document.getElementById("personal");
personal.classList.toggle('fade-opacity');
personal.addEventListener('click', function () {
    bringClassToFront("personal"); toggleDots(1);
    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    about.classList.toggle('no-click');
    projects.classList.toggle('fade-opacity');
    personal.classList.toggle('fade-opacity');
    everything.classList.toggle('fade-opacity');
    resizeEverything();
});

const everything = document.getElementById("everything");
everything.classList.toggle('fade-opacity');
everything.addEventListener('click', function () {
    bringClassToFront("everything-else"); toggleDots(1);
    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    about.classList.toggle('no-click');
    projects.classList.toggle('fade-opacity');
    personal.classList.toggle('fade-opacity');
    everything.classList.toggle('fade-opacity');
    resizeEverything();
});

function toggleDots(imageZ) {
    console.log(image.style.zIndex)
    if (image.style.zIndex == 1) {
        console.log('visible to hidden')
        image.style.zIndex = imageZ;
    }
    else {
        console.log('hidden to visible')
        image.style.zIndex = 1;
    }
}

function bringClassToFront(className) {
    classNameList = ["personal", "projects", "everything-else"];
    elements = document.getElementsByClassName(className)
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].className.includes("circle")) {
            elements[i].style.zIndex = 2;
        }
        else {
            elements[i].style.zIndex = 3;
        }
    }
    classNameList.splice(classNameList.indexOf(className), 1)
    for (let i = 0; i < classNameList.length; i++) {
        elements = document.getElementsByClassName(classNameList[i])
        for (let j = 0; j < elements.length; j++) {
            elements[j].style.zIndex = -1;
        }
    }
}

function toggleBlurAbout() {
    aboutdesc.style.visibility = 'visible'
    image.classList.toggle('blur');
    aboutdesc.classList.toggle('fade-opacity');
    more.classList.toggle('half-fade');
    more.classList.toggle('no-click');
    toggleDots(4)
}

function toggleBlurMore() {
    personal.style.visibility = 'visible'
    everything.style.visibility = 'visible'
    projects.style.visibility = 'visible'

    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    about.classList.toggle('no-click');
    projects.classList.toggle('fade-opacity');
    personal.classList.toggle('fade-opacity');
    everything.classList.toggle('fade-opacity');
    toggleDots(4)
}

function resizeImage() {
    // FIXME: good aspect ratio should be 1.777, not lower
    // decent aspect ratio
    if (1.333 <= (window.innerWidth / window.innerHeight) && (window.innerWidth / window.innerHeight) <= 1.777) {
        image.style.height = window.innerHeight + "px"
        image.style.width = window.innerHeight * (1920 / 1080) + "px"
        console.log('good')
    }
    // width >> height : too wide
    else if (1.777 <= window.innerWidth / window.innerHeight) {
        image.style.width = window.innerWidth + "px"
        image.style.height = window.innerWidth * (1080 / 1920) + "px"
        console.log('too wide')

    }
    // width << height : too tall
    else {
        image.style.height = window.innerHeight + "px"
        image.style.width = window.innerHeight * (1920 / 1080) + "px"
        console.log('too tall')
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
function rePlaceIcon(elem, pctTop, pctLeft) {
    elem.style.top = pctTop * (document.documentElement.scrollHeight) + "px"
    elem.style.left = pctLeft * (document.documentElement.scrollWidth) + "px"
    elem.style.height = .01 * (document.documentElement.scrollHeight) + "px"
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
    if (!image.classList.contains('blur')) {
        elem.style.filter = 'blur(0px)';
    }

    if (elem.style.visibility == "visible") {
        elem.style.visibility = "hidden";
    } else {
        elem.style.visibility = "visible";
    }
}

function rePlaceIcons() {
    rePlaceIcon(document.getElementById("magazine"), .42, .39)
    rePlaceIcon(document.getElementById("magazine-circle"), .42, .39)
    rePlaceText(document.getElementById("magazine-desc"), .45, .355)
    rePlaceIcon(document.getElementById("computer"), .55, .60)
    rePlaceIcon(document.getElementById("computer-circle"), .55, .60)
}


function animateIcons() {
    animateIcon(document.getElementById("magazine-circle"))
    animateIcon(document.getElementById("computer-circle"))
    setTimeout(animateIcons, 3000);
}

function resizeEverything() {
    resizeImage()
    rePlaceIcons()
}

window.onresize = resizeEverything
window.onload = resizeEverything

bringClassToFront("projects");
animateIcons();
resizeEverything();