const val01 = 'hello';
const val02 = 'world';
const val03 = val01 + ' ' + val02 + '!!!!';

console.log(val03);


/*
* 작은 따옴표('', 엔터 옆) 대신 1번 옆 따옴표를 활용
* 사용 방법 `${variable}`
*/
const litVal = `${val01} ${val02}!!!!`

console.log(litVal);