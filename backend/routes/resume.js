const express = require('express')
const router = express.Router()
const Resume = require('../models/Resume')
const fetchuser = require('../middleware/fetchuser');

// Route 1: adding a new note using post:- localhost:5000/api/notes/addnote
router.post('/createresume', fetchuser,
    async (req, res) => {
        // const { profile, education, workExperience, project, skills, others } = req.body
        try {
            const resume = new Resume({ user: req.user.id, tempelateId: req.body.tid, profile: {}, education: [{ "details": [] }], workExperience: [{ "details": [] }], project: [{ "details": [] }], skills: [{ "details": [] }], summary: [{}], others: [{ "details": [] }] })
            const resumeData = await resume.save()
            res.json(resumeData)

        } catch (error) {
            console.error(error.message)
            res.status(500).send(error.message); 11
        }
    })
router.post('/fetchResume', fetchuser, async (req, res) => {
    try {
        const resume = await Resume.find({ user: req.user.id, _id: req.body.rid }).select("-_id").select("-user").select("-__v");
        res.json(resume)
    } catch (error) {

        console.error(error.message)
        res.status(500).send({ error: error.message });

    }

})
router.post('/fetchAllResume', fetchuser, async (req, res) => {
    try {
        const resume = await Resume.find({ user: req.user.id })
        res.json(resume)
    } catch (error) {

        console.error(error.message)
        res.status(500).send({ error: error.message });

    }

})

router.post('/submitdetails/:id', fetchuser,
    async (req, res) => {
        try {
            let resume = { profile: req.body.profile, education: [{ "details": req.body.education[0].details }], workExperience: [{ "details": req.body.workExperience[0].details }], project: [{ "details": req.body.project[0].details }], skills: [{ "details": req.body.skills[0].details }], summary: req.body.summary, others: [{ "details": req.body.others[0].details }] }
            await Resume.findByIdAndUpdate(req.params.id, { $set: resume },{new: true}, async (err, doc) => {
                if (err) {
                    console.error(err.message)
                    res.status(500).send(err.message);
                }
                else {
                    console.log(doc)
                    res.status(200).json(doc)
                }
            })
        } catch (error) {
            console.error(error.message)
        }
    })

module.exports = router;