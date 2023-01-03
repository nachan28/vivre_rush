'use strict';
const latestEpisode = 1070;
const syllabary = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const categories = {
    懸賞金が: ["低い", "高い", "近い 2", "遠い 2", "低い 男", "高い 男"],
    名前が: [`50音順で「${getRandomIdx(syllabary)}」に近い`, "長い", "短い"],
    年齢が: ["高い", "低い", "近い 2", "遠い 2"],
    身長が: ["高い", "低い", "近い 2", "遠い 2"],
    初登場話が: ["早い", "遅い", "近い 2", "遠い 2", `${getRandomNumber(1, latestEpisode)}話に近い`],
};
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}
function getRandomIdx(iterator) {
    const idx = getRandomNumber(0, iterator.length);
    return iterator[idx];
}
const button = document.createElement("button");
button.textContent = "お題を生成";
const subjectList = document.createElement("ul");
window.onload = () => {
    document.body.appendChild(button);
    document.body.appendChild(subjectList);
};
button.addEventListener("click", () => {
    const currentCategory = getRandomIdx(Object.keys(categories));
    const currentSubCategory = getRandomIdx(categories[currentCategory]);
    const subject = document.createElement("li");
    subject.textContent = currentCategory + " " + currentSubCategory + " " + "キャラクターは？";
    subjectList.appendChild(subject);
});
//# sourceMappingURL=app.js.map