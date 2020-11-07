class Person {
    constructor(region_, gender_){
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'an-nyeong'){
        console.log(val);
    }
}

let korean = new Person('Korea', 'male');

//console.log(korean); //출력 : Person {region: 'Korea', gender: 'male'}

korean.gender = 'female'; //인스턴스 변수 변경
//console.log(korean); //출력 : Person {region: 'Korea', gender: 'female'}

//korean.greetings(); //출력 : an-nyeong

//상속
class American extends Person {
    constructor(region_, gender_, language_){
        super(region_, gender_);
        this.language = language_;
    }
    
    greetings(val = 'hello'){
        console.log(val);
    }
}

let american = new American('USA', 'female', 'English');
console.log(american); //출력 : American {region: 'USA', gender: 'female', language: 'English'}
american.greetings(); //출력 : hello