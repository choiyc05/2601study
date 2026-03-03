console.log("스터디01");
let state = false;

function f1() {
    for( let i = 1; i<= 10; i++ ) {
        console.log(`인덱스 : ${i}`);
    }
}
function load() {
    var html = "";

    // 반복문 예시1
    // for( let i = 0; i < 25; i++ ) {
    //     html += `<div class="bg${ i % 2 === 0 ? '2' : '1' }"></div>`;
    //     } 
    
    // 특정 칸에만 bg3 적용하기
    for( let i = 0; i < 25; i++ ) {
        html += `<div class="bg${ i === 6 ? '3' : i % 2 === 0 ? '2' : '1' }"></div>`;
        }    

    // 반복문 예시2
    // for( let i = 0; i < 25; i++) {
    //     let css = "1";
    //     if( i % 2 === 0 ) css = "2";
    //     html += `<div class="bg${ css }"></div>`;   
    // } ;

    // 반복문 예시2 + 특정 칸에만 bg3 적용하기
    // for( let i = 0; i < 25; i++) {
    //     let css = "1";
    //     if( i % 2 === 0 ) css = "2";
    //     if( i == '6' ) css = "3";
    //     html += `<div class="bg${ css }"></div>`;   
    // } ;

    
    document.getElementsByTagName("section")[0].innerHTML = html;
    state = true;
    console.log("load()");
}

function clean() {
    // html = "";
    // document.getElementsByTagName("section")[0].innerHTML = html; // 내 생각대로 한 첫 시도
    document.getElementsByTagName("section")[0].innerHTML = "";
    state = false;
    console.log("clean()");
}

function btntoggle() {
    if( !state ) {
        load();
        state = true;
    }   else {
        clean();
        state = false;
    }
}