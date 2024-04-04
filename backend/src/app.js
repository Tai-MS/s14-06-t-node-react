import express from 'express';
import dotenv from 'dotenv';
import  dbConnecion  from './database/database.js';

dotenv.config();
const app = express();
dbConnecion()

app.use(express.json());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
