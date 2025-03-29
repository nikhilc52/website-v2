const image = document.getElementById("image");
image.classList.toggle('blur');

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

const personal = document.getElementById("personal");
personal.classList.toggle('fade-opacity');

const everything = document.getElementById("everything");
everything.classList.toggle('fade-opacity');

function toggleBlurAbout() {
    image.classList.toggle('blur');
    aboutdesc.classList.toggle('fade-opacity');
    more.classList.toggle('half-fade');
}

function toggleBlurMore() {
    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    projects.classList.toggle('fade-opacity');
    personal.classList.toggle('fade-opacity');
    everything.classList.toggle('fade-opacity');
}

function resizeEverything() {
    resizeImage()
    resizeIcons()
}

function resizeImage() {
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
        top: (document.documentElement.scrollHeight - window.innerHeight) / 2,
        left: (document.documentElement.scrollWidth - window.innerWidth) / 2,
        behavior: "smooth"
    });
}

function resizeIcons() {
    dots = document.getElementsByClassName("pointer");
    magazine = dots[0];
    magazine.style.top = .45 * (document.documentElement.scrollHeight) + "px"
    magazine.style.left = .39 * (document.documentElement.scrollWidth) + "px"
}

window.onresize = resizeEverything

resizeEverything()
image.classList.toggle('blur');
