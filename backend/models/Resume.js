const mongoose =require('mongoose')
const { Schema } = mongoose;
const ResumeSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tempelateId:{
        type: String,
    },
    profile:{
        type: Array,
    },
    education:{
        type: Array,
    },
    workExperience:{
        type: Array
    },
    project:{
        type: Array
    },
    skills:{
        type: Array
    },
    summary:{
        type: Array
    },
    others:{
        type: Array
    },

})

module.exports =mongoose.model('resume',ResumeSchema)