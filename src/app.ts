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
const main = document.getElementsByTagName("main")[0]!;
// ボタンを作る
const button = document.createElement("button");
// お題表示部分を作る
const subject = document.createElement("p");
// 過去のお題リストを作る
const subjectList = document.createElement("ul");

button.textContent = "お題を生成";
button.className = "button";
button.type = "button";
subjectList.className = "subjectList";

// それらを表示
window.onload = () => {
    document.body.appendChild(main);
    main.appendChild(button);
    main.appendChild(subject);
    main.appendChild(subjectList);
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


// ランダムなお題を表示
function getSubject() {
    const currentCategory = getRandomIdxElement(Object.keys(categories));
    const currentSubCategory = getRandomIdxElement(categories[currentCategory as keyof typeof categories]);
    
    // お題表示部分にランダムにお題を表示
    if (currentSubCategory === "話に近い") {
        subject.textContent = currentCategory + " " + getRandomNumber(1, latestEpisode) + currentSubCategory + " " + "キャラクターは？";
    } else if (currentSubCategory === "」に近い") {
        subject.textContent = currentCategory + " 50音順で「" + getRandomIdxElement(syllabary) + currentSubCategory + " " + "キャラクターは？";
    } else {
        subject.textContent = currentCategory + " " + currentSubCategory + " " + "キャラクターは？";
    }

    return subject.textContent;
}

// 一つ前のお題をテキストとして持つli要素を作ってulに追加
function addElement() {
    const prevSubject = subject.textContent;
    const element = document.createElement("li");
    element.className = "elm";

    if (prevSubject) {
        element.textContent = prevSubject;
        subjectList.insertBefore(element, document.querySelector("#main > .subjectList > .elm"));
    }
}

// テキストを読み上げる関数
function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.voice = speechSynthesis.getVoices().filter(voice => voice.lang === "ja-JP")[0];
    speechSynthesis.speak(utterance);
    console.log(text);
}

// ボタンクリックの時に起動する関数
function clickHandler() {
    addElement();
    const newSubject = getSubject();
    speak(newSubject);
}


// エンターキーにボタンクリックと同じ効果をつける
function keyDownHandler(e: KeyboardEvent) {
    if (e.key === "Enter") {
        e.preventDefault();
        clickHandler();
    }
}

// ボタンにイベントリスナをつける
button.addEventListener("click", clickHandler, false);
// キーダウンにもイベントリスナをつける
document.addEventListener("keydown", keyDownHandler, false);




