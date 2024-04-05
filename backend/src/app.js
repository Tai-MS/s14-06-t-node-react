import express from 'express';
import dotenv from 'dotenv';
import  dbConnecion  from './database/database.js';

import loginRoute from './routes/login.route.js'
import signupRoute from './routes/signup.route.js'

dotenv.config();
const app = express();
dbConnecion()

app.use(express.json());

app.use('/login', loginRoute)
app.use('/signup', signupRoute)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
