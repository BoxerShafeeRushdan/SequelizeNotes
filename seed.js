const path = require('path')
const fs = require('fs').promises

const {db} = require('./db')

const {Game} = require('./models/Game')

const seed = async () => {
    await db.sync({force: true})

    const seedPath = path.join(__dirname, 'games.json')

    const buffer = await fs.readFile(seedPath)
    const {data} = JSON.parse(String(buffer))

    const gamePromises = data.map(game => Game.create(game))

    await Promise.all(gamePromises)

    console.log('All game loaded')

}

seed()

module.exports = seed;