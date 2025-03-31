/* Z-Indexes:

image: 1 | 4

pointers: -1 | 3
circles : -1 | 2

text: 5
pointer-desc: 2 | 4 */

// TODO:
// Blurring of dots on selection
// Fixing z-indexing returning null initially
// Fix hiding when more element clicked

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
    bringClassToFront("projects"); moreElementClicked();
});
// add listeners for mouse over
projects.addEventListener('mouseover', function () {
    personal.classList.add('half-fade');
    everything.classList.add('half-fade');
})
projects.addEventListener('mouseout', function () {
    personal.classList.remove('half-fade');
    everything.classList.remove('half-fade');
})

const personal = document.getElementById("personal");
personal.classList.toggle('fade-opacity');
personal.addEventListener('click', function () {
    bringClassToFront("personal"); moreElementClicked();
});
personal.addEventListener('mouseover', function () {
    projects.classList.add('half-fade');
    everything.classList.add('half-fade');
})
personal.addEventListener('mouseout', function () {
    projects.classList.remove('half-fade');
    everything.classList.remove('half-fade');
})

const everything = document.getElementById("everything");
everything.classList.toggle('fade-opacity');
everything.addEventListener('click', function () {
    bringClassToFront("everything-else"); moreElementClicked();
});
everything.addEventListener('mouseover', function () {
    projects.classList.add('half-fade');
    personal.classList.add('half-fade');
})
everything.addEventListener('mouseout', function () {
    projects.classList.remove('half-fade');
    personal.classList.remove('half-fade');
})

function moreElementClicked() {
    toggleDots(1);
    image.classList.toggle('blur');
    about.classList.toggle('half-fade');
    about.classList.toggle('no-click');
    projects.classList.toggle('fade-opacity');
    personal.classList.toggle('fade-opacity');
    everything.classList.toggle('fade-opacity');
    personal.classList.toggle('no-click');
    everything.classList.toggle('no-click');
    projects.classList.toggle('no-click');
    resizeEverything();
}

// toggle dots just toggles the imageZ position
function toggleDots(imageZ) {
    if (image.style.zIndex == 1) {
        image.style.zIndex = imageZ;
    }
    else {
        image.style.zIndex = 1;
    }
}

// brings one of the three classes in front, moves everything else behind
function bringClassToFront(className) {
    classNameList = ["personal", "projects", "everything-else"];
    elements = document.getElementsByClassName(className)
    for (let i = 0; i < elements.length; i++) {
        // if its a circle, it should be just behind
        if (elements[i].className.includes("circle")) {
            elements[i].style.zIndex = 2;
        }
        else {
            elements[i].style.zIndex = 3;
        }
    }
    // move all the others behind
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
    // if they were coming from being visible, they need to be hidden
    // - can just make them no click objects
    if (personal.style.visibility == 'visible') {
        personal.classList.toggle('no-click');
        everything.classList.toggle('no-click');
        projects.classList.toggle('no-click');
    }
    // needed to set initially visible
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

// initially bring projects to the front as default
bringClassToFront("projects");