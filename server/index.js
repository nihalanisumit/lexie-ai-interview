const express = require('express')
const dotenv = require('dotenv-safe')
const cors = require('cors')

const routes = require('./routes')

dotenv.config()

const app = express()

// Shouldn't happen for a production app.
app.use(
  cors({
    origin: '*',
  })
)

app.use('/api', routes)

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}`))
