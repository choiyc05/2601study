/** 8) 문자 F의 인덱스값을 찾으시오.
 * 출력값 :
 * 인덱스 값 : (1,2)
 ****************/
const arr3 = [
  ['A','B','C'],
  ['D','E','F'],
  ['G','H','I']
];

let F ="";
for( let i = 0; i < arr3.length ; i++ ) {
  for( let j = 0; j < arr3[i].length; j++) {
    if( arr3[i][j] == "F" ) {
      F += `(${i}, ${j})`;
    }
  }
}
console.log(`인덱스 값 : ${F}`)