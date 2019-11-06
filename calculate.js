//Lachlan Maclean BCPR280 Assignment 2
var fs = require('fs');
//Node Application that calculates correlation

//let x and y be the file inserted
var x = fs.readFileSync('testData/testData1.txt').toString('utf-8').split('\r\n');
var y = fs.readFileSync('testData/testData2.txt').toString('utf-8').split('\r\n');

//calculate n
let n = x.length;

//calculate x and y squared
let x2 = x.map(v => Math.pow(v,2));
let y2 = y.map(v => Math.pow(v,2));

//Calculate sigma x and y. The sum of the arrays
let sumx = 0;
for (i in x){
    sumx = sumx + parseFloat(x[i]);
}

let sumy = 0;
for (i in y){
    sumy = sumy + parseFloat(y[i]);
}

//calculate average of x
let avgx = 0;
avgx = sumx / x.length;

let avgy = 0;
avgy = sumy / y.length;

//calculate xy. x * y
let xy = [];
for (var i = 0; i < x.length; i++)
{
    xy.push(x[i]*y[i])
}

//calculate sumxy
let sumxy = 0;
for (i in xy){
    sumxy = sumxy + parseFloat(xy[i]);
}
//calculate sumx2
let sumx2 = 0;
for (i in x2){
    sumx2 = sumx2 + parseFloat(x2[i]);
}
//calculate sumy2
let sumy2 = 0;
for (i in y2){
    sumy2 = sumy2 + parseFloat(y2[i]);
}
function correlation(){
    var r = (n*(sumxy) - (sumx)*(sumy))/Math.sqrt((n*sumx2-(sumx*sumx))*(n*sumy2-(sumy*sumy)));
    return r
}

function regression(){
    var b1 = (sumxy - (n * avgx * avgy))/(sumx2-(n * avgx * avgx));
    var b2 = avgy - (b1 * avgx);

    y = 'y = ' + b1 + 'X + ' + b2;
    return y;
}
console.log(correlation());
console.log(regression());
