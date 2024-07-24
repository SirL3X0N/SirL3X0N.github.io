p1 = [[[], [], [], [], [], [], [], [], []], []]
p2 = [[[], [], [], [], [], [], [], [], []], []]
games = [0, 0, 0, 0, 0, 0, 0, 0, 0]
gamesfilled = 0
sym = null
won = false
target = 10
pos = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
pre = false
firstTurn = '4'
rules = false
const Myhtml = document.getElementById('body').innerHTML

function Turns(big) {
    games[big]++
    if (games[big] === 9) {
        gamesfilled++
        document.getElementById(big).classList.add('hidden')
        document.getElementById('B' + big).classList.add('target')
        document.getElementById('B' + big).innerHTML = 'd'
        document.getElementById('B' + big).classList.add('txt')
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
    if (games[target] > 8) {
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

function Placement(big, small) {
    let square = document.getElementById(big + small)
    if (firstTurn !== big) {
        if (square.innerHTML === '' && won === false && games[big] !== 9 && rules === false) {
            if (target == big || target == 10) {
                firstTurn = '10'
                posLoop:
                for (let index = 0; index < pos.length; index++) {
                    if (pos[index] === pos[small]) {
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

                for (var i = 0; i < pos[small].length; i++) {
                    player[0][big].push(pos[small].charAt(i))
                }

                if (pos[small] === 'B2') {
                    player[0][big].push('S')
                    player[0][big].push('L')
                } else if (pos[small] === 'A1' || pos[small] === 'C3') {
                    player[0][big].push('L')
                } else if (pos[small] === 'A3' || pos[small] === 'C1') {
                    player[0][big].push('S')
                }

                const duplicates = player[0][big].filter((item, index) => player[0][big].indexOf(item) !== index)
                if (duplicates.filter((item, index) => duplicates.indexOf(item) !== index).length > 0) {
                    document.getElementById(big).classList.add('hidden')
                    document.getElementById('B' + big).classList.add('b' + sym)
                    document.getElementById('B' + big).innerHTML = sym
                    document.getElementById('B' + big).classList.add('txt')
                    bitWinCheck(big, player)
                }
                Turns(big)
                newTarget(small)
            }
        }
    }
}

function bitWinCheck(big, player) {
    gamesfilled++
    games[big] = 10
    for (var i = 0; i < pos[big].length; i++) {
        player[1].push(pos[big].charAt(i))
    }
    if (pos[big] === 'B2') {
        player[1].push('S')
        player[1].push('L')
    } else if (pos[big] === 'A1' || pos[big] === 'C3') {
        player[1].push('L')
    } else if (pos[big] === 'A3' || pos[big] === 'C1') {
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


function newTarget(small) {
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
        document.getElementById(small).classList.remove('nontarget');
        document.getElementById(small).classList.add('b' + sym);
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
    sym = null

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