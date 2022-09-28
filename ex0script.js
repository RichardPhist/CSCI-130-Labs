function first(){
    alert('It is my first example with JavaScript');
}

function choose(){
    let key = prompt('Choose between circle, rectangle, or square.')
    switch (key) {
        case "circle":
            let r = prompt('Enter the radius of the circle.');
            alert('Area of the circle is: '+circleArea(r)+' and perimeter is: '+circlePerim(r));
            break;
        
        case "rectangle":
            let h=prompt('Enter the height of the rectangle');
            let w=prompt('Enter the width of the rectangle');
            alert('Area of the rectangle is: '+rectArea(h,w)+' and perimeter is: '+rectPerim(h,w));
            break;
        
        case "square":
            let d=prompt('Enter the width of the square.')
            alert('Area of the square is: '+sqArea(d)+' and perimeter is: '+sqPerim(d));
            break;

        default:
            alert('Invalid input');
            break;
    }
}

function circleArea(r){
    return r*r*Math.PI;
}

function circlePerim(r){
    return 2*Math.PI*r;
}

function rectArea(h, w){
    return h*w;
}

function rectPerim(h, w){
    return (h*2) + (w*2);
}

function sqArea(d){
    return d*d;
}

function sqPerim(d){
    return d*4;
}