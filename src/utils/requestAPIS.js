const axios = require("axios").default;

const DataAPIS = async () => {
  try {
    const { data } = await axios.get(`https://www.freetogame.com/api/games`);

    const numAleatorio = Math.floor(Math.random() * data.length);
    return data[numAleatorio];
  } catch (error) {
    return error;
  }
};

module.exports = DataAPIS;
