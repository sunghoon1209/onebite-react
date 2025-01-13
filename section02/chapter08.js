// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];
const a1 = arr1.forEach(function(item, idx, arr){
    // console.log((idx, item *2));
});

let doubledArr = [];

arr1.forEach(item=>{
    doubledArr.push(item*2)
})

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 동일한 요소일때는 맨 앞에 인덱스를 반환 , 존재하지않으면 -1 반환
// 얕은 비교
let arr3 = [2,2,2];
let index = arr3.indexOf(2);
let objectArr = [
    {name: '이정환'},
    {name: '홍길동'},

]
// console.log(
//     objectArr.indexOf({name:'이정환'})
// )

// console.log(objectArr.findIndex((item)=>item.name==='이정환'))

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// indexOf는 객체 타입에서는 사용못함
// 객체의 프로퍼티값까지 접근하여 검색가능
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex((item)=>{ item ===999});


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환(인덱스를 반환하는 것이 아니라 요소 자체를 반환)

let arr5 = [
    {name:'이정환'},
    {name:'홍길동'},
]

console.log(arr5.find((item)=>item.name ==='이정환'))