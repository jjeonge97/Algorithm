function solution(n, computers) {
    let answer = 0;
    let visited = Array.from({length:n}, () => 0);
    console.log(visited) // [0,0,0]
    
    function dfs(node){
        visited[node] = 1; // 방문했으니까 1
        for(let i = 0; i < n; i++) { // 컴퓨터의 개수 n까지 
            if(computers[node][i] && !visited[i]) dfs(i)
        }
    } 
    
    for(let i = 0; i < n; i++) {
        if(!visited[i]) { // 방문하지 않았으면
            dfs(i) // 방문
            answer++ // 방문하면 횟수 + 1
        }
    }
    

    
    return answer;
}