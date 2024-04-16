import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './database/database.js';
import loginRoute from './routes/login.route.js';
import usersRoute from './routes/users.route.js';
import serviceRoutes from './routes/services.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: function (origin, callback) {
      if (whiteList.indexOf(origin) != -1 || !origin) {
          callback(null, true)
      } else {
          callback(new Error("Acceso denegado"))
      }
  }
}

app.use('/api/login', loginRoute);
app.use('/api/users', usersRoute);
app.use('/services', serviceRoutes);
app.use(cors(corsOptions))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
