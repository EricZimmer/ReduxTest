export function selectBook(book) {
  //selectBook is an ActionCreator, it needs to reutn an action, an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}