
const n = 4
const dist = [
        [0, 10, 15, 20],
        [5, 0, 9, 10],
        [6, 13, 0, 12],
        [8, 8, 9, 0]
    ]

function shortestPath(path, visited, currentLength) {
    if (path.length === n) {
        return currentLength + dist[path[0]][path.length - 1];
    }
    let result = Infinity;
    for (let next = 0; next < n; next ++) {
        if (visited[next]) continue;
        let here = path[path.length - 1];
        path.push(next);
        visited[next] = true;
        const cand = shortestPath(path, visited, currentLength + dist[here][next]);
        result = Math.min(result, cand);
        visited[next] = false;
        path.pop();
    }
    return result
}

console.log(shortestPath([1], new Array(n).fill(0), dist[0][1]));