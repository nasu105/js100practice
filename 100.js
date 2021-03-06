// // 数の比較
// function compareNumbers(a, b) {
//   if (a > b) {
//     return a;
//   } else if (a < b) {
//     return b;
//   } else if (a = b) {
//     return 'eq';
//   }
// }

// console.log(compareNumbers(2, 5)); // 5
// console.log(compareNumbers(10, 9)); // 10
// console.log(compareNumbers(2, 2)); // eq

// // 単位の計算
// function convertToMm(n, s) {
//   if (s == 'km') {
//     return n * 100000;
//   } else if (s == 'cm') {
//     return n * 10;
//   }
// }

// console.log(convertToMm(1, "km")); // 1000000
// console.log(convertToMm(54, "km")); // 54000000
// console.log(convertToMm(2, "cm")); // 20

// // 奇数か偶数か
// function oddOrEven(n) {
//   if (n % 2 == 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }

// console.log(oddOrEven(4)); // even
// console.log(oddOrEven(5)); // odd
// console.log(oddOrEven(2)); // even

// // 西暦の計算
// function calculateYears(a, b) {
//   return b - a;
// }

// console.log(calculateYears(1990, 2014)); // 24
// console.log(calculateYears(1999, 2000)); // 1
// console.log(calculateYears(794, 1192)); // 398

// // 何番目
// function judgeTh(c) {
//   Number_font = ['A', 'B', 'C', 'D', 'E', 'F', 'D', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
//   return Number_font.findIndex((element) => element == c) + 1;
// }

// console.log(judgeTh("C")); // 3
// console.log(judgeTh("X")); // 24

// // 絶対値
// function getAbs(n) {
//   return Math.abs(n);
// }

// console.log(getAbs(-10)); // 10
// console.log(getAbs(15)); // 15
// console.log(getAbs(0)); // 0

// // 割り算
// function getQuotientAndSurplus(m, n) {
//   // Math.floor 商を整数にする
//   const division = Math.floor(m / n);
//   const over = m % n;
//   return division + ' ' + over;
// }

// console.log(getQuotientAndSurplus(10, 3)); // 3 1
// console.log(getQuotientAndSurplus(12, 14)); // 0 12

// // 小文字を大文字に
// function convertToUppercase(s) {
//   const font_change = s.toUpperCase();
//   return font_change;
// }

// console.log(convertToUppercase("gsacademy")); // GSACADEMY
// console.log(convertToUppercase("abcdefghijklmnopqrstuvwxyz")); // ABCDEFGHIJKLMNOPQRSTUVWXYZ

// // 掛け算のリスト
// function createList(n) {
//   let array = '';
//   for (let i = 1; i <= 9; i++) {
//     array += i * n + ' ';
//   }
//   return array;
// }

// console.log(createList(2)); // 2 4 6 8 10 12 14 16 18
// console.log(createList(3)); // 3 6 9 12 15 18 21 24 27
// console.log(createList(5)); // 5 10 15 20 25 30 35 40 45

// // 等差数列
// function createSequence(m, n) {
//   let increment = '';
//   for (let i = 0; i <= 9; i++) {
//     increment += m + (i * n) + ' ';
//   }
//   return increment;
// }

// console.log(createSequence(3, 3)); // 3 6 9 12 15 18 21 24 27 30
// console.log(createSequence(5, 10)); // 5 15 25 35 45 55 65 75 85 95
// console.log(createSequence(1, 3)); // 1 4 7 10 13 16 19 22 25 28


// // カウントダウン
// function countDown(n) {
//   const array = [];
//   // 空の配列にn番目までの数を入れる
//   for (let i = 1; i <= n; i++) {
//     array.push(i);
//   }
//   // 配列を反転させる
//   array.reverse();
//   // 文字列にする
//   return array.join(' ');
// }

// console.log(countDown(3)); // 3 2 1
// console.log(countDown(10)); // 10 9 8 7 6 5 4 3 2 1

// // N文字目まで出力
// function getOneToN(s, n) {
//   // 文字を入れる変数
//   const font_array = s;
//   return font_array.substring(0, n)
// }

