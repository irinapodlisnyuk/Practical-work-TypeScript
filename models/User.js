const users = [];
const favorites = {};

const User = {
  create: (username, password) => {
    const user = { username, password };
    users.push(user);
    favorites[username] = [];
    return user;
  },

  find: (username) => {
    return users.find((user) => user.username === username);
  },

  addFavorite: (username, trackId) => {
    if (favorites[username] && !favorites[username].includes(trackId)) {
      favorites[username].push(trackId);
    }
  },

  removeFavorite: (username, trackId) => {
    const index = favorites[username].indexOf(trackId);
    if (index > -1) {
      favorites[username].splice(index, 1);
    }
  },

  getFavorites: (username) => {
    return favorites[username] || [];
  },
};

module.exports = User;
