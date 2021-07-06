let canvas = document.getElementById("artCanvas");
canvas.width = 1000;
canvas.height = 1000;
let ctx = canvas.getContext("2d");

var n = 0;

color = {
    red:255,
    blue:0,
    green:0,
};

function numToHex(num) {
    HexString ="";
    HexString += num.toString(16)
    while (HexString.length < 2) {
        HexString = "0" + HexString;
    }
    return HexString;
}

function rgbToHex(r, g, b){
    
    color = "";
    color += numToHex(parseInt(r, 10));
    color += numToHex(parseInt(g, 10));
    color += numToHex(parseInt(b, 10));
    return '#'+color;
}

var r = 255;
var g = 0;
var b = 0;

function doThis(){
    n+=1;

    // r = Math.abs(r+(1-(2*r/255))*Math.random());
    // g = Math.abs(g+(1-(2*g/255))*Math.random());
    // b = Math.abs(b+(1-(2*b/255))*Math.random());

    //  r += 6*Math.random()-3;
    //  g += 6*Math.random()-3;
    //  b += 6*Math.random()-3;


     r = 255*(190 - Math.abs(190*Math.sin(n*2*Math.PI/360 /15)))/190;
     g = 255*(180 - Math.abs(190*Math.sin(n*2*Math.PI/360 /14.5)))/180;
     b = 255*(170 - Math.abs(170*Math.sin(n*2*Math.PI/360 /14)))/170;

    ctx.beginPath();
    ctx.fillStyle = rgbToHex(r, g, b);
    x = 300+/*30*Math.cos(n*2*Math.PI/360)+*/190*Math.sin(n*2*Math.PI/360 /15);
    y = 300+/*30*Math.sin(n*2*Math.PI/360)+*/170*Math.sin(n*2*Math.PI/360 /14);
    ctx.arc(x, y, 4, 0, 2 * Math.PI);
    ctx.fill();
}

setInterval(doThis, 0);