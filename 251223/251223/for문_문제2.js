/** 2) for문과 if문을 사용하여 다음과 같은 마름모 모양을 출력하시오.
 * 출력값 :
 *   *
 *  ***
 * *****
 *  ***
 *   *
 ****************/

console.log(`1st`);

const blank = " ";
const star = "*";
let blank2 = "";
let star2 = "";
for( i = -2; i <= 2; i++) {
    for( j = 0; j < Math.abs(i); j++) {
    blank2 += blank;
    }
    for( k = 0; k < 5-Math.abs(i)*2; k++) {
    star2 += star;
    }
    console.log(`${blank2}${star2}`);
    blank2 = "";
    star2 = "";
}