const express = require('express')
const app = express()
const connectDB = require('./config/database') //requiring database file to run
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
//routes look at request and figure out which controller should be handling that request
//routes see URL and hand off that request to a specific controller

require('dotenv').config({path: './config/.env'})

connectDB() //callback from connectDB function in the config/databse folder

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{ 
    console.log('Server is running, you better catch it!')
})    