// console.log(getOneToN("aabbccdd", 5)); // aabbc
// console.log(getOneToN("gsacademyfukuoka", 9)); // gsacademy

// // 文字列からN番目
// function getNthChar(s, n) {
//   const array = s;
//   return array.charAt(n - 1);
// }

// console.log(getNthChar("gsacademy", 3)); // a
// console.log(getNthChar("abcdefg", 5)); // e
// console.log(getNthChar("qwertyu", 1)); // q

// // 文字列の一致
// function isEqual(s, t) {
//   if (s == t) {
//     return 'Yes'
//   } else {
//     return 'No'
//   }
// }

// console.log(isEqual("gsacademy", "gsacademy")); // Yes
// console.log(isEqual("JavaScript", "ジャバスク")); // No
// console.log(isEqual("aaaaa", "aaaaaa")); // No

// // Aの個数
// function getNumberOfA(s) {
//   return (s.match(/A/g) || []).length; //’g’はgグラフっていうものらしい
// }

// console.log(getNumberOfA("GSACADEMY")); // 2
// console.log(getNumberOfA("aAaAaA")); // 3
// console.log(getNumberOfA("JavaScript")); // 0
// /* 参考url'https://lab.syncer.jp/Web/JavaScript/Snippet/23/' */

// // 表面積の計算
// function getSurfaceArea(a) {
//   return 6 * (a ** 2);
// }

// console.log(getSurfaceArea(4)); // 96
// console.log(getSurfaceArea(1)); // 6

// // 三角形の内角の和
// function getAngle(a, b) {
//   return 180 - a - b;
// }

// console.log(getAngle(30, 90)); // 60
// console.log(getAngle(45, 45)); // 90

// // 数字の出力
// function zeroPadding3(n) {
//   return ('000' + n).slice(-3);
// }

// console.log(zeroPadding3(98)); // 098
// console.log(zeroPadding3(2)); // 002
// /* 参考url'https://rfs.jp/sb/javascript/js-lab/zeropadding.html' */

// // 1週間の予定
// function getPaidHolidays(s) {
//   const no = /no/g; // 正規表現
//   const array = s.match(no);
//   if (array == null) {
//     return 0;
//   } else {
//     return array.length;
//   }
// }

// console.log(getPaidHolidays("yes yes yes yes no no yes")); // 2
// console.log(getPaidHolidays("yes no no no no no yes")); // 5

// // nまでの和
// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(getSum(10)); // 55
// console.log(getSum(99)); // 4950

// // 数字の桁数
// function getNumberOfDigits(n) {
//   return n.toString().length;
// }

// console.log(getNumberOfDigits(100)); // 3
// console.log(getNumberOfDigits(114514)); // 6

// // サイコロの裏面
// function getBackSide(n) {
//   const dice = 7 - n
//   return dice;
// }

// console.log(getBackSide(1)); // 6
// console.log(getBackSide(3)); // 4

// // 単位の変換
// function convertToSeconds(n) {
//   return n * 60;
// }

// console.log(convertToSeconds(16)); // 960
// console.log(convertToSeconds(3)); // 180

// // 充電可能
// function getTimeUntilFull(n) {
//   return 100 - n;
// }

// console.log(getTimeUntilFull(70)); // 30
// console.log(getTimeUntilFull(25)); // 75

// // 頭文字
// function getInitialFromName(s) {
//   let array = s.split(" ");
//   if (array.length == 2) {
//     return array[0].substr(0, 1) + "." + array[1].substr(0, 1);
//   } else {
//     return "---";
//   }
// }

// console.log(getInitialFromName("Dio Brando")); // D.B
// console.log(getInitialFromName("Pannacotta Fugo")); // P.F
// console.log(getInitialFromName("Gyro Zeppeli")); // G.Z

// // どれにしようかな
// function choiceOfGod(n) {
//   if (21 % n == 0) {
//     return n;
//   } else {
//     return 21 % n;
//   }
// }

