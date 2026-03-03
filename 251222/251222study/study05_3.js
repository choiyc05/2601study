// 5-3) 문자열 "javascript"의 각 문자를 한 줄씩 출력 중 'a'만 제외하세요.
// 출력값:
// j
// v
// s
// c
// r
// i
// p
// t
const str = "javascript";
const keyword = "a";

for(const s of str) {
    if( s == "a") continue; 
        console.log(s);
}