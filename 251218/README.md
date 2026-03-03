# 251218

# Bootstrap 5 클래스

    0: 0px
    1: 0.25rem (4px)
    2: 0.5rem (8px)
    3: 1rem (16px)
    4: 1.5rem (24px)
    5: 3rem (48px)

    padding (p*-*) // margin (m*-*)
    pt-3,Top (상),위쪽 패딩만 적용
    pb-3,Bottom (하),아래쪽 패딩만 적용
    ps-3,Start (좌),왼쪽 패딩만 적용 (LTR 기준)
    pe-3,End (우),오른쪽 패딩만 적용 (LTR 기준)
    py-3,Y-axis (상하),위아래 패딩 동시에 적용
    px-3,X-axis (좌우),양옆 패딩 동시에 적용

    기존 CSS 속성, Bootstrap 클래스,설명
    position: relative;, position-relative, 기준점이 되는 요소에 적용
    position: absolute;, position-absolute, 배치될 자식 요소에 적용
    width: 100%;, w-100, 너비를 부모의 100%로 설정
    left: 0; right: 0; bottom: 0;, start-0 end-0 bottom-0, 위치값을 0으로 고정
    z-index: 1;, z-1, Bootstrap 5.3부터 지원되는 z-index 클래스
    display: block;, d-block, 요소를 블록 레벨로 설정
    display: flex;, d-flex
    object-fit-cover
    flex-row (기본) / flex-column,"가로로 배치할지, 세로로 쌓을지 결정"
    ustify-content-start / center / between,"좌측, 중앙, 양끝 정렬 등 가로축 정렬"
    align-items-start / center / end,"상단, 중앙, 하단 등 세로축(수직) 정렬"
    flex-wrap / flex-nowrap,자식 요소가 넘칠 때 줄을 바꿀지 여부
    bottom: 16px;	bottom-0 mb-3	바닥 고정 후 아래 마진 추가
    left: 0px;	start-0	왼쪽 정렬
    text-transform: capitalize;	text-capitalize	단어 첫 글자 대문자

    Bootstrap 클래스로 분해해서 적용하기
    flex: 1 1 50%;는 순서대로 flex-grow, flex-shrink, flex-basis를 의미합니다.
    flex-grow: 1 > flex-grow-1 클래스 사용
    flex-shrink: 1 > flex-shrink-1 (기본값이 1이라 생략 가능
    )flex-basis: 50% > w-50 클래스로 대체 시도 즉, **class="flex-grow-1 w-50"**과 같이 조합하면 어느 정도 비슷한 동작을 합니다. 
    다만, w-50은 width: 50%를 강제하기 때문에 완전한 flex-basis와는 미세한 차이가 있을 수 있습니다.

    클래스,투명도 수치
    bg-dark <색과 같이 적용 
    bg-opacity-10,10% 투명도
    bg-opacity-25,25% 투명도
    bg-opacity-50,50% 투명도
    bg-opacity-75,75% 투명도
    bg-opacity-100,100% (불투명)

    클래스,CSS 속성,설명
    .fw-bold,font-weight: 700;,굵게
    .fw-semibold,font-weight: 600;,중간 굵기 (BS 5.2+ 추가)
    .fw-medium,font-weight: 500;,보통보다 약간 진함 (BS 5.3+ 추가)
    .fw-normal,font-weight: 400;,기본 굵기
    .fw-light,font-weight: 300;,가볍게
    .fw-lighter,lighter,부모보다 더 얇게

    클래스,크기 (브라우저 기본 기준),특징
    .fs-1,2.5rem (40px),가장 큰 크기
    .fs-2,2rem (32px),
    .fs-3,1.75rem (28px),
    .fs-4,1.5rem (24px),
    .fs-5,1.25rem (20px),
    .fs-6,1rem (16px),기본 텍스트 크기

    클래스,CSS 속성,설명
    .text-start,text-align: left;,왼쪽 정렬 (LTR 기준 시작점)
    .text-center,text-align: center;,가운데 정렬
    .text-end,text-align: right;,오른쪽 정렬 (LTR 기준 끝점)

    .align-baseline: 기준선에 맞춤
    .align-top: 상단 정렬
    .align-middle: 중앙 정렬
    .align-bottom: 하단 정렬

    .lh-1,line-height: 1 !important;,가장 좁은 간격 (제목 등에 사용)
    .lh-sm,line-height: 1.25 !important;,좁은 간격
    .lh-base,line-height: 1.5 !important;,기본 간격 (본문에 최적화)
    .lh-lg,line-height: 2 !important;,넓은 간격
 
## 그리드 예시
    https://www.w3schools.com/bootstrap5/bootstrap_grid_basic.php
            
