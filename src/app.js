const express =require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

// init middleware
app.use(morgan("dev"))

// morgan("combined")
// morgan("common")
// morgan("short")
// morgan("tiny")

app.use(helmet())
app.use(compression())


// init db

// init routes
app.get('/', (req, res) => {
  res.send("Hello, World!")
})

// handling error

module.exports = app 