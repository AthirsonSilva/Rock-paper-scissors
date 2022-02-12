let userPoints = 0
let compPoints = 0
const score = document.querySelector('.score-board')
const userScore = document.querySelector('#user-score')
const compScore = document.querySelector('#computer-score')
const result = document.querySelector('.result p')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const actionMsg = document.querySelector('#actionMsg')

function win() {
    userPoints++
    actionMsg.innerText = 'You win!'
    userScore.innerText = userPoints
}

function lose() {
    compPoints++
    actionMsg.innerText = 'You lose!'
    compScore.innerText = compPoints
}

function draw() {
    actionMsg.innerText = 'Draw!'
}

function main() {
    rock.addEventListener('click', () => {
        game('Rock')
    })
    
    paper.addEventListener('click', () => {
        game('Paper')
    })
    
    scissor.addEventListener('click', () => {
        game('Scissor')
    })
}

function game(userChoice) {
    const computerChoice = getComputerChoice()

    switch (userChoice + computerChoice) {
        case 'RockScissor':
            result.innerText = `Rock smashes scissor`
            win()
            break
        case 'RockPaper':
            result.innerText = `Rock gets covered by paper`
            lose()
            break
        case 'RockRock':
            result.innerText = `Rock can't do shit to another rock`
            draw()
            break
        case 'PaperRock':
            result.innerText = `Paper covers rock`
            win()
            break
        case 'PaperScissor':
            result.innerText = `Paper get cut by scissor`
            lose()
            break
        case 'PaperPaper':
            result.innerText = `Paper can't do shit to another paper`
            draw()
            break
        case 'ScissorPaper':
            result.innerText = `Scissor cuts paper`
            win()
            break
        case 'ScissorRock':
            result.innerText = `Scissors get demolished by rock`
            lose()
            break
        case 'ScissorScissor':
            result.innerText = `Scissor can't do shit to another scissor`
            draw()
            break
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor']
    const random = Math.floor(Math.random() * 3)

    return choices[random]
}

main()