# 251226

 ## node.js 
    web_study/frontend/node/
    node.js 다운

    - 초기화
    npm init -y

    - 한 번 실행
    npm run

    - nodemon 설치
    npm i nodemon (패키지 설치)
    > 폴더 내에 node_modules 폴더 생성 > 프로젝트 내에 포함 /

    - npm i
    "dependencies": {
    "nodemon": "^3.1.11"
    }
    확인하여 설치 
    => node_modules는 github 등에 올려서 이동할 필요 없음
    => npm run dev > 실행 파일 감시(watch)하며 자동으로 프로그램 재실행 / ctrl + c 2번하여 종료 가능
    실행 중이면 작업 관리자에 Node.js JavaScript Runtime 표시됨 / 종료 가능

    - 다른 파일에서 보내기/가져오기 [cjs 문법]
    (가져갈 파일) module.exports = { * .... };
    (가져올 파일) require("./***.js");

    <img width="1272" height="597" alt="image" src="https://github.com/user-attachments/assets/1c2b7961-27f1-4a31-a2ac-9448424e6ca6" />

    사진 내용 index.js 적용 시 package.json 파일의 type을 commonjs > module로 변경해야 esm문법으로 변경되어 제대로 적용됨

  ## git 연결 
    Docs/git/README.md 참고

    cd (폴더명) : (폴더명)으로 이동
    cd ..  : 상위 디렉토리 이동
    rmdir /s /q (폴더명) : 폴더 삭제
    


    
    

    
