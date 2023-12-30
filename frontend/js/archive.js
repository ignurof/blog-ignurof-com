const currentYear = 2023;

const showCurrentYear = () => {
    let domArticleList = document.getElementById("article-list");

    let articleListTest = [1, 2, 3];

    for (let i = 0; i < articleListTest.length; i++) {
        const element = articleListTest[i];

        domArticleList.insertAdjacentHTML("beforeend", `
            <li>
                <a href="article.html?id=0" target="_blank" rel="noreferrer">Article Title Here</a>
            </li>
        `);
    }
}

showCurrentYear();

const selectMonth = (month) => {
    console.log(month);
    switch (month) {
        case 1:
            console.log(month);
            break;

        default:
            console.error("selectMonth error");
            break;
    }
}

/*
<section class="archive">
    <h1><u>Archive</u></h1>
    <label for="year">Year</label>
    <select name="year">
        <option value="2023" onclick="showToggle(2023)">2023</option>
    </select>
    <!-- <button onclick="showToggle(2023)">2023</button> -->
    <ul id="article-list"></ul>
</section>
*/

