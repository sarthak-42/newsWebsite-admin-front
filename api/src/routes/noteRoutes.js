const express = require('express')
const noteRouter = express.Router();

noteRouter.post('/', (req,res)=>{
    res.send('Not post req')
} );

noteRouter.get('/', (req,res)=>{
    res.send('not get req')
})

module.exports = noteRouter