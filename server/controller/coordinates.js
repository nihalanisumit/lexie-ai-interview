const { getRandomInRange } = require('../utils')

function getNearbyCoordinates(latitude, longitude) {
  const randomCoordinates = []
  for (let i = 0; i < 10; i++) {
    const lat = getRandomInRange(latitude - 0.12, latitude + 0.12, 5)
    const long = getRandomInRange(longitude - 0.12, longitude + 0.12, 5)
    const title = `Marker ${i + 1}`

    const item = { lat, long, title }
    randomCoordinates.push(item)
  }

  return randomCoordinates
}

module.exports = { getNearbyCoordinates }
