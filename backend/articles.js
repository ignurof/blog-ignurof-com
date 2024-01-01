const express = require("express");
const fs = require("node:fs/promises");
const router = express.Router();

// middleware that is specific to this router
router.use((request, response, next) => {
    console.log("Time: ", Date.now());
    next();
});

router.get('/', (request, response) => {
    console.log("articles/");

    readArticlesFromDir();    

    response.json({hello: "world"});
});

router.get("/list", (request, response) => {
    console.log("articles/list/");

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

const readArticlesFromDir = async () => {
    try{
        const dir = await fs.opendir("./articles/");
        for await (file of dir){
            console.log(file);
        }
    }
    catch(error){
        console.error(error);
    }

    /*
    fs.readFile("./articles/test_article.json", (error, data) => {
        if(error) throw error;
        
        console.log(JSON.parse(data));
    });
    */
}

const articleTemplate = {
    title: "This is a title",
    paragraphs: [
        {text: "", img: ""},
    ],
    date: {
        year: 2023,
        month: 1,
        day: 5,
        hour: 9,
        minute: 42,
    },
    id: 0,
};

// This is just a mockup for testing!!
const articleOne = articleTemplate;
articleOne.title = "Hello, World!";
articleOne.paragraphs[0].text = "This is the paragraph content text. Scaled down to XXX amount of letters to keep it nice and short.";
articleOne.paragraphs[0].img = "https://picsum.photos/200";
article = articleOne;

module.exports = router;
