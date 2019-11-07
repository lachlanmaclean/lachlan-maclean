//Lachlan Maclean BCPR280 Assignment 2
//Node Application that calculates correlation

//let x and y be the file inserted
//const x = fs.readFileSync('testData/testData1.txt').toString('utf-8').split('\r\n');
//const y = fs.readFileSync('testData/testData2.txt').toString('utf-8').split('\r\n');

//calculate n
//calculate(x,y);
function calculate(x,y) {

    let n = x.length;

//calculate x^2 and y^2
    let x2 = x.map(v => Math.pow(v, 2));
    let y2 = y.map(v => Math.pow(v, 2));

//Calculate signma x
    let sumx = 0;
    for (i in x) {
        sumx = sumx + parseFloat(x[i]);
    }
//Calculate signma y
    let sumy = 0;
    for (i in y) {
        sumy = sumy + parseFloat(y[i]);
    }

//calculate average of x
    let avgx = 0;
    avgx = sumx / x.length;
//Calculate average of y
    let avgy = 0;
    avgy = sumy / y.length;

//calculate x * y
    let xy = [];
    for (var i = 0; i < x.length; i++) {
        xy.push(x[i] * y[i])
    }

//calculate sigma xy
    let sumxy = 0;
    for (i in xy) {
        sumxy = sumxy + parseFloat(xy[i]);
    }
//calculate sigma x^2
    let sumx2 = 0;
    for (i in x2) {
        sumx2 = sumx2 + parseFloat(x2[i]);
    }
//calculate sigma y^2
    let sumy2 = 0;
    for (i in y2) {
        sumy2 = sumy2 + parseFloat(y2[i]);
    }

//correlation forumla

    var r = (n * (sumxy) - (sumx) * (sumy)) / Math.sqrt((n * sumx2 - (sumx * sumx)) * (n * sumy2 - (sumy * sumy)));

    result = 'Correlation: ' + r + " <br><br>";
    console.log(result);

//regression formula.

    //Calculating beta1 and beta2
    var b1 = (sumxy - (n * avgx * avgy)) / (sumx2 - (n * avgx * avgx));
    var b2 = avgy - (b1 * avgx);
    //calculating y linear regression
    y = 'y = ' + b1 + 'X + ' + b2;

    result += 'Regression Equation: ' + y;
    console.log(result);
    return result;
}
module.exports = calculate;
