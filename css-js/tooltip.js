lst = ["globe","flag","puck","newspaper","building","resume",
    "computer","calendar","logo","fortune","drawing",
    "magazine"]

for (let i = 0; i < lst.length; i++) {
    elem = document.getElementById(lst[i]);
    elem.addEventListener('mouseover', function () { reveal(lst[i]) });
    desc = document.getElementById(lst[i] + "-desc");
    desc.classList.toggle('fade-opacity');
    elem.addEventListener('mouseout', function () { hide(lst[i]) });
}

function reveal(name) {
    desc = document.getElementById(name + "-desc");
    desc.style.visibility = 'visible'
    desc.style.zIndex = 4
    desc.classList.toggle('fade-opacity');
}

function hide(name) {
    desc = document.getElementById(name + "-desc");
    desc.classList.toggle('fade-opacity');
    desc.style.zIndex = 2
}
