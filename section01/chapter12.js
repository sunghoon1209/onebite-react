function funcA(){ // 함수선언

}

let varA = funcA;
varA();

// 1.함수 표현식  호이스팅x
let varB = function(){ // 익명함수

};

varB();

// 2.화살표 함수
let varC = (value) => {
    console.log(value)
    return value + 1
};

console.log(varC(10));




