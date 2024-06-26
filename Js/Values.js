p1 = [[[], [], [], [], [], [], [], [], []], []]
p2 = [[[], [], [], [], [], [], [], [], []], []]
games = [[0, ['A', '1'], false], [0, ['A', '2'], false], [0, ['A', '3'], false], [0, ['B', '1'], false], [0, ['B', '2'], false], [0, ['B', '3'], false], [0, ['C', '1'], false], [0, ['C', '2'], false], [0, ['C', '3'], false]]
gamesfilled = 0
sym = 'o'
won = false
target = 10
pos = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
hit = 10
firstTurn = '4'
rules = false
const Myhtml = document.getElementById('body').innerHTML

function Turns(par) {
    games[par][0]++
    if (games[par][0] === 9) {
        gamesfilled++
        games[par][2] = !games[par][2]
        document.getElementById(pos[par]).classList.add('hidden')
        document.getElementById('B' + pos[par]).classList.add('target')
        document.getElementById('B' + pos[par]).innerHTML = 'd'
        document.getElementById('B' + pos[par]).classList.add('txt')
    }
    if (won === true) {
        document.getElementById('endcard').innerHTML = sym + ' is the winner'
        document.getElementById('endcard').classList.add(sym)
        document.getElementById('endcard').classList.remove('going')
        document.getElementById('screenfade').classList.remove('going')
    } else if (gamesfilled === 9 && won === false) {
        sym = 't'
        document.getElementById('endcard').innerHTML = "It's a draw"
        document.getElementById('endcard').classList.add(sym)
        document.getElementById('endcard').classList.remove('going')
        document.getElementById('screenfade').classList.remove('going')
    } else {
        flipTurn()
    }
    if (games[target][2] === true) {
        target = 10
    }
}

function flipTurn() {
    if (sym === 'o') {
        sym = 'x'
    } else {
        sym = 'o'
    }
}

function Placement(par, let, val) {
    let square = document.getElementById(par + let + val)
    if (firstTurn !== par) {
        if (square.innerHTML === '' && won === false && games[par][2] === false && rules === false) {
            if (target == par || target == 10) {
                firstTurn = '10'
                posLoop:
                for (let index = 0; index < pos.length; index++) {
                    if (pos[index] === let + val) {
                        target = index
                        break posLoop
                    }
                }
                square.innerHTML = sym
                square.classList.add(sym)

                player = p2
                if (sym === 'o') {
                    player = p1
                }

                player[0][par].push(let)
                player[0][par].push(val)

                if (let + val === 'B2') {
                    player[0][par].push('S')
                    player[0][par].push('L')
                } else if (let + val === 'A1' || let + val === 'C3') {
                    player[0][par].push('L')
                } else if (let + val === 'A3' || let + val === 'C1') {
                    player[0][par].push('S')
                }

                outerLoop:
                for (let index = 0; index < player[0][par].length; index++) {
                    subject = player[0][par][index]
                    let count = 0

                    for (let dindex = 0; dindex < player[0][par].length; dindex++) {
                        if (subject === player[0][par][dindex]) {
                            count++
                        }
                        if (count === 3) {
                            games[par][2] = !games[par][2]
                            document.getElementById(pos[par]).classList.add('hidden')
                            document.getElementById('B' + pos[par]).classList.add('b' + sym)
                            document.getElementById('B' + pos[par]).innerHTML = sym
                            document.getElementById('B' + pos[par]).classList.add('txt')
                            bitWinCheck(par, player)
                            break outerLoop
                        }
                    }
                }
                Turns(par)
                newTarget(let, val)
            }
        }
    }
}

function bitWinCheck(par, player) {
    gamesfilled++

    player[1].push(games[par][1][0])
    player[1].push(games[par][1][1])
    if (games[par][1][0] + games[par][1][1] === 'B2') {
        player[1].push('S')
        player[1].push('L')
    } else if (games[par][1][0] + games[par][1][1] === 'A1' || games[par][1][0] + games[par][1][1] === 'C3') {
        player[1].push('L')
    } else if (games[par][1][0] + games[par][1][1] === 'A3' || games[par][1][0] + games[par][1][1] === 'C1') {
        player[1].push('S')
    }

    bigOuterLoop:
    for (let hindex = 0; hindex < player[1].length; hindex++) {
        bubject = player[1][hindex]
        let bount = 0

        for (let windex = 0; windex < player[1].length; windex++) {
            if (bubject === player[1][windex]) {
                bount++
            }
            if (bount === 3) {
                won = !won
                break bigOuterLoop

            }
        }
    }
}


function newTarget(letter, val) {
    let elements = document.getElementsByClassName('subboard')
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('nontarget')
        elements[i].classList.remove('bx')
        elements[i].classList.remove('bo')
        elements[i].classList.remove('target')
    }

    if (target === 10) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('nontarget')
            elements[i].classList.add('b' + sym)
        }
    } else {
        document.getElementById(letter + val).classList.remove('nontarget');
        document.getElementById(letter + val).classList.add('b' + sym);
    }
}

function newGame() {
    flipTurn()
    firstTurn = '4'
    p1 = [[[], [], [], [], [], [], [], [], []], []]
    p2 = [[[], [], [], [], [], [], [], [], []], []]
    games = [[0, ['A', '1'], false], [0, ['A', '2'], false], [0, ['A', '3'], false], [0, ['B', '1'], false], [0, ['B', '2'], false], [0, ['B', '3'], false], [0, ['C', '1'], false], [0, ['C', '2'], false], [0, ['C', '3'], false]]
    gamesfilled = 0
    won = false
    target = 10
    pos = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
    hit = 10

    document.getElementById('body').innerHTML = Myhtml
    let elements = document.getElementsByClassName('subboard')
    for (var i = 0; i < elements.length; i++) {
        if (i !== 4) {
            elements[i].classList.remove('bx')
            elements[i].classList.remove('bo')
            elements[i].classList.remove('nontarget')
            elements[i].classList.add('b' + sym)
        } else {
            elements[i].classList.remove('bx')
            elements[i].classList.remove('bo')
            elements[i].classList.add('nontarget')
        }
    }
}