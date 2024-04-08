import userModel from "../models/user.model.js";


export const existUserID = async(id) => {
    const existID = await userModel.findById(id);
    if(!existID){
        throw new Error(`El ID  ${id} no existe `);
    }
}

export const roleValidation = async (rol) => {
    const roles = ['ADMIN', 'CLIENT', 'PROVIDER'];
    if (!roles.includes(rol)) {
        throw new Error('El rol ingresado no es válido');
    }
}