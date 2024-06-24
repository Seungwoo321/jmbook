const filePath = require('path').join(__dirname, 'input');
const [n, ...arr] = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n');

function solution (str) {
    let it = 0;
    const reverse = () => {
        if (it === str.length) return
    
        let head = str[it++];
        if (head === 'b' || head === 'w') {
            return head;
        }
        const upperLeft = reverse(it);
        const upperRight = reverse(it);
        const lowerLeft = reverse(it);
        const lowerRight = reverse(it);        
        return 'x' + lowerLeft + lowerRight + upperLeft + upperRight
    }
    return reverse()
}

for (let i = 0; i < +n; i ++ ) {
    console.log(solution(arr[i]))
}