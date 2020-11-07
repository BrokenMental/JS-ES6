//...문법 : 모든 나머지 인자를 자바스크립트 배열로 대체
function func(a, b){
    //arguments : 함수로 전달된 모든 인수를 포함한 객체
    console.log(arguments); //출력 : Arguments(5) [1, 2, 3, 4, 5, callee: <accessor>, Symbol(Symbol.iterator): ƒ]
    console.log(a, b);
}

func(1, 2, 3, 4, 5);


function restfunc(a, ...b){
    console.log(a, b); //출력 : 1 (4) [2, 3, 4, 5]
}

restfunc(1, 2, 3, 4, 5);