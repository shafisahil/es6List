class Book{
 constructor(title, author, isbn){
     this.title =title;
     this.author = author;
     this.isbn = isbn;
 }
}
class UI{
addBookToList(book){
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);

 
}
showAlert(message, className){

     //create div
  const div = document.createElement('div');
  //add clases
  div.className =  `alert ${className}`
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  //insert alert
  container.insertBefore(div,form)

  setTimeout(function(){
      document.querySelector('.alert').remove();
  }, 3000 );
}
deleteBook(target){
    if(target.className === 'delete'){
  target.parentElement.parentElement.remove();
    }
}
clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
}

document.getElementById('book-form').addEventListener('submit', function(e){
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value
  
    // Instantiate book
    const book = new Book(title, author, isbn);
  
    // Instantiate UI
    const ui = new UI();
    if(title === '' || author == '' || isbn === ''){
        //error alert
        ui.showAlert('please fill in all fields', 'error');
    }else{

        //show sucess
        ui.showAlert('Book Added!', 'success  ')
 // Add book to list
 ui.addBookToList(book);
  
 // Clear fields
 ui.clearFields();

    }
   
   
    e.preventDefault();
  });
  //delete
  document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book REMOVED!')
    e.preventDefault();
  })  
















