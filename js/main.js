'use strict';

// 前提：3回まで繰り返す

let count = 1;

while (count <= 3) {
  let name = prompt('日本の首都は？');
  if (name === '東京') {
    alert('正解です！');
  } else {
    alert('不正解です！');
  }
  count++;
}