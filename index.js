const express = require('express')
const mongoose = require('mongoose')
const app = express()
const crowdfundRouter = require('./routers/crowdfundRouter');
const userRouter = require('./routers/userRouter');
const commentRouter = require('./routers/commentRouter');
const bp = require('body-parser')
var cors = require('cors')



mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'dev_db',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err => err ? console.log(err) : console.log('Connected to database'));

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

app.use('/crowdfunds', crowdfundRouter);
app.use('/users', userRouter);
app.use('/comments', commentRouter)
app.use(express.json()); 

app.listen(8080, function(){
  console.log("Started started")
})