// 순회란?
// --> 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것
// 반복문을 이용한 배열, 객체 순회

// 1. 배열 순회
let arr =[1,2,3];

// 1.1 배열 인덱스
for(let i =0; i<arr.length; i++){
    // console.log(arr[i]);
}

let arr2 = [4,5,6,7,8];
for(let i=0; i<arr2.length;i++){
    // console.log(arr2[i]);
}

// 1.2 for of 반복문 (배열을 순회하기 위해서만 사용됨)
for(let item of arr) {
    // console.log(item);
}

// 2. 객체 순회
let person = {
    name: '이정환',
    age : 27,
    hobby : '테니스',
}

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys){
    const value = person[key];
    // console.log(key, value)
}

// 2.2 Object.values 
// -> 객체어서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values){
    // console.log(value);
}

// 2.3 for in
for(let key in person){
    const value = person[key];
    // console.log(key, value);
}


const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const student = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    grades: {
      math: 90,
      english: 85,
      science: 92
    }
  };

for(let i=0; i<fruits.length;i++){
    // console.log(fruits[i])
}

for (let item of fruits){
    // console.log(item)
}

for (let key in student){
    const value = student[key];
    console.log(key,value)
}

