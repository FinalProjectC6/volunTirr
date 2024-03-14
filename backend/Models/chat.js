const { where } = require('sequelize');

const { Messages } = require("../database/index");
const { Chat, Seekers, Providers } = require("../database");

module.exports = {
  createchat: async (ProviderId, SeekerId) => {
    await Chat.create({
      ProviderId,
      SeekerId,
    });
  },
  createMessage: async (ChatId, isProvider, content) => {
    await Messages.create({
      ChatId,
      isProvider,
      content,
      timestamp: new Date(),
    });
  },
  getallmessage: async (ChatId) => {
    return await Messages.findAll({ where: { ChatId: ChatId } });
  },

  getAllChats: async (id, isProvider) => {
    let allChats = {};
    if (isProvider) {
      allChats = await Chat.findAll({
        where: { ProviderId: id },
        include: [{ model: Seekers }],
      });
      allChats = allChats.map((row) => {
        return {
          id: row.id,
          fullname: row.Seeker.fullname,
          image: row.Seeker.image,
        };
      });
    } else {
      allChats = await Chat.findAll({
        where: { SeekerId: id },
        include: [{ model: Providers }],
      });
      allChats = allChats.map((row) => {
        return {
          id: row.id,
          fullname: row.Provider.fullname,
          image: row.Provider.image,
        };
      });
    }
    return allChats;
  },
  deleteChat: async (chatId) => {
    const chat = await Chat.findOne({ where: { id: chatId } });
    await chat.destroy();
  },
};
