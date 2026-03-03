// 출력 예시 : 
// O
// OX 
// OXO
// OXOX
// OXOXO
// OXOXOX
// OXOXOXO
// OXOXOXOX
// OXOXOXOXO

let 값 = "";
const symbol1 = "☆";
const symbol2 = "★";
for( let i = 0 ; i < 9 ; i++ ) {
    값 = (i % 2 !== 0) ? 값 + symbol1 : 값 + symbol2;       // 삼항 연산자
    console.log(값);    
}