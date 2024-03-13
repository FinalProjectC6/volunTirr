



module.exports = {
  joinroom: (room) => {
    const socket = this;

    socket.join(room);
  },

  exitroom: (room) => {
    const socket = this;

    socket.leave(room);
  },

  sendMessage: (room, msg) => {
    const socket = this;
    socket.to(room).emit(msg);
  },
};