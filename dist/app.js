'use strict';
const latestEpisode = 1070;
const syllabary = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const categories = {
    懸賞金が: ["低い", "高い", "近い 2", "遠い 2", "低い 男", "高い 男", "足して5億になる複数"],
    名前が: ["」に近い", "長い", "短い"],
    年齢が: ["高い", "低い", "近い 2", "遠い 2"],
    身長が: ["高い", "低い", "近い 2", "遠い 2"],
    初登場話が: ["早い", "遅い", "近い 2", "遠い 2", "話に近い"],
    笑い方が: ["」に近い"],
    悪魔の実の名前が: ["」に近い"]
};
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}
function getRandomIdxElement(iterator) {
    const idx = getRandomNumber(0, iterator.length);
    return iterator[idx];
}
const main = document.getElementById("main");
const button = document.createElement("button");
button.textContent = "お題を生成";
button.className = "button";
button.type = "button";
const subject = document.createElement("p");
const subjectList = document.createElement("ul");
subjectList.className = "subjectList";
window.onload = () => {
    document.body.appendChild(main);
    main.appendChild(button);
    main.appendChild(subject);
    main.appendChild(subjectList);
};
function getSubject() {
    const currentCategory = getRandomIdxElement(Object.keys(categories));
    const currentSubCategory = getRandomIdxElement(categories[currentCategory]);
    if (currentSubCategory === "話に近い") {
        subject.textContent = currentCategory + " " + getRandomNumber(1, latestEpisode) + currentSubCategory + " " + "キャラクターは？";
    }
    else if (currentSubCategory === "」に近い") {
        subject.textContent = currentCategory + " 50音順で「" + getRandomIdxElement(syllabary) + currentSubCategory + " " + "キャラクターは？";
    }
    else {
        subject.textContent = currentCategory + " " + currentSubCategory + " " + "キャラクターは？";
    }
    return subject.textContent;
}
function addElement() {
    const prevSubject = subject.textContent;
    const element = document.createElement("li");
    element.className = "elm";
    if (prevSubject) {
        element.textContent = prevSubject;
        subjectList.insertBefore(element, document.querySelector("#main > .subjectList > .elm"));
    }
}
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.voice = speechSynthesis.getVoices().filter(voice => voice.lang === "ja-JP")[0];
    speechSynthesis.speak(utterance);
    console.log(text);
}
function clickHandler() {
    addElement();
    const newSubject = getSubject();
    speak(newSubject);
}
function keyDownHandler(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        clickHandler();
    }
}
button.addEventListener("click", clickHandler, false);
document.addEventListener("keydown", keyDownHandler, false);
//# sourceMappingURL=app.js.map