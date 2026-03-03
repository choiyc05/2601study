# 251215

#html 기본 형식
<!-- 문서 형식을 HTML5로 선언 -->
	<!DOCTYPE html> 

<!-- 문서의 언어를 한국어로 설정 -->
	<html lang="ko"> 

	<head> <!-- 문서의 메타데이터가 들어가는 head 영역 / 문서의 설정 부분 -->

	<!-- 문자의 인코딩 방식을 UTF-8로 설정 -->
	<meta charset="UTF-8"> 

	<!-- 반응형 웹을 위한 뷰포트 설정 -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- 문서에 대한 설명 -->
	<meta name = "description" content="하이미디어">

	<!-- 문서의 주요 키워드 -->
	<meta name = "keywords" content="HTML, CSS, JavaScript">
	
	<!-- 문서 작성자 정보 -->
	<meta name = "author" content="홍길동">

	<!-- IE 브라우저 호환성 설정 -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<!-- index : 현재 페이지, follow: 연결 페이지, all : 현재 페이지, 연결 페이지 모두 허용 -->
  	<meta name="robots" content="index,follow">

	<!-- 브라우저 탭에 표시될 문서 제목 -->
	<title>Document</title>

 	<ol>
	    <li><a>순서 표시</a></li>   
	    <li>1,2,3,4,5,...</li>
	</ol>
	</head>

	<body><!-- 실제 화면에 보이는 내용을 담는 body 영역 -->

		<h1>HTML5 기본 문서 구조</h1>
		<p>이것은 HTML5 기본 문서 구조 예제입니다.</p>	
		
	</body>

	</html> <!-- HTML 문서 종료 -->

# 기본 페이지 개념
	.../index.html > 기본 사이트 의미
	예시)	.../WEB_STUDY-main/WEB_STUDY-main/frontend/html/study01/
			.../WEB_STUDY-main/WEB_STUDY-main/frontend/html/study01/index.html 
			>> 동일한 페이지 열림

# 폼 알아보기 (study03)
	1. input
		form
	method 선택 방법
	get 방식 : 단순 화면 띄우기 / post 방식 : 민감한 정보 포함
	
	label
	input과 같이 묶어 종종 사용됨
	label for 이름과 input id와 동일하게 설정
	ex) <label for="userID"> </label>
		<input ...... id="userID">
	
	2. radio, checkbox, select, textarea
	radio : 하나만 선택 / checkbox : 여러 개 선택 가능
	select : 항목들 중 선택 / textarea : 비교적 장문의 글 입력 가능
	
	span 태그 특정
	아무런 의미가 없는 태그 (Non-Semantic)
	인라인 요소 (Inline Element)

# web server
	- 웹 서버의 종류 
	아파치 HTTP 서버 (Apache HTTP Server): 가장 오래되고 널리 사용되는 오픈소스 웹 서버로, 높은 안정성과 다양한 모듈 확장이 장점입니다.
	과거 많이 이용됨
	Nginx (엔진엑스): 고성능, 저메모리 사용으로 유명하며, 정적 콘텐츠 제공뿐 아니라 리버스 프록시, 로드 밸런싱, 캐싱 등에도 활용됩니다.
	Microsoft IIS (Internet Information Services): 마이크로소프트에서 개발한 웹 서버로, Windows 환경에서 강력한 성능과 통합을 제공합니다.
	
	Nginx
	
	- 웹 서버와 WAS의 관계
	웹 서버 (Web Server): HTML, CSS, 이미지 같은 정적 콘텐츠를 클라이언트에 제공하는 데 특화되어 있습니다 (예: Apache, Nginx).
	웹 애플리케이션 서버 (WAS, Web Application Server): 동적 콘텐츠를 생성하고 비즈니스 로직을 처리하는 서버로, 웹 서버와 함께 사용되기도 합니다 (예: Tomcat, JEUS).
	   
# docker
	- docker desktop 프로그램 설치 <br/>
	https://hub.docker.com/ 접속 > nginx 검색 > docker pull nginx:latest 다운 > VSC에서 이미지 확인 및 실행


