
const { getName, getNameId, getChapter,getchapterId } = require("./services");


const object = process.argv[2];
const id = process.argv[3];



if (object === "personajes" && id) {
  getNameId(id);
} else if (object === "personajes") {
  getName();
}else if(object==="episodios" && id){
    getchapterId(id);
}else if(object==="episodios"){
    getChapter();
}