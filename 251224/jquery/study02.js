// function a(){               // 전역 함수
//     console.log("a");       
// }

// function fn(){
//     // jQuery 영역
//     console.log("fn()")
// }
// //function () {} callback(익명 함수)
// const f2 = () => {}         // arrow 함수

// $(fn);

// $(() => {
//     // jQuery 영역
//     console.log("study02.js");
//     function b(){           // 지역 함수 
//         console.log("b()"); // 출력 안 됨
//     }
// });

// $(function(){

//   // jQuery 영역
//     console.log("!!");
// });



let state = false;
$(document).ready(() => {               // 여기도 jQuery 영역


    function view1() {
        var html = "";

        for( let i = 0; i < 25; i++ ) {
        html += `<div class="bg${ i === 6 ? '3' : i % 2 === 0 ? '2' : '1' }"></div>`;
        }  
        
        // for( let i = 0; i < 25; i++ ) {
        //     let css = "1";
        //     if( i % 2 === 0 ) css = "2";
        //     html += `<div class="bg${ css }"></div>`;   
        // }

        $("section").html(html);
        state = true;
        console.log("draw");
    }
    
    function view2() {
        // document.getElementsByTagName("section")[0].innerHTML = "";
        $("section").empty();
        state = false;
        console.log("erase");        
    }

    $("button").click(function(e) {
        const index = $("button").index(e.target); 
        if( index === 0 ) {
            view1(); 
        } else if( index === 1 ) {
            view2(); 
        } else if( index === 2 ) {
            if(!state) view1();    
            else {
                // $("section").empty();
                // state = false;
                view2();
            }
        }
    });
});