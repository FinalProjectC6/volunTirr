const { where } = require('sequelize');

const { Messages } = require("../database/index");
const { Chat, Seekers, Providers ,Audio,Photo} = require("../database");


module.exports = {
  createchat: async (ProviderId, SeekerId) => {
    await Chat.create({
      ProviderId,
      SeekerId,
    });
  },

  createMessage: async (
    ChatId,
    isProvider,
    content,
    timestamp,
    audio,
    photos
  ) => {
    // Need to this because if either audio or photos is null, sequelize throws an error
    const mediaIncluded = {
      include:
        audio && photos ? [Audio, Photo] : audio ? Audio : photos ? Photo : [],
    };

    await Messages.create(
      {
        ChatId,
        isProvider,
        content,
        timestamp,
        audio,
        photos,
      },
      mediaIncluded
    );
  },

  getallmessage: async (ChatId) => {
    return await Messages.findAll({
      where: { ChatId: ChatId },
      include: Audio,
    });
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

module.exports={
getchat:async()=>{

}

}
