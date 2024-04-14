// chat.routes.js
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

import { validateJWT } from '../middlewares/validate-JWT.js'; 
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const validatePredefinedToken = async(req, res, next) => {
    const predefinedToken = req.query.token;
    console.log(        jwt.verify(predefinedToken, process.env.SECRETORPRIVATEKEY));
    try {
        const decoded = jwt.verify(predefinedToken, process.env.SECRETORPRIVATEKEY);
        console.log(decoded.uid === '66196abfffc619d62aeb5faa');
        const user = await User.findOne({_id: decoded.uid}); 
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        console.log(user);
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token predefinido inválido' });
    }
};

/* 

--------------------------------------------------------------------------
PARA UTILIZAR LA SEGUNDA RUTA LA URL DEBE SER COMO LA SIGUIENTE:
        localhost:8080/:proname?token=tokenGenerado
donde proname hace referencia al nombre del proveedor del servicio
y tokenGenerado debe ser un token previamente generado en el login
--------------------------------------------------------------------------

*/

//Terminado el desarrollo del chat está será la ruta principal para el mismo
//Por el momento es solo la API y la siguiente ruta es utilizada para testes
//mejor las funcionalidades en el navegador sin necesidad de un login 
//(no conseguí que se guarde automaticamente un header con el x-token)
//Una vez terminadas las pruebas y con un login para el front tanto 
//validatePredefinedToken() como una de las rutas deberian ser borradas
router.get('/api/:proname', validateJWT, async (req, res) => {
    const proname = req.params.proname;
    const user = req.user.firstName;
    console.log("Usuario validado:", user);
    res.render('chat', { proname, user });
});

router.get('/:proname', validatePredefinedToken, async (req, res) => {
    const proname = req.params.proname;
    const user = req.user.firstName;
    console.log("Usuario validado:", user);
    res.render('chat', { proname, user });
});


export default router;
