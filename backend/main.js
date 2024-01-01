//import { express } from "express"; error: cannot use import statement outside a module
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3420;

const articles = require("./articles.js");

const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "OPTIONS,GET",
    allowedHeaders: "Content-Type",
};

/*
You can also enable pre-flight across-the-board like so:
app.options('*', cors()) // include before other routes
NOTE: When using this middleware as an application level middleware (for example, app.use(cors())), pre-flight requests are already handled for all routes.
*/

// server wide cors
app.use(cors());

// Start server and listen to incoming connections
app.listen(port, async () => {
    console.log(`Server listening on port: ${port}`);
    await articles.setup();
});

app.get("/", (request, response) => {
    console.log(request);
    let helloWorld = {
        myText: "Hello, World!",
    };
    response.json(helloWorld);
});

// Endpoint routing
app.use("/articles", articles);
