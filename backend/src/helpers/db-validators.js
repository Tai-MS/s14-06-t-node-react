import userModel from "../models/user.model";


export const existUserID = async(id) => {
    const existID = await userModel.findById(id);
    if(!existID){
        throw new Error(`El ID  ${id} no existe `);
    }
}