// TODO: Find out how to call thyme.c from server and respond with it
const currentYear = 2024;

const getArticlesByYear = async (year) => {
    const request = await fetch(`http://localhost:3420/articles/list/${year}`);
    const response = await request.json();

    return response;
}

const populateArticleList = async (year) => {
    let domArticleList = document.getElementById("article-list");
    domArticleList.innerHTML = "";

    try {
        const articles = await getArticlesByYear(year);
        for (let i = 0; i < articles.length; i++) {
            const title = articles[i];

            domArticleList.insertAdjacentHTML("beforeend", `
                <li>
                    <a href="article.html?id=${title.id}" target="_blank" rel="noreferrer">${title.title}</a>
                </li>
            `);
        }
    } catch (error) {
        console.error(error);
    }
}
