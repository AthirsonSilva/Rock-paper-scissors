let userPoints = 0
let compPoints = 0
const score = document.querySelector('.score-board') as HTMLDivElement
const userScore = document.querySelector('#user-score') as HTMLSpanElement
const compScore = document.querySelector('#computer-score') as HTMLSpanElement
const result = document.querySelector('.result p') as HTMLParagraphElement
const rock = document.querySelector('#rock') as HTMLDivElement
const paper = document.querySelector('#paper') as HTMLDivElement
const scissor = document.querySelector('#scissor') as HTMLDivElement
const actionMsg = document.querySelector('#actionMsg') as HTMLParagraphElement

const win = () => {
	userPoints++
	actionMsg.innerText = 'You win!'
	userScore.innerText = userPoints.toString()
}

const lose = () => {
	compPoints++
	actionMsg.innerText = 'You lose!'
	compScore.innerText = compPoints.toString()
}

const draw = () => {
	actionMsg.innerText = 'Draw!'
}

const main = () => {
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

const game = (userChoice: string) => {
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

const getComputerChoice = () => {
	const choices = ['Rock', 'Paper', 'Scissor']
	const random = Math.floor(Math.random() * 3)

	return choices[random]
}

main()
