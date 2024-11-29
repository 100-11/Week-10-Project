// Step 1: Create the Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this._isAvailable = true; // Encapsulation using a private-like property
    }

    // Getter for availability
    get isAvailable() {
        return this._isAvailable;
    }

    // Setter for availability
    set isAvailable(status) {
        this._isAvailable = status;
    }

    // Method to display book details
    toString() {
        const status = this.isAvailable ? "Available" : "Not Available";
        return `'${this.title}' by ${this.author} (ISBN: ${this.isbn}) - ${status}`;
    }
}

// Step 2: Create the Member Class
class Member {
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    // Method to borrow a book
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed '${book.title}'.`);
        } else {
            console.log(`Sorry, '${book.title}' is currently not available.`);
        }
    }

    // Method to return a book
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            book.isAvailable = true;
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned '${book.title}'.`);
        } else {
            console.log(`${this.name} doesn't have '${book.title}' to return.`);
        }
    }

    // Method to display member details
    toString() {
        const books = this.borrowedBooks.map((book) => book.title).join(", ") || "No books borrowed";
        return `Member: ${this.name} (ID: ${this.memberId}) | Borrowed Books: ${books}`;
    }
}

// Step 3: Create the Librarian Class (Inherits from Member)
class Librarian extends Member {
    constructor(name, memberId) {
        super(name, memberId);
        this.libraryBooks = [];
    }

    // Method to add a book to the library
    addBook(book) {
        this.libraryBooks.push(book);
        console.log(`Librarian added '${book.title}' to the library.`);
    }

    // Method to remove a book from the library
    removeBook(book) {
        const index = this.libraryBooks.indexOf(book);
        if (index > -1) {
            this.libraryBooks.splice(index, 1);
            console.log(`Librarian removed '${book.title}' from the library.`);
        } else {
            console.log(`'${book.title}' is not in the library.`);
        }
    }

    // Overriding borrowBook method (Librarians don't borrow books)
    borrowBook(book) {
        console.log(`Librarian ${this.name} doesn't borrow books like members.`);
    }

    // Method to search books by title or author
    searchBooks(keyword) {
        const results = this.libraryBooks.filter(
            (book) => book.title.toLowerCase().includes(keyword.toLowerCase()) || book.author.toLowerCase().includes(keyword.toLowerCase())
        );
        if (results.length) {
            console.log("Search results:");
            results.forEach((book) => console.log(book.toString()));
        } else {
            console.log("No books found.");
        }
    }

    // Method to display librarian details
    toString() {
        const books = this.libraryBooks.map((book) => book.title).join(", ") || "No books in the library";
        return `Librarian: ${this.name} | Library Books: ${books}`;
    }
}

// Step 4: Demo functionality
(() => {
    // Create librarian and members
    const librarian = new Librarian("Alice", "L001");
    const member1 = new Member("Bob", "M001");
    const member2 = new Member("Charlie", "M002");

    // Create books
    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
    const book2 = new Book("1984", "George Orwell", "9876543210");
    const book3 = new Book("To Kill a Mockingbird", "Harper Lee", "1928374650");

    // Librarian adds books to the library
    librarian.addBook(book1);
    librarian.addBook(book2);
    librarian.addBook(book3);

    // View initial library status
    console.log("\n--- Library Status ---");
    console.log(librarian.toString());

    // Members borrow books
    console.log("\n--- Borrowing Books ---");
    member1.borrowBook(book1);
    member2.borrowBook(book2);
    member1.borrowBook(book2); // Trying to borrow an already borrowed book

    // View member details after borrowing
    console.log("\n--- Member Details ---");
    console.log(member1.toString());
    console.log(member2.toString());

    // Librarian searches for books by title/author
    console.log("\n--- Search Books ---");
    librarian.searchBooks("1984");
    librarian.searchBooks("Mockingbird");

    // Members return books
    console.log("\n--- Returning Books ---");
    member1.returnBook(book1);
    member2.returnBook(book2);

    // Final status after returning
    console.log("\n--- Final Status ---");
    console.log(librarian.toString());
    console.log(member1.toString());
    console.log(member2.toString());
})();
