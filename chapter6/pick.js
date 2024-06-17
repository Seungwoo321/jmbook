
function pick(n, picked, toPick) {
    if (toPick === 0) {
        console.log(picked);
        return;
    }
    let smallest = picked.length ? picked[picked.length - 1] + 1 : 0;
    for (let next = smallest; next < n; next ++) {
        picked.push(next)
        pick(n, picked, toPick - 1);
        picked.pop();
    }
}

console.log(pick(5, [], 3));

function combination (arr, r, depth, tmp) {
    if (r === 0) {
        console.log(tmp)
        return;
    }

    for (let i = depth; i < arr.length; i ++) {
        tmp.push(arr[i]);
        combination(arr, r - 1, i + 1, tmp);
        tmp.pop();
    }
}

console.log(combination([0, 1, 2, 3, 4], 3, 0, []));