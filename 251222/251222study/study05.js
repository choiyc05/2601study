// 5-1) 1부터 10까지 숫자 중 홀수만 출력하세요.
// 5-2) 1부터 20까지 숫자 중 3의 배수를 출력에 제외하세요.
// 5-3) 문자열 "javascript"의 각 문자를 한 줄씩 출력 중 'a'만 제외하세요.
const start = 1;
const end1 = 10;
const end2 = 20;
const str = "javascript";
const keyword = "a";

// 5-1)
for( let i = start; i <= end1; i++) {
    if(i % 2 === 0) continue;       // == 대신 === 사용 추천
    console.log(i);
}

// 5-2)
for( let i = start; i <= end2; i++) {
    if(i % 3 === 0) continue;
    console.log(i);
}

// 5-3)
for(const s of str) {
    if( s === "a") continue; 
    console.log(s);
}




