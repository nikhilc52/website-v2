// list of tool tip points
lst = ["globe","flag","puck","newspaper","building","resume",
    "computer","calendar","logo","fortune","drawing",
    "magazine","vinyl","canvas","gunner-book","coates-book"]

// for each of the tooltips, add the reveal function on mouseover and hide on mouse out
for (let i = 0; i < lst.length; i++) {
    elem = document.getElementById(lst[i]);
    elem.addEventListener('mouseover', function () { reveal(lst[i]) });
    desc = document.getElementById(lst[i] + "-desc");
    // initially fade out
    desc.classList.toggle('fade-opacity');
    elem.addEventListener('mouseout', function () { hide(lst[i]) });
}

function reveal(name) {
    desc = document.getElementById(name + "-desc");
    desc.style.visibility = 'visible'
    // set a high z-index to go over pointers
    desc.style.zIndex = 4
    desc.classList.toggle('fade-opacity');
}

function hide(name) {
    desc = document.getElementById(name + "-desc");
    desc.classList.toggle('fade-opacity');
    desc.style.zIndex = 2
}
