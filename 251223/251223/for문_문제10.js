/** 10) 배열의 값을 이용하여 출석 체크 수를 구하시오.
 * 출력값 :
 * 전체 출석 수 : 14
 ****************/
const arr5 = [
  [1,0,1,1,0,1],
  [1,1,1,1,1,1],
  [0,1,1,1,0,1]
];

// let total = 0;
// for( let i = 0; i < arr5.length; i++) {
//     for( let j = 0; j < arr5[i].length; j++) {
//         if( arr5[i][j] === 1 ) total++;
//     }
// }

// console.log(`전체 출석 수 : ${total}명`);

//

let total = 0;
for( let i = 0; i < arr5.length; i++) {
    for( let j = 0; j < arr5[i].length; j++) {
        total += arr5[i][j];
    }
}

console.log(`전체 출석 수 : ${total}명`);