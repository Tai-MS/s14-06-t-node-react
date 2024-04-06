import express, { Router } from 'express';
import {check}  from 'express-validator'

const router = express();


router.get('/', (req, res) => {
    res.send('Login get')
})

router.post('/', (req, res) => {
    
    res.send('Login post')
})

export default router