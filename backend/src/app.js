import express from 'express';
import dotenv from 'dotenv';
import  dbConnecion  from './database/database.js';
import loginRoute from './routes/login.route.js'
import registerRoute from './routes/users.route.js'
import serviceRoutes from './routes/services.route.js';
dotenv.config();
const app = express();
dbConnecion()

app.use(express.json());

app.use('/api/login', loginRoute);
app.use('/api/register', registerRoute);
app.use('/services', serviceRoutes);

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
