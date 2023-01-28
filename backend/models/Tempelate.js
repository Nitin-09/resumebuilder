const mongoose =require('mongoose')
const { Schema } = mongoose;
const TempelateSchema = new Schema({
    category:{
        type: String
    },
    profile:{
        type: String
    },
    education:{
        type: String
    },
    workExperience:{
        type: String
    },
    project:{
        type: String
    },
    skills:{
        type: String
    },
    summary:{
        type: String
    },
    others:{
        type: String
    },
    displayPattern:{
        type: String
    }

})

module.exports =mongoose.model('tempelate',TempelateSchema)