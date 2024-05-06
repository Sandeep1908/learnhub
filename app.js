require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const join =require('path')
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const { error } = require('console')






const {dbConnection} =require('./utils/db')
const PORT = 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/auth', authRouter)

mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB connection is established successfully! 🎉')
    }).catch((err)=>console.log(err.message))


app.listen(PORT, function () {
    console.log(`🚀 Listening on port ${PORT}`)
})
