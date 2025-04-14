let endgameEl = document.getElementById("endgame-el")
let countEl = document.getElementById("count-el")
let count = 0

function addpoint() {
    count += 1
    countEl.textContent = count
}

function endgame() {
    let countStr = count + " - "
    endgameEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
