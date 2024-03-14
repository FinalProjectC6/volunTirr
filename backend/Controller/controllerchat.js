const chat = require('../Models/chat')
const {getAllChats} = require('../Models/chat')



module.exports = {
  createChat: async (req, res) => {
    const { ProviderId, SeekerId } = req.body;
    await chat.createchat(ProviderId, SeekerId);
    return res.json("Chat created successfully!");
  },

  createMessage: async (req, res) => {
    const { ChatId, isProvider, content } = req.body;
    await chat.createMessage(ChatId, isProvider, content);
    return res.json("Message created successfully!");
  },

  getAllChats: async (req, res) => {
    const id = req.params.id;
    const isProvider = req.query.isProvider;
    const allChats = await getAllChats(id, isProvider);
    res.json(allChats);
  },
  getallMessage: async (req, res) => {
    const chatId = req.params.chatId;
    const message = await chat.getallmessage(chatId);
    return res.json(message);
  },
  deleteChat: async (req, res) => {
    const chatId = req.params.chatId;
    await chat.deleteChat(chatId);
    res.json("Chat deleted successfully");
  },
};
