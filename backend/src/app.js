import express from 'express';
import dbConnecion  from './database/database.js';

import loginRoute from './routes/login.route.js'
import signupRoute from './routes/signup.route.js'

import dotenv from 'dotenv';
dotenv.config();
const app = express();
const conectarDB = async() => {
  await dbConnecion()
} 

app.use(express.json());

app.use('/login', loginRoute)
app.use('/signup', signupRoute)
conectarDB()
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
