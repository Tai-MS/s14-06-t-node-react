import express from 'express';
import dotenv from 'dotenv';
import dbConnecion from './database/database.js';
import loginRoute from './routes/login.route.js';
import usersRoute from './routes/users.route.js';
import serviceRoutes from './routes/services.route.js';
import categoryRoutes from './routes/category.route.js';

dotenv.config();
const app = express();
dbConnecion();

app.use(express.json());

app.use('/api/login', loginRoute);
app.use('/api/users', usersRoute);
app.use('/services', serviceRoutes);
app.use('/category', categoryRoutes);

app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
