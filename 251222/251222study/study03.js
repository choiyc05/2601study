var a = 1;
let b = "일";
const c = true;        //const는 단순 선언 불가

console.log(typeof b);

console.log(a + b + c);
console.log( typeof(a + b +c) );
console.log( `글 : ${a}` + c );

// for문 > if문

for(let i = 0; i < 10; i = i +2) {      // 1 > 3
    console.log(i);
    }

// if문 알아보기

if(!true) {                         // ! : 반대 >> !true = false
    console.log("참");
} else {
    console.log("거짓");
}

if(1 === 0) {
    console.log("참");
} else {
    console.log("거짓");
}

if(1 == "1") {
    console.log("참");
} else {
    console.log("거짓");
}

var a = 10;
if(a > 0) {                 // > , >= , < , <= , %:나머지 , /
    console.log("참");
} else {
    console.log("거짓");
}


var a = 10;
if(a % 2 === 0 ) {          // if(a % 2 !== 0 ) 면 홀수 판단
    console.log("참");
} else {
    console.log("거짓");
}                           // 짝수 판단 

for(let i = 0; i < 10; i++) {
    // i !== 0      || > or     &&  > and
    if(i % 2 === 0  && i !== 0) {
        console.log(i)
    }
}

for(let i = 0; i < 10; i++) {
    if(i === 0) {
        continue;
    }
    if(i % 2 === 0) {
        console.log(i);
    }
}

for(let i = 0; i < 10; i++) {
    if(i === 0) continue;
    if(i % 2 === 0) console.log(i);
}

