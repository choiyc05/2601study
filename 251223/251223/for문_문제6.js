/** 6) 다음 배열의 각 행 별 합계를 구하시오.
 * 출력값 :
 * 26
 * 16 
 * 19
 ****************/
const arr1 = [
  [9,4,6,7],
  [1,3,7,5],
  [5,8,2,4],
];

const arrsum =[];
// let sum = "";

for( i = 0; i < arr1.length; i++) {
    sum = 0;
    for( let j = 0; j < arr1[i].length; j++) {
        sum += arr1[i][j];
    }
    arrsum.push(sum);
}
console.log(arrsum);