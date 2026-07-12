const iamdesc = document.getElementById("i-am-desc")!;
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

async function cycleAbout(index: number) {
    const list = ["a Data Scientist", "an Artist", "a Computer Scientist", "an Economist"]
    let trueIndex = index % 4;

    iamdesc.textContent = list[trueIndex] + ".";
    // fade in
    iamdesc.style.opacity = '1'
    // sleep for 2.5 secs
    await sleep(2500)
    // fade out
    iamdesc.style.opacity = '0'

    // repeat every 1 sec
    setTimeout(function () { cycleAbout(index + 1) }, 1000);
}

cycleAbout(0)