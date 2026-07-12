"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const iamdesc = document.getElementById("i-am-desc");
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
function cycleAbout(index) {
    return __awaiter(this, void 0, void 0, function* () {
        const list = ["a Data Scientist", "an Artist", "a Computer Scientist", "an Economist"];
        let trueIndex = index % 4;
        iamdesc.textContent = list[trueIndex] + ".";
        // fade in
        iamdesc.style.opacity = '1';
        // sleep for 2.5 secs
        yield sleep(2500);
        // fade out
        iamdesc.style.opacity = '0';
        // repeat every 1 sec
        setTimeout(function () { cycleAbout(index + 1); }, 1000);
    });
}
cycleAbout(0);
