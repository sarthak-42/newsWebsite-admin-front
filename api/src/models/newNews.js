const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    img:
        {
            data: Buffer,
            contentType: String
        }

}, {timeStamps: true});


module.exports = mongoose.model('News', NewsSchema)