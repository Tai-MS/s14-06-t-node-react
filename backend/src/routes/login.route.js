import express from 'express'

const router = express()

router.get('/', (req, res) => {
    res.send('Login get')
})

router.post('/', (req, res) => {
    res.send('Login post')
})

export default router