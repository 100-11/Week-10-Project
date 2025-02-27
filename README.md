﻿# Week-10-Project
### **Summary of Library Management System Project**

The **Library Management System** project is a simple yet functional system built using **Object-Oriented Programming (OOP)** principles in **JavaScript**. It demonstrates key OOP concepts such as **encapsulation**, **inheritance**, **polymorphism**, and **abstraction** through classes and objects. The system is designed to simulate the operations of a library, managing books and user interactions.

#### **Core Components of the System**:

1. **Book Class**: 
   - Represents a book in the library with attributes like `title`, `author`, `ISBN`, and `availability`.
   - Encapsulates book availability with getter and setter methods to ensure proper access and modification.

2. **Member Class**: 
   - Represents a library member with attributes like `name`, `member ID`, and `borrowed books`.
   - Includes a method for borrowing books from the library.

3. **Librarian Class**: 
   - Inherits from the `Member` class and extends its functionality.
   - Has additional responsibilities like adding/removing books from the library's collection and checking the availability of books.
   - Demonstrates inheritance and the ability to extend the functionality of a base class.
   
4. **Encapsulation**: 
   - The `Book` and `Member` classes hide the internal details (like availability status and borrowed books) and expose only necessary methods (getters and setters) for interaction.

5. **Polymorphism**:
   - The `borrowBook` method behaves differently for `Member` and `Librarian` objects. While members can only borrow books, librarians can add, remove, and check availability of books.

6. **Optional Search Feature**:
   - Members can search for books by title or author, further enhancing the user experience.

#### **Key Functionalities**:

- **Add/Remove Books**: The librarian can add new books to the library and remove them when necessary.
- **Borrow/Return Books**: Members can borrow books if they are available and return them after use.
- **Search for Books**: Members can search for books by title or author to find available resources.
- **Availability Check**: The librarian can check if a book is available for borrowing.

#### **Conclusion**:
This project illustrates the application of OOP principles in creating a structured and maintainable system for managing books and users in a library. The system is modular and scalable, with clear separation of responsibilities between members and librarians. It also shows how object-oriented concepts like inheritance, encapsulation, and polymorphism can be used effectively in JavaScript to model real-world scenarios.
