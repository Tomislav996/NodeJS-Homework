
/*
for(let i = 0; i <= 3; i++){
    for(let j = 0; j < i; j++){
        console.log(" ");
    }
    console.log(i);
}


for ( j = 0; j < 3; j++) {
    for ( i = 0; i < 10; i++ ) {    // nested loop
       console.log("Hello world")
    }
}
*/


function showStars(rows){
    for(let row = 1; row <= rows; row++){
        let pattern = "";
        for(let i = 0; i< row; i++)
            pattern += `*`
        
        console.log(pattern)
    }
}

showStars(5);

