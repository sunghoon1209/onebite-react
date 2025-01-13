let o1 ={name:'주성훈'};
let o2 = o1;    //얕은복사, 같은 참조값
let o3 = {...o1};   // 깊은 복사, 다른 참조값

console.log(o1===o2)