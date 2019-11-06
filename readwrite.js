//Lachlan Maclean BCPR280 Assignment 2
var fs = require('fs');
//Node Application that reads and writes to file.txt
function readTheFile(){
    var readText = fs.readFileSync('file.txt', 'utf8');
    return readText;
}

function write(animal){
    var writeText = fs.writeFile('file.txt', animal, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
function main(){
    console.log(readTheFile() + ' found');
    if (readTheFile() == 'dog'){
        write('cat')
    }
    else if(readTheFile() == 'cat'){
        write('dog')
    }
}
main();

