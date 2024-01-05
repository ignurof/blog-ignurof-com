/*
    * Article Template
{
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
*/

const getURLSearchParams = () => {
    return new URLSearchParams(new URL(document.location).searchParams);
}

const printURLSearchParams = () => {
    console.log(getURLSearchParams());
}

const populateArticle = (article) => {
    console.log(article);
    let domArticle = document.getElementsByTagName("article");

    domArticle[0].insertAdjacentHTML("beforeend", `<h1><u>${article.title}</u></h1>`);

    for (let i = 0; i < article.paragraphs.length; i++) {
        const paragraph = article.paragraphs[i];

        domArticle[0].insertAdjacentHTML("beforeend", `<p>${paragraph.text}</p>`);

        if (paragraph.img != "") {
            domArticle[0].insertAdjacentHTML("beforeend", `<img src="${paragraph.img}" alt="" />`); 
        }
    }
}

const getArticle = async (id) => {
    const request = await fetch(`http://localhost:3420/articles/${id}`);
    const response = await request.json();

    return response;
}

(async () => {
    if(getURLSearchParams().has("id")){
        try{
            populateArticle(await getArticle(getURLSearchParams().get("id")));
        }
        catch(error){
            console.error(error);
        }    
    }
    else{
        console.error("incorrect url search parameters");
    }
})();
