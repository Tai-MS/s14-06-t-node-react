import bcryptjs from "bcryptjs";
import userModel from "../models/user.model.js";


export const login = async (req, res) => {

    const { email, contraseña } = req.body; 

    try {
        
        const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Usuario/Password no son validos",
      });
    }
    //Verificar la contraseña
    const validPassword = bcryptjs.compareSync(contraseña, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Password inválida",
      });
    }
    //Generar el JWT

    const token = await generarJWT(user.id);

    res.json({
      user,
      token,
    });


    } catch (error) {
        console.log(error);
        res.status(500).json({
          msg: "Hable con el admin.",
        }); 
    }
}