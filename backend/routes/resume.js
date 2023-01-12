const express = require('express')
const router = express.Router()
const Resume = require('../models/Resume')
const fetchuser = require('../middleware/fetchuser');

// Route 1: adding a new note using post:- localhost:5000/api/notes/addnote
router.post('/createresume', fetchuser,
    async (req, res) => {
        // const { profile, education, workExperience, project, skills, others } = req.body
        try {
            const resume = new Resume({ user: req.user.id, profile: [], education: [], workExperience: [], project: [], skills: [], others: [] })
            const resumeData = await resume.save()
            res.json(resumeData)

        } catch (error) {
            console.error(error.message)
            res.status(500).send(error.message);
        }
    })
router.get('/fetchResume', fetchuser,
    async (req, res) => {
        try {
            const resume = await Resume.find({ user: req.user.id })
            res.json(resume)
        } catch (error) {
            console.error(error.message)
            res.status(500).send("Some error occured");
        }
    })

router.post('/submitdetails/:id',fetchuser,
    (req, res) => {
        try {
            let resume = {}
            console.log(req.body)
            for (let key in req.body) {
                resume[key] = req.body[key];
            }
            Resume.findByIdAndUpdate(req.params.id, { $set: resume }, (err, doc) => {
                if (err) {
                    console.error(err.message)
                    res.status(500).send(err.message);
                }
                else {
                    res.status(200).json(doc)
                }
            })
        } catch (error) {
            console.error(error.message)
        }
    })

module.exports = router;