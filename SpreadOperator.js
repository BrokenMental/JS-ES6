function sum(x, y, z){
    return x+y+z;
}

console.log(sum(1, 2, 3));

arr = [1, 2, 3];
//console.log(sum(arr)); //error
console.log(sum.apply(null, arr)); //배열을 함수 각자의 인자로 보낼 땐 .apply(null, {배열})

console.log(sum(...arr)); //spreadOperator를 활용하면 apply 없이 배열 사용 가능
/********************************************************************************************************************/

function sum2(a, b, c, d, e){
    return a+b+c+d+e;
}

let arr2 = [20, 30];

//...arr2에 arr2의 20, 30이 들어와 sum2의 인수 b, c에 들어감
//arr2가 [20, 30, 100] 과 같이 sum2에 들어가는 인수와 맞지 않을경우 아래 40, 50이 한칸씩 밀려 50은 사용하지 않는 인수가 됨
console.log(sum2(10, ...arr2, 40, 50));
/********************************************************************************************************************/

let face = ['eyes', 'nose', 'mouth'];
let head = ['hiar', ...face, 'ears'];

console.log(head); //출력 : (5) ['hiar', 'eyes', 'nose', 'mouth', 'ears'], face 객체의 값을 head의 객체값으로 초기화 가능
/********************************************************************************************************************/

let arr3 = [1,2,3];
let arrcp1 = arr3; //얕은복사
arrcp1.push(4); //얕은복사에 의해 복사된 배열에 추가했지만 기존 객체에도 영향이 생김

console.log(arr3); //출력 : (4) [1, 2, 3, 4]
console.log(arrcp1); //출력 : (4) [1, 2, 3, 4]

let arr4 = [1,2,3];
let arrcp2 = [...arr4]; //spread operator에 의해 깊은복사가 일어남
arrcp2.push(4);

console.log(arr4); //출력 : (3) [1, 2, 3]
console.log(arrcp1); //출력 : (4) [1, 2, 3, 4]
/********************************************************************************************************************/

let drinks = {
    caffe: 'latte',
    coca: 'cola'
}

let newDrinks = {
    lemon: 'tea',
    orange: 'juice',
    drinks
}

//console.log(newDrinks); //출력 : {lemon: 'tea', orange: 'juice', drinks: {…}}, newDrinks 객체 안에 drinks라는 객체가 포함

let newDrinks2 = {
    lemon: 'tea',
    orange: 'juice',
    ...drinks
}

console.log(newDrinks2); //출력 : {lemon: 'tea', orange: 'juice', caffe: 'latte', coca: 'cola'}, drinks 객체가 newDrinks2의 객체인 것처럼 출력