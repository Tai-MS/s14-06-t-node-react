import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './database/database.js';
import { Server } from 'socket.io';
import exphbs from 'express-handlebars';
import path from 'path';

// Internal imports
import chatManager from './controllers/chat.controller.js';
import userModel from './models/user.model.js';
import __dirname from './utils.js';
import loginRoute from './routes/login.route.js'
import usersRoute from './routes/users.route.js'
import serviceRoutes from './routes/services.route.js';
import chatRouter from './routes/chat.route.js'

dotenv.config();
const app = express();
dbConnection();

app.use(express.json());
app.use('/api/login', loginRoute);
app.use('/api/users', usersRoute);
app.use('/services', serviceRoutes);
app.use('/chat', chatRouter)

// Handlebars configuration
app.engine('hbs', exphbs.engine());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const httpServer = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

// WebSocket
const socketServer = new Server(httpServer);
const users = {};

socketServer.on('connect', async socket => {
  console.log('New client connected');
  app.use((req, res, next) => {
    // console.log('APP.JS', req);
    next()
  })
  socket.on('newUser', (arr) => {
	// console.log("asd");
	// console.log("arr",arr);
    socketServer.emit('userConnected', arr.username, arr.proffessionalName);
    chatManager.returnChat(pro, userio).then(messages => {
        // console.log("mensaje",messages);
		messages.forEach(message => {
            socket.emit('message', { username: message.user, message: message.message });
        });
    }).catch(error => {
        console.error(error);
    });
});


  socket.on('chatMessage', async (arr) => {
    const username = users[socket.id];
    if (arr.message.length < 1) {
      socketServer.emit('error');
    } else {
      const userio = await userModel.findOne({firstName: arr.user})
      const pro = await userModel.findOne({firstName: arr.proffessionalName})
      socketServer.emit('response', chatManager.updateDb(arr.message, pro, userio));
      const mes = arr.message
      socketServer.emit('message', { username, mes });
    }
  });

});
