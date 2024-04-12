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
import loginRoute from './routes/login.route.js';
import signupRoute from './routes/signup.route.js';
import chatRouter from './routes/chat.router.js';

dotenv.config();
const app = express();
dbConnection();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/chat', chatRouter);

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

  socket.on('newUser', (arr) => {
    users[socket.id] = arr.username;
    socketServer.emit('userConnected', arr.username, arr.proffessionalName);
    console.log(arr);

    chatManager.returnChat().then(messages => {
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
      console.log("hola",arr.proffessionalName);
      const userio = await userModel.findOne({firstName: users[socket.id]})
      const pro = await userModel.findOne({firstName: arr.proffessionalName})

      // console.log("dede app: ", arr.message);
      socketServer.emit('response', chatManager.updateDb(userio, arr.message, pro));
      const mes = arr.message
      socketServer.emit('message', { username, mes });
    }
  });

  socket.on('disconnect', () => {
    const username = users[socket.id];
    delete users[socket.id];
    socketServer.emit('userDisconnected', username);
  });
});
