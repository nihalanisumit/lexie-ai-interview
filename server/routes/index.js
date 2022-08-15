const express = require('express')
const { getNearbyCoordinates } = require('../controller/coordinates')

const router = express.Router()

router.get('/', (req, res) => {
  return res.status(200).send('health: ok')
})

router.get('/coordinates', (req, res) => {
  const lat = +req.query.lat
  const long = +req.query.long
  const data = getNearbyCoordinates(lat, long)
  return res.status(200).json(data)
})

module.exports = router
