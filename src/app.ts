'use strict'

let latestEpisode = 1070;

// 半開区間の範囲を指定してランダムな整数を返す。（1, 6)なら1から5までの数字をランダムに返す
function getRandomNumber(start: number, end: number) {
    return Math.floor(Math.random() * (end - start) + start);
}

// 配列を渡すとランダムな配列の要素を返す
function getRandomCondition(array: string[]) {
    const idx = getRandomNumber(0, array.length);
    return array[idx];
}

// 指定した範囲のUniコードの文字を、指定した長さの文字列としてランダムに返す。デフォルトでは50音のどれか1文字をランダムに返す
function getRandomChar(ub: number = 0x3041, lb: number = 0x3093, n: number = 1) {
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

}

const currentCategory = getRandomCondition(Object.keys(categories));
const subject = currentCategory + " " + getRandomCondition(categories[currentCategory as keyof typeof categories]) + " " + "キャラクターは？";
console.log(subject);

