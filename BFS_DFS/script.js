function runBFS() {
  const graph = JSON.parse(document.getElementById('graphInput').value);
  const start = parseInt(document.getElementById('startNode').value);
  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      const neighbors = graph[node] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  document.getElementById('result').innerText = `BFS Traversal: ${result.join(' → ')}`;
}

function runDFS() {
  const graph = JSON.parse(document.getElementById('graphInput').value);
  const start = parseInt(document.getElementById('startNode').value);
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      const neighbors = graph[node] || [];
      for (const neighbor of neighbors) {
        dfs(neighbor);
      }
    }
  }

  dfs(start);
  document.getElementById('result').innerText = `DFS Traversal: ${result.join(' → ')}`;
}
