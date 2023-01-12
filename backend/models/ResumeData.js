const mongoose =require('mongoose')
const { Schema } = mongoose;
const ResumeDataSchema = new Schema({
    profile:[],
    education:[],
    workExperience:[],
    project:[],
    skills:[],
    summary:[],
    others:[],

})

module.exports =mongoose.model('resumeData',ResumeDataSchema)