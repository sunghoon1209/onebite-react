// Promise
// -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
/* 
                reslove
                =====  성공(Fulfilled)
대기 (Pending)
                =====  실패(Rejected)
                reject

*/
function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업 실행하는 함수
        // executor
        setTimeout(()=>{
            if(typeof num === 'number'){
                resolve(num+10);
            }
            else{
                reject('num이 숫자가 아닙니다.')
            }
        },2000)    
    
    });
    return promise;
}



add10(0)
    .then((result)=>{
        console.log(result);
        return add10(result);   
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });
