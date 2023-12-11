const express = require('express')
const cookieParser = require('cookie-parser')
const sessions = require('express-session')

const app = express();
const PORT = 4000;

// initalize Express-session 
const oneDay = 1000 * 60 * 60 * 24;
 app.use(sessions({
    secret: 'thisisasecret',
    saveUninitaialized: true,
    cookie: {maxAge: oneDay},
    resave: false
 }));

// parsing data from user
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));


// set cookie parser middleware
app.use(cookieParser());

// storing username and password as variables
const userName = 'user1'
const passWord = 'password1';

let session;



// endpoints


app.get('/',(req,res)=>{
    session= req.session;
    if(session.userid){
        res.send ("Welcome User <a href=\'/logout'>click to logout</a>")
    }else{
        res.sendFile('views/index.html',{root:__dirname})
    }
})


//Submit user details
app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
})