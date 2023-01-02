'use strict';
let latestEpisode = 1070;
function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}
function getRandomCondition(array) {
    const idx = getRandomNumber(0, array.length);
    return array[idx];
}
function getRandomChar(ub = 0x3041, lb = 0x3093, n = 1) {
    let cs = Array(n), span = ub - lb + 1;
    for (let i = 0; i < n; i++) {
        cs[i] = lb + getRandomNumber(0, span);
    }
    return String.fromCharCode.apply(String, cs);
}
const categories = {
    懸賞金が: ["低い", "高い", "近い 2", "遠い 2", "低い 男", "高い 男"],
    名前が: [`50音順で「${getRandomChar()}」に近い`, "長い", "短い"],
    年齢が: ["高い", "低い", "近い 2", "遠い 2"],
    身長が: ["高い", "低い", "近い 2", "遠い 2"],
    初登場話が: ["早い", "遅い", "近い 2", "遠い 2", `${getRandomNumber(1, latestEpisode)}話に近い`],
};
const currentCategory = getRandomCondition(Object.keys(categories));
const subject = currentCategory + " " + getRandomCondition(categories[currentCategory]) + " " + "キャラクターは？";
console.log(subject);
//# sourceMappingURL=app.js.map