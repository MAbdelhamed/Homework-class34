//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function setBookCover(bookIsbn) {
  if (bookIsbn === '978-0465050659')
    return 'assets/the_design_of_everyday_things.jpg';
  else if (bookIsbn === '978-1617933431')
    return 'assets/the_most_human_human.jpg';
  else return 'assets/the_pragmatic_programmer.jpg';
}

function bookCoverStyle(bookCover) {
  bookCover.style.margin = '1rem';
  bookCover.style.width = '65%';
  bookCover.style.height = '80%';
  bookCover.alt = 'book Cover';
}

function createBookList(books) {
  // TODO your code goes in here, return the ul element
  const bookList = document.createElement('ul');
  for (const book of books) {
    const bookItem = document.createElement('li');
    let bookDescription = document.createElement('p');
    const bookCover = document.createElement('img');
    bookDescription.textContent = `${book.title} - ${book.author}`;
    bookCover.src = setBookCover(book.isbn);
    bookCoverStyle(bookCover);
    bookItem.appendChild(bookDescription);
    bookItem.appendChild(bookCover);

    if (book.alreadyRead) {
      bookItem.style.backgroundColor = 'green';
    } else {
      bookItem.style.backgroundColor = 'red';
    }
    bookItem.style.margin = '1rem';
    bookList.style.listStyleType = 'none';
    bookList.style.display = 'flex';

    bookList.appendChild(bookItem);
  }

  return bookList;
}
console.log(createBookList(myBooks));
const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);