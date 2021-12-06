const express= require('express')
const app = express();
require('dotenv').config()
const cors = require('cors')
const mongodb = require('mongodb');
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')


 //Port
 const PORT = process.env.PORT || 5001 ;

  
app.use(cors({
    origin: "*"
  }))  
  //middleware
  app.use(express.json())
  app.use(cookieParser())
  //File Upload
  app.use(fileUpload({
        useTempFiles: true
    }))
   


  // Routes
app.use('/user', require('./Routes/userRoutes'))
app.use('/api', require('./Routes/categoryRoutes'))
app.use('/api', require('./Routes/uploadProdRoutes'))
app.use('/api', require('./Routes/prodRoutes'))
app.use('/api', require('./Routes/paymentRoutes'))




  // Connect to mongodb
const URL = process.env.MongoDb_url
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})



app.use('http://localhost:3000/login',(req,res,next) => {
    res.json({msg:"hello all"})
}) 
  app.listen(PORT,function(){
    console.log(`The app is listening in port ${PORT}`)
})