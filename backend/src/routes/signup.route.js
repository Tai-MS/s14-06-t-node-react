import express from 'express'

const router = express()

router.get('/', (req, res) => {
    res.send('Signup get')
})

router.post('/', (req, res) => {
    res.send('Signup post')
})

export default router