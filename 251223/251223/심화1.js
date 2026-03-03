const LandMineMap = [
    [0, 0, "X", 0, 0, 0],
    [0, 0, 0, 0, "X", 0],
    ["X", 0, 0, 0, 0, 0],
    [0, "X", 0, 0, 0, 0],
    [0, 0, 0, "X", "X", 0],
    [0, 0, 0, 0, 0, "X"]
];

const rows = LandMineMap.length;
const cols = LandMineMap[0].length;
let ResultMap = [];

for (let i = 0; i < rows; i++) {
    let rowContent = []; // 한 줄씩 새로 만듦
    for (let j = 0; j < cols; j++) {
        
        // 1. 만약 현재 칸이 지뢰라면?
        if (LandMineMap[i][j] === "X") {
            rowContent.push("X");
        } 
        // 2. 현재 칸이 지뢰가 아니라면 주변 8방향 검사
        else {
            let count = 0;
            
            // 주변 8방향을 위한 또 다른 이중 for문 (상대 좌표)
            for (let r = i - 1; r <= i + 1; r++) {
                for (let c = j - 1; c <= j + 1; c++) {
                    
                    // [중요 조건 체크!] 
                    // 1. r과 c가 배열의 인덱스 범위(0 ~ 5) 안에 있는가?
                    // 2. LandMineMap[r][c] 가 "X" 인가?
                    
                    // 이 조건을 만족하면 count++
                }
            }
            rowContent.push(count);
        }
    }
    ResultMap.push(rowContent);
}

// 최종 결과 확인
console.log(ResultMap); // console.log 대신 table을 쓰면 표 형태로 예쁘게 나와요!