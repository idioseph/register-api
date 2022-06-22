const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()


const mongodburl = process.env.MONGOURL
async function connectdb() {
    await mongoose.connect(mongodburl, 
        ()=>{console.log('Mongo Connected')}
    )
}

module.exports = connectdb;