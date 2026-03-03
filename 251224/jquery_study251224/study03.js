$( function(){ 
let state = false;
    function draw() {
        var html = "";
        for( let i = 0; i < 25; i++ ) {
        html += `<div class="bg${ i === 6 ? '3' : i % 2 === 0 ? '2' : '1' }"></div>`;
        }
        
        // for (let i = 0; i < 25; i++) {
        //     let colorType;
            
        //     if (i === 6) {
        //         colorType = '3';
        //     } else {
        //         colorType = (i % 2 === 0) ? '2' : '1';
        //     }
            
        //     html += `<div class="bg${colorType}"></div>`;
        // }
        
        $( "section" ).html(html);
        state = true;
    }

    function erase() {
        $( "section" ).empty();
        state = false;       
    }

    $( "button" ).on( "click", function( e ) {
        console.log(e);
        const index = $( "button" ).index( e.target ); 
        if( index === 0 ) {
            draw(); 
            console.log( "draw" );
        } else if( index === 1 ) {
            erase(); 
            console.log( "erase" ); 
        } else if( index === 2 ) {
            if( !state ) {
                draw();
                console.log( "draw by OnOffSwitch" );
            }   else {
                erase();
                console.log( "erase by OnOffSwitch" );
            }
        }
    });
});