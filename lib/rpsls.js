export {rps, rpsls}

function rps(move) {
    // First we need to define what moves are possible
    const moves = ['rock', 'paper', 'scissors']
    // Then we need to be able to get a random move for our player2 robot
    const randomNum= Math.floor([Math.random() * 3])
    //opponent's move
    const randomMove = moves[randomNum]
    var result
    var final_result

    // Now we make sure our player's move is valid
    if (move === undefined) {
        // They didnt do a move, so give them a random move
        const player1move = moves[Math.floor(Math.random() * 3)]
        final_result = {'player': player1move}
        return final_result
    }
    // also check that the move they entered is possible
    else if (!moves.includes(move)){
        console.error('Error: Possible moves include rock, paper, or scissors.')
        throw new RangeError()
    }
    // Now we check to see who won
    // Let's say our robot did rock
    else {
        //console.log('got to else block')
        // start with player chose scissors
        if (move === 'scissors') {
            if (randomMove === 'scissors') {
                result = 'tie'
            }
            else if (randomMove === 'paper') {
                result = 'win'
            }
            else if (randomMove === 'rock') {
                result = 'lose'
            }
        }
        else if (move === 'paper') {
            if (randomMove === 'scissors') {
                result = 'lose'
            }
            else if (randomMove === 'paper') {
                result = 'tie'
            }
            else if (randomMove === 'rock') {
                result = 'win'
            }
        }
        else if (move === 'rock') {
            // console.log('got to player rock block')
            // console.log(randomMove)
            if (randomMove === 'scissors') {
                result = 'win'
            }
            else if (randomMove === 'paper') {
                result = 'lose'
            }
            else if (randomMove === 'rock') {
                result = 'tie'
            }
            //console.log(result)
        }
    }
    final_result = {'player': move, 'opponent': randomMove, 'result': result}
    return final_result
}

function rpsls(move) {
    // First we need to define what moves are possible
    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    //console.log('Possible moves: ' + moves)
    // Then we need to be able to get a random move for our player2 robot
    const randomNum= Math.floor([Math.random() * 5])
    //opponent's move
    const randomMove = moves[randomNum]
    //console.log('Random move: ')
    //console.log(randomMove)
    var result
    var final_result
    // Now we make sure our player's move is valid
    if (move === undefined) {
        //console.log('We entered move=undefined block')
        // They didnt do a move, so give them a random move
        const player1move = moves[Math.floor(Math.random() * 5)]
        final_result = {'player': player1move}
        return final_result
    }
    // also check that the move they entered is possible
    else if (!moves.includes(move)){
        // console.log('We entered invalid move block')
        console.error('Error: Move must be rock, paper, scissors, lizard, or spock.')
        throw new RangeError()
    }
    // Now we check to see who won
    // Let's say our robot did rock
    else {
        // console.log('We entered final else block')
        // console.log('This is player move after lowercase assignment: ')
        // console.log(move)
        // start with player chose scissors
        if (move === 'scissors') {
            //console.log('We entered incorrect move=scissors block')
            if (randomMove === 'scissors') {
                result = 'tie'
            }
            else if (randomMove === 'paper') {
                result = 'win'
            }
            else if (randomMove === 'rock') {
                result = 'lose'
            }
            else if (randomMove === 'spock') {
                result = 'lose'
            }
            else if (randomMove === 'lizard') {
                result = 'win'
            }
        }
        else if (move === 'paper') {
            //console.log('We entered correct move=paper block')
            if (randomMove === 'scissors') {
                result = 'lose'
            }
            else if (randomMove === 'paper') {
                result = 'tie'
            }
            else if (randomMove === 'rock') {
                result = 'win'
            }
            if (randomMove === 'lizard') {
                result = 'lose'
            }
            else if (randomMove === 'spock') {
                result = 'win'
            }
        }
        else if (move === 'rock') {
            //console.log('We entered incorrect move=rock block')
            if (randomMove === 'scissors') {
                result = 'win'
            }
            else if (randomMove === 'paper') {
                result = 'lose'
            }
            else if (randomMove === 'rock') {
                result = 'tie'
            }
            else if (randomMove === 'spock') {
                result = 'lose'
            }
            else if (randomMove === 'lizard') {
                result = 'win'
            }
        }
    }
    final_result = {'player': move, 'opponent': randomMove, 'result': result}
    // console.log('This is our result: ')
    // console.log(result)
    // console.log('This is our final_result: ')
    // console.log(final_result)
    return final_result
}