const mongoose =require('mongoose')
const { Schema } = mongoose;
const ResumeSchema = new Schema({
    profile:{
        type: Array,
        required: true
    },
    education:{
        type: Array,
        required: true,
    },
    workExperience:{
        type: Array,
        required: true
    },
    project:{
        type: Array,
        required: true
    },
    skills:{
        type: Array,
        required: true
    },
    summary:{
        type: Array,
        required: true
    },
    others:{
        type: Array,
        required: true
    },

})

module.exports =mongoose.model('resume',ResumeSchema)