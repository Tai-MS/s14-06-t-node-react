import userModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";


export const usersGet = async(req, res) => {
    
    const users = await userModel.find();

    res.json({
        users
    });

}

export const userPost = async (req, res) => {

    const { email, password, firstName, lastName, rol, city, service_type, type_of_payment, phone, address } = req.body;

    const user = new userModel({ email, password, firstName, lastName, rol, city, service_type, type_of_payment, phone, address });

    const salt = bcryptjs.genSaltSync();

    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json({
        user
    }); 

}