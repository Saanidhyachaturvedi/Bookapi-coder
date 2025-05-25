const express = require("express");

//database
const Database = require('./database');

//initialization
const ourApp = express();

ourApp.get("/", (request, response) => {
    response.json({message: "I am Billu SHANDA" });
});

//Route  - /book
//Des   - To Get a Book
//Access  - Public
//Method   - GET
//Params  - None
//Body   - None
ourApp.get("/book", (req, res) => {
    return res.json({ books: Database.Book });
});

//Route  - /book/:bookID
//Des   - to get a list of books based on ISBN
//Access  - Public
//Method   - GET
//Params  - bookID
//Body   - None

ourApp.get("/book/:bookID", (req, res) =>{
    const getBook = Database.Book.find(
    (book) => book.ISBN ===req.params.bookID
);
if (!getBook) return res.status(404).json({ error: "Book not found" });
return res.json({ books: getBook });
});

//Route  - /book/c/:category
//Des   - to get a list of books based on category
//Access  - Public
//Method   - GET
//Params  - category
//Body   - None
ourApp.get("/book/c/:category", (req, res) =>{
    const getBook = Database.Book.find((book) =>
    book.category.includes(req.params.category)
);
if (!getBook) return res.status(404).json({ error: "Book not found" });
return res.json({ books: getBook });
});

//Route  - /book/a/:authorid
//Des   - to get a list of books based on author
//Access  - Public
//Method   - GET
//Params  - authors
//Body   - None
ourApp.get("/book/a/:authorid", (req, res) =>{
    const getBook = Database.Book.filter((book) =>
    book.authors.toString().includes(req.params.authorid)
);
if (!getBook) return res.status(404).json({ error: "Book not found" });
return res.json({ books: getBook });
});

//Route  - /author
//Des   - To get all authors
//Access  - Public
//Method   - GET
//Params  - None
//Body   - None
ourApp.get("/author", (req, res) => {
    return res.json({ Author: Database.Author });
});

//Route  - /author/:id
//Des   - to get specific author
//Access  - Public
//Method   - GET
//Params  - id
//Body   - None
ourApp.get("/author/:id", (req, res) =>{
    const getAuthor = Database.Author.filter((author) =>
    author.id == req.params.id
);
if (!getAuthor) return res.status(404).json({ error: "Author not found" });
return res.json({ books: getAuthor });
});

//Route  - /author/:id
//Des   - to get list of author based on a book
//Access  - Public
//Method   - GET
//Params  - book
//Body   - None
ourApp.get("/author/b/:code", (req, res) =>{
    const getAuthor = Database.Author.filter((author) =>
    author.books.includes(req.params.code)
);
if (!getAuthor) return res.status(404).json({ error: "Author not found" });
return res.json({ books: getAuthor });
});


ourApp.listen(4000, () => console.log("Now Server is running"));
//ye change hai