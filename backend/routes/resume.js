const express = require('express')
const router = express.Router()
const Resume = require('../models/Resume')

// Route 1: adding a new note using post:- localhost:5000/api/notes/addnote
router.post('/add', async (req, res) => {
        const { profile, education, workExperience, project, skills, others } = req.body
        try {
            const resume = new Resume({ profile, education, workExperience, project, skills, others })
            const resumed = await resume.save()
            res.json(resumed)

        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error occured");
        }
    })


// Route 3: updating a note using post:- localhost:5000/api/notes/updatenote/:id
// router.put('/updatenote/:id',fetchuser ,
// async (req,res)=>{
//     const {title,description,tag }=req.body 
//     try {
//     const newnote={};
//     if(title){newnote.title=title}
//     if(description){newnote.description=description}
//     if(tag){newnote.tag=tag}
//     let note=await Notes.findById(req.params.id)
//     if(!note){ return res.status(404).send("NOT FOUND")}
//     if(note.user.toString()!==req.user.id){ return res.status(404).send("NOT ALLOWED")}
//     note=await Notes.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
//     res.json({note})           
// } catch (error) {
//     console.error(error.message)
//     res.status(500).send("Some error occured");  
// }
// })


// // Route 3: deleting a note using post:- localhost:5000/api/notes/deletenote/:id
// router.delete('/deletenote/:id',fetchuser ,
// async (req,res)=>{
//     try {
//     let note=await Notes.findById(req.params.id)
//     if(!note){ return res.status(404).send("NOT FOUND")}
//     if(note.user.toString()!==req.user.id){ return res.status(404).send("NOT ALLOWED")}
//     note=await Notes.findByIdAndDelete(req.params.id)
//     res.json({"Succes":"Note has been deleted successfully"})
//     }
//     catch (error) {
//         console.error(error.message)
//         res.status(500).send("Some error occured");  
//     }
// })

module.exports = router;