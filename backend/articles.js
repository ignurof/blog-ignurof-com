let articles = [{}];

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

