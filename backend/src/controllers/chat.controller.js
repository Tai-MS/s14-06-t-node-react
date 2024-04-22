import { v4 as uuidv4 } from 'uuid'; // Importar UUID correctamente

import chatModel from '../models/chat.model.js';
import userModel from '../models/user.model.js';

class ChatController {
    static #instance

    static getInstance(){
        if(!ChatController.#instance){
            ChatController.#instance = new ChatController
        }
        return ChatController.#instance
    }

    async updateDb(message, pro, user){
        try {
            const newChatId = user.firstName+pro.firstName
            const chatExists = await chatModel.findOne({chatId: newChatId})
            if(!chatExists){
                await userModel.updateOne({firstName: user.firstName}, {chat: newChatId});
                const newElement = new chatModel({
                    chatId: newChatId,
                    customer: {
                        firstName: user.firstName,
                        lastName: user.lastName
                    },
                    proffessional: {
                        firstName: pro.firstName,
                        lastName: pro.lastName
                    },
                    messages: message
                });
                return await newElement.save();
            }else{
                return await chatModel.updateOne(chatExists, {$push: { messages: message } })
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    
    getChatInfo = async (user) => {
        try {
        } catch (error) {
            return error;
        }
    };

    async returnChat(user,pro){
        try {
            const newChatId = user.firstName+pro.firstName
            const chatExists = await chatModel.findOne({chatId: newChatId})
            if(!chatExists){
                return 'Chat iniciado.'
            }else{
                return chatExists.messages
            }
        } catch (error) {
            return error;
        }
    }
}

const chatController = new ChatController();
export default chatController;
