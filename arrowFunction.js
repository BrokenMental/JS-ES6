//사용법 1: 표현식의 결과값을 반환하는 표현식 본문에 쓰임

let arr1 = [1,2,3,4,5];

let twice = arr1.map(v=>v*2);//map : for문 같은 반복문, 자바스크립트 배열객체 내장함수, input: 파라미터로 전달되는 함수, output: 새로운 배열
//기존에는 아래와 같이 사용됨
// let twice = arr1.map(function(val){
//     return val*2;
// });

console.log(twice); //(5) [2, 4, 6, 8, 10], arr1의 값이 각각 2를 곱해서 리턴

//사용법 2: 상태블럭 본문에 쓰임
let twice2 = arr1.map(v=>{
    if(v % 2 === 0){
        console.log('even number');
    }else{
        console.log('odd number');
    }

    /*
    - 출력결과
    odd number
    even number
    odd number
    even number
    odd number
    */
});

let arr2 = [10, 20, 30, 40, 50];

//map으로 받는 인자, 첫번째 : value / 두번쨰 : index
let twice3 = arr2.map((v, i)=>{
    console.log(`i: ${i}, v: ${v}`);

    /*
    - 출력결과
    i: 0, v: 10
    i: 1, v: 20
    i: 2, v: 30
    i: 3, v: 40
    i: 4, v: 50
    */

});