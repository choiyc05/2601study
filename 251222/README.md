# 251222

## JS 참조 타입 (study_05)
 ### 1. 참조 기본
```JS
    - 배열 array
    특징 : [ ] 대괄호로 구성, 구성마다 쉼표(,)로 구분, 순차적 > Index를 가지고 있다.
    var arr = [2, 4, 2.5, '안녕'];        서로 다른 자료형을 담을 수 있다.
    console.log(arr);
    console.log(arr[0]);
    console.log('arr 타입 : ', typeof arr);              > object    참조 타입 : 객체 // 독립된 자료형이 아니라 '특수한 형태의 객체'로 취급
    console.log('arr[0] 타입 : ', typeof arr[0]);        > number

    const a = [];
    a[0] = 1;        > 오류 발생 안 함 // const는 구조를 고정 배열 안의 내용을 수정 가능
                    주로 배열 만들 때 const 이용 (추천) var , let 도 가능은 함

    배열 안의 내용물 하나씩 출력하려면 ex) arr[0] > 2 등으로 나오나 여러 개 사용 시 반복문 이용하면 편리
```
***
 ### 2. 반복문 for
```JS
    // 기본 문법
    for(;;) {
    }
    :: 안에 논리가 들어감 // True 넣으면 무한 루프, False 넣으면 x

    // (1. 변수 선언 및 값 설정)
    for(/* (2. 변수 선언 및 값 설정) */ ; ; ) {
    }

    // 1번 : 전역 변수 // 2번 : 지역 변수

    let i = 0;
    for( ; i < 1 ; ) {
        console.log("반복");
        i = i + 1;
    }
    console.log(i);
    ///
    let i = 0;
    for( ; i < 1 ; i = i + 1 ) {
        console.log("반복");
    }
    console.log(i);
    ///
    for( let i = 0; i < 1 ; i = i + 1 ) {
        console.log("반복");
    }
    console.log(i);
    // -> 셋 모두 동일

    // 배열의 값을 하나씩 꺼내기 
    const a = [1,2,3,4,5]; // 문제 1
    for ( let i = 0 ; i < a.length ; i = i + 1 ) {
    console.log(`배열 ${i} : ${a[i]}`);
    }
    >배열 0 : 1
    배열 1 : 2
    배열 2 : 3
    배열 3 : 4
    배열 4 : 5

    const a = [1,2,3,4,5];
    for (const index in a) {         // in : 인덱스 값을 꺼냄
    console.log(`배열 ${index} : ${a[index]}`);
    }        // 위와 동일하게 출력됨

    반복문 안에서 in은 "객체의 속성들을 하나씩 훑으며 변수에 담아줘" 라는 뜻

    const a = [1,2,3,4,5];
    for (const value of a ) {        // of : 오직 값(value)만 꺼내고 싶을 때 사용
    console.log(value);
    }
    // (출력)
    1
    2
    3
    4
    5

    // 구구단 (1단) 단 * 곱값 = 결과 1 * 1
    for( let i = 1 ; i <= 1 ; i++ ) {    // 1
    for( let j = 1 ; j <= 9 ; j++) {    // 1~9
        console.log(`${i} * ${j} =  ${i * j}`); // (백틱` 안 쓰면) console.log( i + " * " + j + " = " + (i * j) );
        }
    }
    >
    1 * 1 = 1
    1 * 2 = 2
    1 * 3 = 3
    1 * 4 = 4
    1 * 5 = 5
    1 * 6 = 6
    1 * 7 = 7
    1 * 8 = 8
    1 * 9 = 9

    // 문제 2 (251222/study01.js)
    const 기호 = "■";
    for( ; ; ) {
    }
    // 출력 예시 : ■■■■■■■■■■

    ans)
    const 기호 = "■";       
    let 값 = "";
    for( let i = 0 ; i < 10 ; i++ ) {
        값 += "■";     // 값 = 값 + "■"; 와 동일
    }
    console.log(값);

    // 문제 3 (251222/study02.js)
    const 기호 = "■";
    for( ; ; ) {
    }
    // 출력 예시 : 
    // ■
    // ■■
    // ■■■
    // ■■■■
    // ■■■■■
    // ■■■■■■
    // ■■■■■■■
    // ■■■■■■■■
    // ■■■■■■■■■
    // ■■■■■■■■■■

    ans)
    const 기호 = "■";
    let 값 = "";
    for( i = 0 ; i < 10 ; i ++ ) {
        값 += 기호;
        console.log(값);
    }

```
***
 ### 3. forEach 함수
```js
    // forEach 함수
    function event(값, 인덱스) {
    console.log(`배열 ${인덱스} : ${값}`);
    }  
    > undefined
    a.forEach(event);
    배열 0 : 1
    배열 1 : 2
    배열 2 : 3
    배열 3 : 4
    배열 4 : 5
```
***
### 4. if문 알아보기
```js
    // if문
    if(!true) {                         // ! : 반대 >> !true = false
    console.log("참");
    } else {
        console.log("거짓");
    }    > 거짓

    if(1 === 0) {
    console.log("참");
    } else {
        console.log("거짓");
    }    > 거짓
    
    if(1 == "1") {
        console.log("참");
    } else {
        console.log("거짓");
    }    > 참

    var a = 10;
    if(a > 0) {                 // > , >= , < , <= , %:나머지 , /
        console.log("참");
    } else {
        console.log("거짓");
    }

---
    (다음 셋 다 동일)
    
    for(let i = 0; i < 10; i++) {
        if(i % 2 === 0  && i !== 0) {    // || > or     &&  > and
        console.log(i);
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
    *continue는 반복문 안에서 "아래 코드는 무시하고, 즉시 다음 순번(다음 반복)으로 넘어가라!"는 명령입니다.
---
    // 문제 4 (251222/study04.js)     // 무제 4 (251222/study04.js/ OX 
    // OXO
    // OXOX
    // OXOXO
    // OXOXOX
    // OXOXOXO
    // OXOXOXOX
    // OXOXOXOXO
    let a = ""
    for( let i = 0 ; i < 9 ; i++ ) {
        if(i % 2 === 0) {
            a = a + "O"
        } else {
            a = a + "X"
        }
        console.log(a);
    };

    cf) (251222/study04_2.js)
    let 값 = "";
    const symbol1 = "☆";
    const symbol2 = "★";
    for( let i = 0 ; i < 9 ; i++ ) {
        값 = (i % 2 !== 0) ? 값 + symbol1 : 값 + symbol2;
        console.log(값);
    }
    >> (출력)
    ★
    ★☆
    ★☆★
    ★☆★☆
    ★☆★☆★
    ★☆★☆★☆
    ★☆★☆★☆★
    ★☆★☆★☆★☆
    ★☆★☆★☆★☆★

    * 삼항 연산자 분석코드의 핵심인 이 부분은 아래와 같은 의미입니다.
    값 = (조건) ? 참일_때_값 : 거짓일_때_값;조건: i % 2 !== 0 (i가 홀수인가?)
    참이면: 값 + symbol1 (기존 글자에 "☆"를 붙여라)
    거짓이면: 값 + symbol2 (기존 글자에 "★"를 붙여라)
---
```
---
### 5. continue 활용 문제
```js
    // 문제 5 (251222/study05.js)
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
        if(i % 2 == 0) continue;
        console.log(i);
    }
    
    // 5-2)
    for( let i = start; i <= end2; i++) {
        if(i % 3 == 0) continue;
        console.log(i);
    }
    
    // 5-3)
    for(const s of str) {
        if( s == "a") continue; 
        console.log(s);
    }
```

    









    
