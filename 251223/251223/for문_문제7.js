/** 7) 다음 배열에서 각 행의 최대값을 구하시오.
 * 출력값 :
 * 96
 * 74
 * 103
 * 131
 ****************/
const arr2 = [
  [96,42,61,75],
  [13,32,74,55],
  [58,88,26,103],
  [],
  [24,51,124,131],
  [-7,-23,-33,-56],
  [-3],
  []
];

// let sum2 = 0;

for( let i = 0; i < arr2.length; i++) {
    sum2 = arr2[i][0];
    if(sum2 === undefined) continue;
    for(let j = 0; j < arr2[i].length; j++) {
        if( arr2[i][j] >= sum2) sum2 = arr2[i][j];
    }
    console.log(sum2);
}