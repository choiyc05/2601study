/** 9) 2차원 배열을 이용하여 2, 4번째 열의 합의 값을 구하시오.
 * 출력값 :
 * 2번째 열의 합 : (2 + 6 + 10) > 18
 * 4번째 열의 합 : (4 + 8 + 12) > 24
 * 최종 합 : 42
 ****************/
const arr4 = [
  [ 1,  2,  3,  4   ],
  [ 5,  6,  7,  8   ],
  [ 9,  10, 11, 12  ],
  [ 10],
  [ 11, 22, 33]
];

let arrsum1 = 0;
let arrsum2 = 0;
// let sum = 0;

for( let i = 0; i < arr4.length; i++) {
    if( arr4[i].length > 1) arrsum1 += arr4[i][1];
    if( arr4[i].length > 3) arrsum2 += arr4[i][3];
}
let sum = arrsum1 + arrsum2;

console.log(`2번째 열의 합 : ${arrsum1}`);
console.log(`4번째 열의 합 : ${arrsum2}`);
console.log(`최종 합 : ${sum}`);

