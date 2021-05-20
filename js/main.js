'use strict';

// 前提：3回まで繰り返す

let count = 1;
let flg = true;

while (count <= 3 && flg　=== true ) {
  let name = prompt('日本の首都は？');
  if (name === '東京') {
    alert('正解です！');
    flg = false;
  } else {
    alert('不正解です！');
  }
  count++;
}