# How to run this?

- Firstly, open your terminal and clone this repository
  `git clone https://github.com/nihalanisumit/lexie-ai-interview.git`

- `cd lexie-ai-interview`

- _Make sure have mapbox token_. Get yours from [here](https://docs.mapbox.com/help/getting-started/access-tokens/).

- Install all the dependencies in client and server using
  `npm run install-all`

- create a .env file in the main directory and copy the keys from .env.example
  `touch .env`

- create .env file in client too and paste your mapbox token under _REACT_APP_MAPBOX_TOKEN_
  ` cd client && touch .env`
  REACT_APP_MAPBOX_TOKEN=xxxx

- Go back to the root directory by running
  `cd .. `

- Finally to run the project
  ` npm run dev`

- This should start your client on `localhost:3000` and server on `localhost:3001`

DEMO: https://www.loom.com/share/764d23d5530a4fccb259b54eb7d68168
