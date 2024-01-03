const express = require("express");
const fs = require("node:fs/promises");
const router = express.Router();

const setup = async () => {
    try {
        setArticles(await readArticlesFromDir());    
    } catch (error) {
        console.error(error); 
    }
}

// middleware that is specific to this router
router.use((request, response, next) => {
    console.log("Time: ", Date.now());
    next();
});

router.get('/', (request, response) => {
    console.log("articles/");

    response.json({hello: "world"});
});

router.get("/list", (request, response) => {
    console.log("articles/list/");
    console.log(getArticles());
    response.json(getArticles());
});

router.get("/create", (request, response) => {
    console.log("articles/create/");
    
    // TODO

    response.json({created: true});
});

let articles = [{}];

const getArticles = () => {
    return articles;
}

const setArticles = (value) => {
    articles = value;
}
 
const readArticlesFromDir = async () => {
    let fileNames = []; 
    let fileArticles = [];

    try{
        const dir = await fs.opendir("./articles/");
        for await (file of dir){
            fileNames.push(file.name);
        }
    }
    catch(error){
        console.error(error);
    }

    for(let i = 0; i < fileNames.length; i++){
        try{
            let filePath = `./articles/${fileNames[i]}`;
            let fileContentsBuffer = await fs.readFile(filePath);
            let fileContents = JSON.parse(fileContentsBuffer);
            fileArticles.push({
                title: fileContents.title,
                paragraphs: fileContents.paragraphs,
                date: fileContents.date,
                id: fileContents.id,
            });
        } 
        catch(error){
            console.error(error);
        }
    }

    return fileArticles;
}

// I would prefer to pass this is as an object but when using router in express like this, it doesnt like it
// this is my alternative solution that works nicely
module.exports = router;
module.exports.setup = setup;
