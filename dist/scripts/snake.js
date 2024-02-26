const game = document.querySelector('.game')
const diamonds = []
const head = []

gameInit()

function gameInit() {
    for (let i = 0; i < 5; i++) {
        createDiamond()
    }
    createHead()
}

function createDiamond() {
    const diamond = document.createElement('div')
    diamond.classList.add('diamond')
    game.appendChild(diamond)
    const posX = Math.floor(Math.random() * (50 - 1)) * 10
    const posY = Math.floor(Math.random() * (60 - 1)) * 10
    diamond.style.left = `${posX}px`
    diamond.style.top = `${posY}px`
    const difficulty  = Math.floor(Math.random() * 5) + 1

    const id = Math.floor(Math.random() * 100000) + 1
    diamond.classList.add(`diamond_${id}`) // 'diamond_' + id
    diamond.classList.add(`diamond_difficulty_${difficulty}`)
    diamonds.push([posX, posY, difficulty, id])
    console.log(diamonds)
}

function createHead() {
    const headTag = document.createElement('div')
    headTag.classList.add('head')
    game.appendChild(headTag)
    const posX = Math.floor(Math.random() * (50 - 1)) * 10
    const posY = Math.floor(Math.random() * (60 - 1)) * 10
    headTag.style.left = `${posX}px`
    headTag.style.top = `${posY}px`
    head.push([posX, posY])
}
