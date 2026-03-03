# 251216

# iframe 알아보기 study_04
구글 지도, 유튜브, 웹 페이지...

 
# 선택자 study_06
	동일한 대상이면 마지막 설정된 값으로 설정 됨
	href 속성 이름 
```html
		선택자 : 태그, 아이디, 클래스
		============================================
		= 전체 일치
		^= 시작하는 
		$= 끝나는
		*= 일부 문자 (단어 중 일부 문자)
		~= 단어 일치 
		============================================ 
		
		사용 예시) a[href^="https"] {background-color: purple; color:#fff;}

	/* 방문하지않은 link */
		a:link{
			color:#0f0;
			text-decoration: none;
		}
		/* 방문한 link */
		a:visited{
			color: #ddd;
		}
		/* 마우스를 올려 놨을 때 */
		a:hover{
			color: #f00;
			text-decoration: underline;
		}
		/* 클릭했을 때 */
		a:active{
			color: #00f;
		}
		/* 탭키 */
		a:focus{
			background-color: #ff0;
		}
     /* 플롯 해제 할 때 주로 사용 */
  	h1::before {
			content: "이전";
			color: red;
		}
		h1::after {
			content: "이후";
			color: blue;
		}
    /* 첫번째 글자 */
    	p::first-letter {
			font-size: 2em;
			font-weight: bold;
			color: navy;
		}
    /* 첫 줄 */
		div::first-line {
			color: red;
			background-color: yellow;
		}
    /* 드래그 했을 때 */
    div::selection {
			background-color: gray;
			color: blue;
		} 
```

# 폰트 알아보기 study_07
	rcolor: #ff0000;
	color: #f00;
	color: red;
	color: #03c75a;
	color: #03c75aa2;
	16진수 코드에 투명도(AA) 추가하기 : 일반적인 16진수 코드는 6자리로 $\text{RGB}$ 세 가지 색상 정보를 나타냅니다.
	$$\text{RRGGBB}$$여기에 투명도 속성을 추가하려면 두 자리를 더 붙여 총 8자리로 만들어 줍니다.
	$00$ (완전 투명)부터 $FF$ (완전 불투명)까지의 16진수 값으로 투명도를 표현합니다.
	color: rgb(0, 255, 0);
	color: rgba(0, 0, 255, 0.1);
			
	[alpha : 색 불투명도]
			0.0     ~     1.0
		완전 투명     완전 불투명
				
	[hsl(색, 채도, 명도)]=================================
	* 색  : 0~360 사이의 색상환 각도
			: 0-빨간색, 120-녹색, 240-파란색
	* 채도: 색의 강도, 선명도, 쨍한 정도,
			채도가 낮으면 탁하고(회색) 높으면 선명(풀 컬러)
			: [백분율 값] 0% - 회색 음영, 100% - 풀 컬러
	* 명도: 빛의 밝기, 높은 명도는 흰색이고 낮은 명도 검정
			: [백분율 값] 0% - 검정, 50% - 밝거나 어둡지 않음, 100% - 흰색
	======================================================
	
		[단위]
		절대값 단위(인쇄용)     : cm, mm, pt(포인트), pc(파이카)
		상대값 단위(웹, 스크린) : px(1픽셀을 1로 하는 단위),
								em(~배, 상위 요소 기준),
								rem(~배, 최상위 요소[html] 기준, HTML5 추가)
								%(비율, 상위 요소 기준)

		예시)
		html{
			font-size: 10px;
		}
		body {
			/* font-size: 2em; */
			font-size: 20px;
		}
		p {
			font-size: 1.5rem;
		}	

		CSS 속성,설명,예시 값
	font-size,"글꼴의 크기를 설정합니다. em, px, %, rem 등 다양한 단위가 사용될 수 있습니다.",2em
	font-family,"적용할 글꼴의 종류를 지정합니다. 여러 글꼴을 쉼표(,)로 구분하여 나열할 수 있으며, 앞에서부터 순서대로 적용을 시도합니다.","serif, sans-serif"
	font-weight,"글꼴의 굵기를 설정합니다. bold (굵게), normal (보통) 또는 100부터 900까지의 숫자로 지정할 수 있습니다.",bold
	font-style,"글꼴의 스타일을 설정합니다. italic (기울임), normal (보통), oblique (기울임) 등이 있습니다.",italic
	font-variant,글꼴의 변형을 설정합니다. small-caps는 작은 대문자로 글자를 표시합니다. (모든 소문자를 작은 크기의 대문자로 변환),small-caps
	line-height,줄의 높이를 설정합니다. 행과 행 사이의 간격을 조절합니다.,2em

		1em = 16px (일반적)
		1vw = 1%
		font-size: 5vw; 화면의 5%크기로 창 크기 드래그하면 글자 크기가 변함.
		
		/*	폰트 가져오기 */
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Black+Han+Sans&family=Dokdo&display=swap" rel="stylesheet">
		<style>
		/* @import url('https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Black+Han+Sans&family=Dokdo&display=swap'); */
		body { 	font-family : "Black And White Picture", sans-serif }
		</style>

		
# 영역 알아보기 study_12
```html
		[overflow]
		visible - Default. The overflow is not clipped. The content renders outside the element's box
		hidden - The overflow is clipped, and the rest of the content is hidden
		scroll - Scrollbars are added. User must scroll to see all content
		auto - Similar to scroll, but adds scrollbars only when necessary
		ex) overflow: scroll;
		
		[position] ==========================================
		static | relative | absoulte | fixed | sticky

		1) static
		- 원래 자기 자리
		- top, left 등 인식 안 됨 : 위치 이동 안 됨

		2) relative
		- 기존 영역 그대로 인식
		- 원래 자기 위치에서 이동
		- 즉, static 기준으로 이동

		3) absoulate
		- 기존 영역 인식 안 함
		- 상위 엘리먼트 기준으로 이동
		- static인 상위 엘리먼트 제외
		- 상위 엘리먼트가 body 일 경우, 웹 브라우저 기준

		4) fixed
		- absoulate 와 비슷
		- 화면이 스크롤 되어도 그 위치 그대로
		- 무조건 웹 브라우저 기준
		=====================================================
```
		





    
