const populateTimeline = () => {
    let domArticleList = document.getElementsByClassName("article-list");
    
    // TODO: Fetch from server
    let articles = getList();

    for (let i = 0; i < articles.length; i++) {
        const element = articles[i];

        //const articleURL = new URL("https://blog.ignurof.com/article.html");
        //articleURL.searchParams.append("id", 0);
        //<a href="${articleURL.href}">Go to article</a>
        domArticleList[0].innerHTML += `
            <article>
                <h2>${element.title}</h2>
                <p>${element.paragraphs[0].text}</p>
                <a href="article.html?id=${element.id}">Go to article</a>
            </article>       
        `;
    }
}

/*
<article>
    <h2>Title</h2>
    <p>First 135 letters of the article Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat...</p>
    <a href="article.html">Go to article</a>
</article>
*/
