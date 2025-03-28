const image = document.getElementById("image");
const aboutdesc = document.getElementById("about-desc");
aboutdesc.classList.toggle('fade-opacity');

const about = document.getElementById("about");
about.addEventListener('click', toggleBlurAbout);

const more = document.getElementById("more");
more.addEventListener('click', toggleBlurMore);

const projects = document.getElementById("projects");
projects.classList.toggle('fade-opacity');

const personal = document.getElementById("personal");
personal.classList.toggle('fade-opacity');

const everything = document.getElementById("everything");
everything.classList.toggle('fade-opacity');

function toggleBlurAbout() {
    image.classList.toggle('blur');
    aboutdesc.classList.toggle('fade-opacity');
    more.classList.toggle('half-fade');
    console.log(image.offsetWidth / 2)
}

function toggleBlurMore() {
    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    projects.classList.toggle('fade-opacity');
    personal.classList.toggle('fade-opacity');
    everything.classList.toggle('fade-opacity'); const magazine = document.getElementById("magazine");
    magazine.style.left = (image.offsetWidth / 2) + "px"
}


