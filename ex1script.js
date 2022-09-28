function check(value){
    alert('The type of: '+value+' is '+typeof(value)+'.');
}

function run(){
    const arr=[
        "" + 1 + 0
        ,"" - 1 + 0 
        ,true + false 
        ,6 / "3" 
        ,"2" * "3" 
        ,4 + 5 + "px" 
        ,"$" + 4 + 5 
        ,"4" - 2 
        ,"4px" - 2 
        ,7 / 0 
        ,"  -9\n" + 5 //considered a string
        ,"  -9\n" - 5 //considered a number because it does the arithmetic
        ,null + 1 
        ,undefined + 1 
    ];
    
    for(let value of arr){
        check(value);
    }
}