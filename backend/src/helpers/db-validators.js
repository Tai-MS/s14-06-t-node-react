import userModel from "../models/user.model.js";


export const existUserID = async(id) => {
    const existID = await userModel.findById(id);
    if(!existID){
        throw new Error(`El ID  ${id} no existe `);
    }
}


export const roleValidation = async (rol, city, service_type, type_of_payment, phone, address) => {
    const providerRole = 'provider';

    if (rol === providerRole && (!city || !service_type || !type_of_payment || !phone || !address)) {
        throw new Error('Si el usuario tiene rol de "provider", los campos ciudad, tipo de servicio, tipo de pago, teléfono y dirección son obligatorios');
    }
};
