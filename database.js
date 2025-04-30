// Temporary Database
let Book =[
    {
        ISBN: "12345One",
        title: "Getting Started with Java",
        authors: [1, 2],
        language: "en",
        pubDate: "01-01-2025",
        numOfPage: 521,
        category: ["Science", "Technology", "Programming", "Web Dev" ],
        publication: 1
    },
    {
        ISBN: "12345Two",
        title: "Getting Started with Python",
        authors: [1, 2, 3],
        language: "en",
        pubDate: "01-02-2025",
        numOfPage: 721,
        category: ["Science", "fiction", "Technology", "Programming", "Web Dev" ],
        publication: 1
    },
];
let Author=[
    {
        id: 1,
        name: "Sanidhya",
        books: ["12345One", "12345Two"],

    },
    {
        id: 2,
        name: "Kartikey",
        books: ["12345Two"],
        
    }
];
let Publications=[
    {
        id: 1,
        name: "Gyan Publications",
        books: ["12345Two"],
    },
    {
        id: 2,
        name: "Tech Publications",
        books: ["12345One"],
    }
];