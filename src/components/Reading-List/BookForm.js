import {  useContext, useState} from 'react'
import * as React from 'react';
import { BookContext } from './BookContext';



const BookForm = () => {
  const [books, setBooks] = useContext(BookContext);

  const [showForm, setShowForm] = useState(true)

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [pages, setPages] = useState();
  const [totalPages, setTotalPages] = useState();
  const [newId, setNewId] = useState(Math.floor(Math.random()*1000))
  

  const handleSubmit = (e) =>{
    e.preventDefault();
    setNewId(newId+1)//prevents repeat ids
    setBooks([...books, {title: title, author: author, genre: genre, pages: pages, currentPage: totalPages, id : newId}]);
    setAuthor('');
    setTitle('');
    setGenre('');
    setPages('');
    setTotalPages('');
  }

  return (
    <>
    <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Close Form' : 'Add Book'}</button>
      
    <form onSubmit={handleSubmit} className={showForm? 'reading-list-form-container' : 'hidden'}>
      
      <div>
        <label htmlFor='title'>Title</label>
        <input 
          type='text'
          value ={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>      
      
      <div>
        <label htmlFor='author'>Author</label>
        <input  
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />        
      </div>

      <div>
        <label htmlFor='genre'>Genre</label>
        <input
          type='text'
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />  
      </div>

      <div>
        <label htmlFor='pages'>Current Page</label>
        <input
          type='number'
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
      </div>
            
      <div>
        <label htmlFor='totalPages'>Total Pages</label>
        <input 
          type='number'
          value={totalPages}
          onChange={(e) => setTotalPages(e.target.value)}
        />
      </div>   
   
      <button type='submit'variant="contained">Submit</button>
    </form>
      


      </>
  )
}

export default BookForm