import chatModel from '../models/chat.model.js';
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
        console.log(newElement);
        return await newElement.save()
    }
    

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
 