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
    console.log("Route Request @ Time since Epoch: ", Date.now());
    next();
});

router.get('/', (request, response) => {
    response.json({hello: "world"});
});

router.get("/list", (request, response) => {
    response.json(getArticles());
});

router.get("/list/:year", (request, response) => {
    let articlesFromRelevantYear = [];

    for(let i = 0; i < getArticles().length; i++){
        if(getArticleById(i).date.year != request.params.year) return;

        articlesFromRelevantYear.push(getArticleById(i));
    }

    response.json(articlesFromRelevantYear);
});

// order is important, if this is placed above /list, then this would get called and print id: "list"
router.get("/:id", (request, response) => {
    // TODO: Sanitize more
    if(!isNumericIntFromString(request.params.id)) return console.error("not numeric int");
     
    response.json(getArticleById(request.params.id));
});

router.get("/create", (request, response) => {
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

// articles should be index-sorted by id, so id should always be the index
const getArticleById = (id) => {
    return getArticles()[id];
}
 
const readArticlesFromDir = async () => {
    let fileNames = []; 
    let fileArticles = [];

    const dir = await fs.opendir("./articles/");
    for await (file of dir){
        fileNames.push(file.name);
    }

    for(let i = 0; i < fileNames.length; i++){
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

    return fileArticles;
}

// returns true if the string contains an integer
const isNumericIntFromString = (str) => {
    return /-?\d+$/.test(str);
}

// I would prefer to pass this is as an object but when using router in express like this, it doesnt like it
// this is my alternative solution that works nicely
module.exports = router;
module.exports.setup = setup;
