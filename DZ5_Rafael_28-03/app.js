 const arr = [3,4,5,44,55,23,34,12,26,67,77,75,98,67]
 const arrNumber = arr.filter((i => i % 2 !== 0))
 console.log(arrNumber)

 // function printBooksWithLetterU(books) {
 //  const booksWithLetterU = [];
 //  const otherBooks = [];
 //
 //  books.forEach(i => {
 //   if (i.toUpperCase().includes('у')) {
 //    booksWithLetterU.push(i);
 //   } else {
 //    otherBooks.push(i);
 //   }
 //  });
 //
 //  console.log('Книги с буквой "у":');
 //  booksWithLetterU.forEach(book => console.log(book));
 //
 //  console.log('Остальные книги:');
 //  otherBooks.forEach(book => console.log(book));
 // }
 // const books = ['JavaScript: The Good Parts', 'Eloquent JavaScript', 'You Don\'t Know JS', 'The Hitchhiker\'s Guide to the Galaxy', 'The Lord of the Rings', 'The Da Vinci Code', 'The Great Gatsby'];
 // printBooksWithLetterU(books);


 function filterBooks(...books) {
  const booksWithY = []
  const otherBooks = []
  for (const book of books) {
   if (book.toLowerCase().includes('y')) {
    booksWithY.push(book)
   } else {
    otherBooks.push(book)
   }
  }
  return [booksWithY, otherBooks]
 }

 const books = ['Harry Potter', 'Lord of the Rings', 'Pride and Prejudice', 'The Great Gatsby', 'To Kill a Mockingbird'];
 const [booksWithY, otherBooks] = filterBooks(...books)
 console.log('Книги с буквой "y":', booksWithY)
 console.log('Остальные книги:', otherBooks)