// console.log(choiceOfGod(4)); // 1
// console.log(choiceOfGod(3)); // 3

// // 日付のデータ
// function formatYMD(s) {
//   // splitで空白を区切る
//   const array = s.split(' ', 2);
//   return array[0].padStart(4, '0') + '/' + array[1].padStart(2, '0') + '/' + array[1].padStart(2, '0');

// }

// console.log(formatYMD("2021 1 1")); // 2021/01/01
// console.log(formatYMD("2020 10 10")); // 2020/10/10
// console.log(formatYMD("794 11 29")); // 0794/11/29

// // アットマーク
// function convertAtToAtMark(s) {
//   return s.replaceAll('at', '@');
// }

// console.log(convertAtToAtMark("gsatcodeatquantity")); // gs@code@quantity
// console.log(convertAtToAtMark("atatatjojoatatat")); // @@@jojo@@@

// // 花粉症でつらい
// function getNeedBox(m, n) {
//   const sum = n / m;
//   return Math.ceil(sum);
// }

// console.log(getNeedBox(7, 30)); // 5
// console.log(getNeedBox(3, 100)); // 34
// console.log(getNeedBox(7, 5)); // 1

// // 本棚選び
// function canStoreBooks(s) {
//   const array = s.split(' ', 3);
//   const n = array[0];
//   const d = array[1];
//   const e = array[2];
//   if (d * e >= n) {
//     return 'OK'
//   } else {
//     return 'NG'
//   }
// }

// console.log(canStoreBooks("400 5 85")); // OK
// console.log(canStoreBooks("500 4 70")); // NG

// // 試合の回数
// function calculateNumberOfGames(n) {
//   let sum = 0;
//   for (let i = n - 1; i > 0; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(calculateNumberOfGames(4)); // 6
// console.log(calculateNumberOfGames(10)); // 45

