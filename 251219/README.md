# 251219

## 메인(index.html) 페이지 만들기
    UI repository에 index.html 만들기

## 자바스크립트 알아보기
    WEB_STUDY-main\frontend\html\ study13~16	
	Docs-main\javascript\readme.md
	https://www.w3schools.com/js/
	
	js의 역사
	ECMAScript 6 (2015) 주요 업데이트
	- let / const 블록 범위 변수 선언
	기존 var는 함수 스코프 → 예측 어려움
	ES6부터는 블록 단위 스코프 지원
	- ES6+의 변화 요약
	변화				의미
	최신 문법 도입		코드 가독성 향상
	비동기 처리 개선		서버 통신 시 효율↑
	모듈화 지원			규모가 큰 앱 구조화
	네이티브 API 확장	프레임워크 없이도 강력한 개발 가능

	WEB_STUDY-main\frontend\html\ study13~16 학습 후 WEB_STUDY-main\frontend\html\ node, react 학습 예정


### 1. script tag 이용하기
	study01
	
    // 한 줄 주석
    /*
    여러 줄 주석
    */
    var num = 100;  
    document.write("안녕~");
    document.write(num);
    document.write("종료");

### 2. 자료형
	study02
	
    [기본 타입] Primitive Type
	- number    : 숫자(정수, 실수)
	- bigint    : 정수 -(2의 53승 -1) ~ 2의 53승-1
	- string    : 문자열
	- boolean   : 논리값(true, false)
	- undefined : 초기화되지 않은 상태, 변수 초기화에 사용
	- null      : 객체 변수 초기화 사용
	- NaN       : Not a Number

	[참조 타입] 참조형, Reference Type
	- array
	- function
	- ...
	
	[변수선언]
	- var 변수명;
	변수에는 숫자 외에 어떤 것도 담을 수 있다.

	5 == 5 : true
	5 == "5" : true
	5 === "5" : false // 왼쪽은 숫자, 오른쪽은 문자열
	=가 2개면 값만 비교
	=가 3개면 값과 타입까지 비교 

	-typeof : 자바스크립트에서 변수나 값의 데이터 타입(형식)을 확인하고 싶을 때 사용하는 연산자
	typeof null 은 object로 나옴

	
	- 자바스크립트에서 숫자 뒤에 n을 붙이면 BigInt 타입이 됩니다.
	Number: 일반적인 숫자 타입 (약 9000조 이상의 큰 수는 정확히 표현 못 함)
	BigInt: 아주 큰 정수를 오차 없이 표현하기 위한 타입
	
	document.write() 함수는 괄호 안에 들어온 값을 웹 페이지에 출력하기 위해 내부적으로 문자열 변환(String Conversion) 과정을 거칩니다.
	BigInt 값인 (예시로)5n을 문자열로 변환하면, 프로그래밍 코드상의 구분자인 n을 떼어내고 숫자 부분만 문자열로 만듭니다.

### 3. 문자열
	study03,04
	
	* 템플릿 리터럴 : 백틱 사용
    : 이중 따옴표나 작은 따옴표 대신 백틱(`)을 사용해서 표현
    : 작은 따옴표와 혼동할 수 있으나, 백틱은 일반적으로 키보드 tab 키 위에 있음
    : 플래이스 홀더를 이용한 ${expression}으로 표현식 사용

| 특징 | 일반 따옴표 (' ', " ") | 백틱 (` `) |
| :--- | :--- | :--- |
| **줄바꿈** | `\n` 사용 필수 | 엔터키로 바로 가능 |
| **변수 결합** | `+` 연산자 사용 (복잡함) | `${variable}` (간결함) |
| **가독성** | 낮음 (코드가 지저분해짐) | 높음 (한 문장으로 보임) |

```js
	const today = "Good~";
	
	// 문자열 길이
    console.log('문자열 길이 :', today.length)
    
    // 특정 문자 변경
    console.log(today.replace('o', 'ap-'))		// 일치하는 첫 번째만 변경
    console.log(today.replaceAll('o', 'ap-'))	// 일치하는 모두 변경
    
    // 특정 위치의 문자 추출
    // 1. 문자열.substring(시작 인덱스, 끝 인덱스)
    // : 끝 인덱스 제외
    // : 인덱스는 0부터 세어짐
	// const today = "Good~";
    console.log(today.substring(1, 4)) > ood
	today.length > 5
	    
    // 2. 문자열.slice(시작 인덱스, 끝 인덱스)
    console.log(today.slice(1, 5))	
    console.log(today.slice(1))		처음부터 1 위치
    console.log(today.slice(-4))	끝에서부터 -4 위치
	> 셋다 동일하게 ood~ 출력 됨
		cf) console.log(today.slice(0, -1)); 	인덱스0 부터 마지막인덱스-1 까지 

    
    // 특정 문자 기준으로 분리(쪼개기)
    // : 배열로 리턴
    // : 기준으로 사용된 문자는 요소에 없음
    // const today = "Good~";
    today.split('d')	['Goo', '~']
	today.split('o')	['G', '', 'd~']
	today.split('~')	['Good', '']

	var a = "가나다가나다가나다";
	var b = a.split('');b
	(9) [ '가', '나', '다', '가', '나', '다']
	
    // 특정 문자 추가
    // 문법 : 문자열.padStart(문자열 전체 길이, '추가할 문자')
    // const today = 'Good~' ;
    console.log(today.padStart(10, '*'))
    // 문법 : 문자열.padEnd(문자열 전체 길이, '추가할 문자')
    console.log(today.padEnd(10, '*'))

	today.padStart(10,'*ab')	*ab*aGood~
	today.padEnd(10,'*ab')		Good~*ab*a
	today.padEnd(4,'*')			Good~
```
	
| 특징 | 설명 |
| :--- | :--- |
| 원본 유지 | 기존 문자열을 바꾸지 않고, 채워진 새로운 문자열을 반환합니다. |
| 이미 충분히 길다면 | 목표 길이가 현재 문자열 길이보다 작거나 같으면, 아무것도 채우지 않고 원본을 그대로 반환합니다. |
| 채울 문자 생략 | 두 번째 인자를 생략하면 기본적으로 공백(" ")으로 채워집니다. |

```js
    // 특정 문자 찾기 : true/false
    console.log(today.includes('d'))	true	
    console.log(today.includes('Go'))	true	
    console.log(today.includes('go'))	false	// 대소문자 구분됨

    // 특정 문자의 위치(index) 리턴
    // - 있음 : 탐색된 첫 번째 문자의 인덱스 리턴
    // - 없음 : -1 리턴
    // const today = 'Good~';
    console.log(today.indexOf('o'))		1
    console.log(today.indexOf('Go'))	0
    console.log(today.indexOf('h'))		-1

    // 반복
    console.log(today.repeat(3))
    console.log('안녕'.repeat(3))

    // 대소문자 변경
    console.log(today.toUpperCase())
    console.log(today.toLowerCase())

    // 공백 제거
    const say = '  Hi~  ';
    console.log(say);
    console.log('|'+say+'|');
    console.log('|'+say.trimStart()+'|');		// 왼쪽 공백 제거
    console.log('|'+say.trimEnd()+'|');			 // 오른쪽 공백 제거
    console.log('|'+say.trim()+'|');			 // 양쪽 공백 제거

	say.replaceAll(" ","") 과 비교하여 trim의 존재 이유? 띄어쓰기 또한 삭제하므로 trim 기능 이용 시 양 공백만 제거 가능
```
	

			
	
				











    
