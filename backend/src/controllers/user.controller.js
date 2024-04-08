import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";


export const usersGet = async(req, res) => {

    try {
        const users = await userModel.find();

        res.json({
            users
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error al obtener los usuarios.'
        });
    }
    


}

export const userGet = async (req, res) => {
    try {
        const {id} = req.params;
    
        const user = await userModel.findById(id);

        res.json({
            user
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Usuario Inexistente.'
        });
    }

}

export const userPost = async (req, res) => {

    try {
        const { email, password, firstName, lastName, rol, city, service_type, type_of_payment, phone, address } = req.body;

        const user = new userModel({ email, password, firstName, lastName, rol, city, service_type, type_of_payment, phone, address });
    
        const salt = bcryptjs.genSaltSync();
    
        user.password = bcryptjs.hashSync(password, salt);
    
        await user.save();
    
        res.json({
            user
        }); 
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error al crear usuario, por favor revise los datos ingresados'
        });
    }



}

export const usersPut = async (req, res) => {

    try {
        const {id} = req.params;
        const { _id, password, email, ...rest } = req.body;
    
        const userDB = await userModel.findByIdAndUpdate(id, rest, {new:true});
    
        res.json({
            userDB
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error al actualizar usuario, por favor revise los datos ingresados'
        });
    }


}

export const usersDelete = async (req, res) => {

    try {
        const {id} = req.params;

        const user = await userModel.findByIdAndDelete(id, {new:true});
    
        res.json({
            user
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Error al eliminar usuario, por favor revise los datos ingresados'
        });
    }


}