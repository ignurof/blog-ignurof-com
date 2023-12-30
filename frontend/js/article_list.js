// TODOO: All of this should be on a server

// TODO:
// Fetch latest articles from server api get endpoint
// populate timeline in descending order from new to old
/*
const getLatestArticles = async () => {
    let url = "https://blog.ignurof.com/api/getlatestarticles";
    let options = {
        method: "GET",
        mode: "cors",
 
 id: 0,};
    const request = await fetch(url, options);
    const response = await request.json();

    return response;
}
*/

const articles = [];
let count = 0;

const getList = () => {
    return articles;
}

const addToList = (newArticle) => {
    count = articles.push(newArticle);
}

const countList = () => {
    return count;
}

export.module = {
    getList,
    addToList,
    countList
}
