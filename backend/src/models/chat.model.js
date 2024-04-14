import mongoose from "mongoose";
import userModel from "./user.model.js";

const chatsCollection = "chats";

const User = userModel;

const chatSchema = new mongoose.Schema({
  customer: {
    firstName: { type: String, required: [true, 'Missing field: customer first name'] },
    lastName: { type: String, required: [true, 'Missing field: customer last name'] },
  },
  proffessional: {
    firstName: { type: String, required: [true, 'Missing field: proffessional first name'] },
    lastName: { type: String, required: [true, 'Missing field: proffessional last name'] },
  },
  messages: { type: Array }
});

chatSchema.statics.getCustomerAndOfferInfo = async function (chatId) {
  try {
    const chat = await this.findById(chatId);
    const customer = await User.findById(chat.customer);
    const offer = await User.findById(chat.proffessional);
    return { customer, proffessional };
  } catch (error) {
    throw new Error("Error fetching customer and offer information");
  }
};

const chatModel = mongoose.model(chatsCollection, chatSchema);

export default chatModel;