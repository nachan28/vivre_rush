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
    const prevSubject = subject.textContent;
    const listElement = document.createElement("li");
    listElement.className = "elm";
    if (currentSubCategory === "話に近い") {
        subject.textContent = currentCategory + " " + getRandomNumber(1, latestEpisode) + currentSubCategory + " " + "キャラクターは？";
    }
    else if (currentSubCategory === "」に近い") {
        subject.textContent = currentCategory + " 50音順で「" + getRandomIdxElement(syllabary) + currentSubCategory + " " + "キャラクターは？";
    }
    else {
        subject.textContent = currentCategory + " " + currentSubCategory + " " + "キャラクターは？";
    }
    if (prevSubject) {
        listElement.textContent = prevSubject;
        subjectList.insertBefore(listElement, document.querySelector("#main > .subjectList > .elm"));
    }
}
function keyDownHandler(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        getSubject();
        console.log(1);
    }
}
button.addEventListener("click", getSubject, false);
document.addEventListener("keydown", keyDownHandler, false);
//# sourceMappingURL=app.js.map