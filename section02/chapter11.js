// 동기란 무엇일까?
// -> 여러개의 작업이 있을때 순서대로 한 번에 하나씩만 처리 

// 비동기란 무엇일까?
// -> 작업을 순서대로 처리하지 않음

console.log(1);

setTimeout(()=>{
    console.log(2)
}, 3000)

console.log(3);