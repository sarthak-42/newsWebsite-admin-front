const express = require('express');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const newsRouter = require('./routes/newsRouts');




// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination:  (req, file, cb)=> {
//      return cb(null, '');
//     },
//     filename: (req, file, cb) =>{
//       cb(null, Date.now() + '-' + file.originalname);
//     },
//   });
//   const upload = multer({ storage: storage })







app.use(cors());
app.use(express.json())
app.use('/api/users', userRouter)
// app.use('/notes', noteRouter)
app.use('/api/news', newsRouter )
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.send("Hello World");
})

// app.post('/thumbnail', upload.single(), function (req, res, next) {
//     console.log(req.body)
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })

// app.post('/upload', upload.single('profileImage'), (req,res)=>{
  //   console.log(req.file)
  //   return res.redirect('/')
// })

// const upload = multer({ dest: 'uploads/' })


mongoose.connect('mongodb+srv://devfilterfix:4200myPunjabi-admin@cluster0.qijtbis.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
    // console.log(storage)
})
}).catch((error)=>{
    console.log(error)
})

