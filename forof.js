let arr = [10, 20, 30, 40];

for(let val in arr){
    console.log(val); //index
    console.log(arr[val]); //value 접근
}

//value를 만들면 key값이 저절로 생기는(배열에서 index와 같은) interater를 반환하는 객체(배열) 에서만 사용 가능
for(let val of arr){
    console.log(val); //value 접근
}

let obj = {
    a : 1,
    b: 2,
    c: 3
}

//객체와 같은 곳에선 for in을 활용해야 함
for(let val of obj){
    console.log(val); //error
}
