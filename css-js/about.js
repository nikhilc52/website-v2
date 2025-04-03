const iamdesc = document.getElementById("i-am-desc");
// initially turn off
iamdesc.classList.toggle('fade-opacity');

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function cycleAbout(index) {
    list = ["a Data Scientist", "an Artist", "a Graphic Designer", "a Computer Scientist", "an Economist"]
    let trueIndex = index % 5;

    iamdesc.textContent = "I'm " + list[trueIndex] + ".";
    // fade in
    iamdesc.classList.toggle('fade-opacity')
    // sleep for 2.5 secs
    await sleep(2500)
    // fade out
    iamdesc.classList.toggle('fade-opacity')

    // repeat every 1 sec
    setTimeout(function() {cycleAbout(index+1)}, 1000);
}

cycleAbout(0)