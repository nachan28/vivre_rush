"use strict";
function getRandomCondition(array) {
  const idx = getRandomNumber(array.length);
  return array[idx];
}
function getRandomChar(ub, lb, n) {
  let cs = Array(n),
    span = ub - lb + 1;
  for (let i = 0; i < n; i++) {
    cs[i] = lb + getRandomNumber(span);
  }
  return String.fromCharCode.apply(String, cs);
}
function getRandomNumber(range) {
  return Math.floor(Math.random() * range);
}
const categories = {
  懸賞金が: ["低い", "高い", "近い 2", "遠い 2", "低い 男", "高い 男"],
  名前が: [
    `50音順で「${getRandomChar(0x3041, 0x3093, 1)}」に近い`,
    "長い",
    "短い",
  ],
  年齢が: ["高い", "低い", "近い 2", "遠い 2"],
  身長が: ["高い", "低い", "近い 2", "遠い 2"],
  初登場話が: ["早い", "遅い", "近い 2", "遠い 2", "300話に近い"],
};
let currentCategory = getRandomCondition(Object.keys(categories));
let subject =
  currentCategory +
  " " +
  getRandomCondition(categories[currentCategory]) +
  " " +
  "キャラクターは？";
console.log(subject);
//# sourceMappingURL=app.js.map
