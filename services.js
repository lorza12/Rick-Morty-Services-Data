const axios = require("axios");
const api = "https://rickandmortyapi.com/api";

async function getName() {
  try {
    const resp = await axios.get(`${api}/character`);
    const res = resp.data.results;

    const allCharacter = res.map((item) => {
      return item.name;
    });

    console.log(allCharacter);
  } catch (err) {
    console.log(err);
  }
}

async function getNameId(id) {
  try {
    const resp = await axios.get(`${api}/character/${id}`);
    console.log(resp.data.name);
  } catch (error) {
    console.log(error);
  }
}

async function getChapter() {
  try {
    const resp = await axios.get(`${api}/episode`);
    const chapters = resp.data.results;
    const allCharacter = chapters.map((item) => {
      return item.name;
    });
    console.log(allCharacter);
  } catch (error) {
    console.log(error);
  }
}

async function getchapterId(id) {
  try {
    const resp = await axios.get(`${api}/episode/${id}`);
    console.log(resp.data.name);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getName,
  getNameId,
  getChapter,
  getchapterId,
};
