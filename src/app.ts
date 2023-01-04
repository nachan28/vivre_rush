'use strict'

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

}

// 半開区間を指定してランダムな整数を返す。（1, 6)なら1から5までの数字をランダムに返す
function getRandomNumber(start: number, end: number) {
    return Math.floor(Math.random() * (end - start) + start);
}

// 配列もしくは文字列を渡すとランダムな配列の要素もしくは文字列を返す
function getRandomIdxElement(iterator: string[] | string) {
    const idx = getRandomNumber(0, iterator.length);
    return iterator[idx];
}

// ボタンを作る
const button = document.createElement("button");
button.textContent = "お題を生成";
// リストを作る
const subjectList = document.createElement("ul");
// それらを表示
window.onload = () => {
    document.body.appendChild(button);
    document.body.appendChild(subjectList);
}


// ボタンにイベントリスナをつける
button.addEventListener("click", () => {
    const currentCategory = getRandomIdxElement(Object.keys(categories));
    const currentSubCategory = getRandomIdxElement(categories[currentCategory as keyof typeof categories]);
    const subject = document.createElement("li");
    if (currentSubCategory === "話に近い") {
        subject.textContent = currentCategory + " " + getRandomNumber(1, latestEpisode) + currentSubCategory + " " + "キャラクターは？";
    }else if (currentSubCategory === "」に近い") {
        subject.textContent = currentCategory + " 50音順で「" + getRandomIdxElement(syllabary) + currentSubCategory + " " + "キャラクターは？";
    }else{
        subject.textContent = currentCategory + " " + currentSubCategory + " " + "キャラクターは？";
    }
    subjectList.appendChild(subject);
})



