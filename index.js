const express = require('express')
const dotenv = require('dotenv').config()
const connectdb = require('./db')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 5000;

connectdb()
.catch(err => {console.log(err)})

app.listen(port, ()=>{console.log(`Listening on ${port}`)})

app.use(express.json())
app.use(routes)

