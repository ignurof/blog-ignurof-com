const helloWorld = () => {
    console.log("Hello, World!");
    let tempVar = "This is a dynamic type string";
    console.log(tempVar);
}

// I can fetch the file I think when the site is actually hosted
// use the json response article format to fill the article.html tags
// fetch the specific article based on the article link the user has clicked on
// article.html should basically just be a template that gets filled with values fetched here
// above description is only valid for specific articles though
// this is timeline.js and I was going to fetch the list of all the article names from articles directory
// and then with that list, populate timeline
const fetchFile = async () => {
    const request = await fetch("https://blog.ignurof.com/articles/hello_world.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const response = await request.json(); 
    console.log(response);
}

fetchFile();