// // 連休の天気
// function daysOfGoOut(s) {
//   const array = s.split(' ');
//   const going_out_array = [];
//   const home_array = [];
//   // 降水確率30%の日を取得
//   /* const result = array.filter(function (value) {
//       return value <= 30;
//   }) */
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] <= 30) {
//       going_out_array.push('going_out');
//     } else {
//       home_array.push('home');
//     }
//   }
//   return going_out_array.length;
// }

// console.log(daysOfGoOut("13 0 15 30 89 100 30")); // 5
// console.log(daysOfGoOut("0 14 18 22 0 2 4")); // 7
// console.log(daysOfGoOut("99 99 99 99 99 99 99")); // 0

// // 正三角形かどうか
// function isEquilateralTriangle(s) {
//   const array = s.split(' ');
//   //everyで全ての値が等しいか判定
//   if (array.every(v => v === array[0])) {
//     return 'yes';
//   } else {
//     return 'No';
//   }
// }

// console.log(isEquilateralTriangle("10 10 10")); // yes
// console.log(isEquilateralTriangle("3 4 5")); // No

// // 天気の表示
// function showWeather(n) {
//   if (n <= 30) {
//     return 'sunny';
//   } else if (n >= 31 && n <= 70) {
//     return 'cloudy';
//   } else {
//     return 'rainy';
//   }
// }

// console.log(showWeather(31)); // cloudy
// console.log(showWeather(2)); // sunny
// console.log(showWeather(71)); // rainy

// //はじめまして
// function greet(s1, s2) {
//   if (s2 == 'M') {
//     return 'Hi, Mr.' + s1;
//   } else {
//     return 'Hi, Ms.' + s1;
//   }
// }

// console.log(greet("Stroheim", "M")); // Hi, Mr.Stroheim
// console.log(greet("Trish", "F")); // Hi, Ms.Trish

// // 通知表
// function convertNumberToAlphabet(s) {
//   const result = s.replace(/5/g, 'A').replace(/4/g, 'B').replace(/3/g, 'C').replace(/2/g, 'D').replace(/1/g, 'E');
//   return result;
// }

// console.log(convertNumberToAlphabet("53342")); // ACCBD
// console.log(convertNumberToAlphabet("22222")); // DDDDD
// console.log(convertNumberToAlphabet("51111")); // AEEEE

// // 不思議なタマゴ
// function getNumberOfSteps(s) {
//   // ("1 2 5")を->("1", "2", "5")に変換
//   const array = s.split(' ');
//   // // ("1", "2", "5")を->(1, 2, 5)に変換
//   // const number_array = array.join(); //NaNが返ってくる
//   const max_array = Math.max(...array);
//   return max_array;
// }

// console.log(getNumberOfSteps("1 2 5")); // 5
// console.log(getNumberOfSteps("2 5 5")); // 5
// console.log(getNumberOfSteps("1 2 1")); // 2

// //台風の間隔
// function getInterval(s) {
//   let array = s.split(' ');
//   let result = '';

//   for (let i = 0; i < array.length - 1; i++) {
//     result += Number(array[i + 1]) - Number(array[i]) + ' ';
//   }
//   return result;
// }

// console.log(getInterval("5 8 19 25 31")); // 3 11 6 6
// console.log(getInterval("2 3 7 9 28")); // 1 4 2 19

// // 〇〇の秋
// function getAutumn(s) {
//   return s.replace('noaki', '');
// }

// console.log(getAutumn("codenoaki")); // code
// console.log(getAutumn("dokusyo")); // dokusyo
// console.log(getAutumn("javascriptnoaki")); // javascript

// // お月見だんご
// function getNumberOfDango(s) {
//   let array = s.split(' ');
//   // return array;
//   let sum = 0;
//   array.forEach(element => {
//     if (Number(element) >= 5) {
//       sum += 5;
//     } else {
//       sum += Number(element);
//     }
//   });

//   return sum;
// }

// console.log(getNumberOfDango("3 50")); // 8
// console.log(getNumberOfDango("100 500")); // 10
// console.log(getNumberOfDango("2 4")); // 6

// // 衣替え
// function isReadyForSummer(s) {
//   const summerStr = 'S';
//   const summer_array = (s.match(new RegExp(summerStr, 'g')) || []).length;
//   if (summer_array >= 5) {
//     return 'OK';
//   } else {
//     return 'NG';
//   }
// }

// console.log(isReadyForSummer("W W W W W S S S S S")); // OK
// console.log(isReadyForSummer("S S W W S W W W W W")); // NG
// console.log(isReadyForSummer("W S S S S S S S S W")); // OK

// // ピラミッドの作り方
// function getNumberOfHuman(n) {
//   sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(getNumberOfHuman(4)); // 10
// console.log(getNumberOfHuman(10)); // 55
// console.log(getNumberOfHuman(50)); // 1275

// // トリックオアトリート
// function candyOrChocolate(s) {
//   if (s == 'chocolate') {
//     return 'Thanks!';
//   } else if (s == 'candy') {
//     return 'Thanks!';
//   } else {
//     return 'No!';
//   }
// }

// console.log(candyOrChocolate("chocolate")); // Thanks!
// console.log(candyOrChocolate("candy")); // Thanks!
// console.log(candyOrChocolate("pannacotta")); // No!

// // 11/11
// function canParty(s) {
//   if (s.length >= 11) {
//     return 'OK';
//   } else {
//     return 11 - s.length;
//   }
// }

// console.log(canParty("11111111111")); // OK
// console.log(canParty("1111")); // 7
// console.log(canParty("1111111111111111")); // OK

// // ワインのキャッチコピー
// function bestCopy(s) {
//   return 'Best in ' + s;
// }

// console.log(bestCopy("a decade")); // Best in a decade
// console.log(bestCopy("the world")); // Best in the world
// console.log(bestCopy("history ever")); // Best in history ever 

// ガチャ期待値計算
function probabilityGetSSR(n, t) {
  const new_n = n *= 0.01;
  const loser = (Math.pow(1 - new_n, t));
  return Math.round((1 - loser) * 100);
}

console.log(probabilityGetSSR(1, 100)); // 63
console.log(probabilityGetSSR(1.5, 70)); // 65
console.log(probabilityGetSSR(1, 200)); // 87





