'use strict';
let latestEpisode = 1070;
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}
function getRandomCondition(array) {
    const idx = getRandomNumber(0, array.length);
    return array[idx];
}
function getRandomChar(lb, ub, n) {
    var cs = Array(n), span = ub - lb + 1;
    for (var i = 0; i < n; i++) {
        cs[i] = lb + getRandomNumber(0, span);
    }
    return String.fromCharCode.apply(String, cs);
}
const categories = {
    懸賞金が: ["低い", "高い", "近い 2", "遠い 2", "低い 男", "高い 男"],
    名前が: [`50音順で「${getRandomChar(0x3041, 0x3093, 1)}」に近い`, "長い", "短い"],
    年齢が: ["高い", "低い", "近い 2", "遠い 2"],
    身長が: ["高い", "低い", "近い 2", "遠い 2"],
    初登場話が: ["早い", "遅い", "近い 2", "遠い 2", `${getRandomNumber(1, latestEpisode)}話に近い`],
};
const button = document.createElement("button");
button.textContent = "お題を生成";
const subjectList = document.createElement("ul");
window.onload = () => {
    document.body.appendChild(button);
    document.body.appendChild(subjectList);
};
button.addEventListener("click", () => {
    const currentCategory = getRandomCondition(Object.keys(categories));
    const subject = document.createElement("li");
    subject.textContent = currentCategory + " " + getRandomCondition(categories[currentCategory]) + " " + "キャラクターは？";
    subjectList.appendChild(subject);
});
//# sourceMappingURL=app.js.map