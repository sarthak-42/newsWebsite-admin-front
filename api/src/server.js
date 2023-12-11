const express = require('express');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();
const cors = require('cors');
const multer = require('multer')
app.use(cors());
const mongoose = require('mongoose')
app.use(express.json())
app.use('/users', userRouter)
app.use('/notes', noteRouter)
app.get('/',(req,res)=>{
    res.send("Hello World");
})

const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) =>{
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  

mongoose.connect('mongodb+srv://devfilterfix:4200myPunjabi-admin@cluster0.qijtbis.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
    console.log(storage)
})
}).catch((error)=>{
    console.log(error)
})

