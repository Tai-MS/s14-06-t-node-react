import express from 'express'
import chatController from '../controllers/chat.controller.js'
const router = express.Router()

//Endpoints
router.get('/:proname', (req, res) => {
    const proname = req.params.proname
    res.render('chat', {proname})
})

export default router