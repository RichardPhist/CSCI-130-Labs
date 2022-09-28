function run(){
    const arr=[5,4,8,10,25,13,2,7,2,23,11,32];
    for(let x of arr){
        document.write(x);
        document.write('\n');
    }
    document.write(<input type="text">Average of the array</input>)
}

function mean(arr){ //finds average
    let sum = 0
    for(let x of arr){
        sum=sum+x;
    }
    return sum/arr.length;
}

function stddev(arr){ //finds standard deviation
    let sum = 0;
    for(let x of arr){
        sum += (x - mean(arr)) * (x - mean(arr))
    }
    return Math.sqrt(sum/(arr.length));
}

