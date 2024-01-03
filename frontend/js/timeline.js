const populateTimeline = (articles) => {
    let domArticleList = document.getElementsByClassName("article-list");

    for (let i = 0; i < articles.length; i++) {
        const element = articles[i];

        domArticleList[0].innerHTML += `
            <article>
                <h2>${element.title}</h2>
                <p>${element.paragraphs[0].text}</p>
                <a href="article.html?id=${element.id}">Go to article</a>
            </article>       
        `;
    }
}

const getList = async () => {
    const url = "http://localhost:3420/articles/list";
    const options = {
        method: "GET",
    };
    
    let request = await fetch(url, options);
    let response = await request.json();

    populateTimeline(response);
}

(async () => {
    try {
        await getList();
    } catch (error) {
       console.error(error); 
    }
})();
