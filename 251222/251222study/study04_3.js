let b = ""
for( let i = 0 ; i < 9 ; i++ ) {
    if(i % 2 === 0) {
        b += "O";
    } else {
        b += "X";
        continue;
    }
    console.log(b);
};
