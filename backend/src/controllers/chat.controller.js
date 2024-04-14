import { UUID } from 'mongodb';
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

    async updateDb(user, message, pro){
        console.log("desde controller", {firstName: pro.firstName, lastName: pro.lastName});
        console.log("aha ");
        const newUserChatId = await userModel.updateOne({firstName: customer.firstName},{
            chatId: UUID
        })
        const newElement = new chatModel({
            customer: {
                firstName: user.firstName,
                lastName: user.lastName
            },
            proffessional: {
                firstName: pro.firstName,
                lastName: pro.lastName
            },
            messages: message
        })
        await newUserChatId.save()
        return await newElement.save()
    }
    
    getChatInfo = async (user) => {
        try {
          const user2 = user.user.firstName; 
          const chatId = user.chatId; 
        //   const chat = await chatModel.findById(chatId);
        //   if (!chat) {
        //     throw new Error('Chat no encontrado');
        //   }
        //   res.status(200).send({ chat });
        } catch (error) {
        //   res.status(404).send({ error: error.message });
        return error
    }
      };
    async returnChat(){
        try {
            const messages = await chatModel.find({})

            const formattedMessages = messages.map(message => ({
                user: message.user,
                messages: message
            }))
            console.log("return", formattedMessages);
            return formattedMessages
        } catch (error) {
            return error
        }
    }

}

const chatController = new ChatController();
export default chatController;
 