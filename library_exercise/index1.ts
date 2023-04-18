interface Author {
    firstName: string;
    lastName: string;
}


interface Book {
    title: string;
    author: Author;
}

interface ILibrary {
    addBook(book: Book): void;
    removeBook(title: string): void;
    listBooks(): void;
}

class Library implements ILibrary {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(title:string): void {
        this.books = this.books.filter(book => book.title != title);
    }

    listBooks(): void {
        this.books.forEach(book => console.log(`${book.title}, ${book.author.firstName}, ${book.author.lastName}`))
    }
}


const author1: Author = {
    firstName: "John",
    lastName: "Doe"
}

const author2: Author = {
    firstName: "Jane",
    lastName: "Doe"
}

const book1: Book = {
    title: "some book with title A",
    author: author1
}

const book2: Book = {
    title: "some book with title B",
    author: author2
}

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.listBooks();

library.removeBook("some book with title A");
library.listBooks();
