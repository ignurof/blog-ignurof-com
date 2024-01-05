const articlesCount = 10;

// TODO: Sort in descending order ( new to old )
const populateTimeline = (articles) => {
    let domArticleList = document.getElementsByClassName("article-list");

    for (let i = 0; i < articles.length; i++) {
        const element = articles[i];
        if(element == null) break;

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
    let request = await fetch(`http://localhost:3420/articles/list/${articlesCount}`);
    let response = await request.json();

    return response; 
}

(async () => {
    try {
        populateTimeline(await getList());
    } catch (error) {
        console.error(error);        
    }
})();
