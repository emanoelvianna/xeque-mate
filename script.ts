const pecaUrl = 'bispo-preta.png';

for (let i = 1; i <= 8; i++) {
    let columns = [];
    for (let j = 1; j <= 8; j++) {
        columns.push(j);
    }
    console.log(columns);
}

let img = document.createElement('img');
img.src = pecaUrl;
document.getElementById('chessTable').appendChild(img);