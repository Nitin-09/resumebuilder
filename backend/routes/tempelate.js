const express = require('express')
const router = express.Router()
const Tempelate = require('../models/Tempelate')

// Route 1: adding a new note using post:- localhost:5000/api/notes/addnote
router.post('/insertTempelate',
    async (req, res) => {
        const {category, profile, education, workExperience, project, skills,summary, others ,displayPattern} = req.body
        try {
            const tempelate = new Tempelate({category:category, profile: profile, education: education, workExperience: workExperience, project: project, skills: skills, summary:summary,others:others,displayPattern:displayPattern})
            const tempelateFinal = await tempelate.save()
            res.json(tempelateFinal)

        } catch (error) {
            console.error(error.message)
            res.status(500).send(error.message);
        }
    })
router.get('/fetchTempelate',
    async (req, res) => {
        try {
            const tempelate = await Tempelate.find()
            let pattern=tempelate[0].displayPattern.replace("{'profile'}",tempelate[0].profile)
            pattern=pattern.replace("{'education'}",tempelate[0].education)
            pattern=pattern.replace("{'workExperience'}",tempelate[0].workExperience)
            pattern=pattern.replace("{'project'}",tempelate[0].project)
            pattern=pattern.replace("{'skills'}",tempelate[0].skills)
            pattern=pattern.replace("{'summary'}",tempelate[0].summary)
            pattern=pattern.replace("{'others'}",tempelate[0].others)
            res.json(pattern)
        } catch (error) {
            console.error(error.message)
            res.status(500).send(error.message);
        }
    })

// router.post('/submitdetails/:id',fetchuser,
//     (req, res) => {
//         try {
//             let resume = {}
//             console.log(req.body)
//             for (let key in req.body) {
//                 resume[key] = req.body[key];
//             }
//             Resume.findByIdAndUpdate(req.params.id, { $set: resume }, (err, doc) => {
//                 if (err) {
//                     console.error(err.message)
//                     res.status(500).send(err.message);
//                 }
//                 else {
//                     res.status(200).json(doc)
//                 }
//             })
//         } catch (error) {
//             console.error(error.message)
//         }
//     })

module.exports = router;