const filePath = require('path').join(__dirname, 'input');
const [testCase, ...input] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution () {

}

while (--testCase) {
    const pattern = input.shift();
    const fileSize = +input.shift();
    for (let i = 0; i < fileSize; i ++) {
        
    }
}