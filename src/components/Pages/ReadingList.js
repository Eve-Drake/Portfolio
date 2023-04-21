import { useContext } from 'react'
import Nav from '../Utilities/Nav'
import { BookContext } from '../Reading-List/BookContext';
import { Link } from 'react-router-dom';
import BookForm from '../Reading-List/BookForm';
import { useState } from 'react';

const ReadingList = () => {
  const [books] = useContext(BookContext);
  const [toggle, setToggle] = useState('none')
  const [addClose, setAddClose] = useState('Add Book')

  const handleClick = () =>{
    (toggle === 'none'  ? setToggle('block'): setToggle('none'));
    (addClose === 'Add Book'? setAddClose('Close'): setAddClose('Add Book'));
  }
  return (
      <div >
        <Nav /> 
        
        <div className='react'>
          <div>
            <h2 >Reading List Application</h2>
            <p >This reading list application showcases a variety of my skills, despite its relatively small size. I utilized the useContext hook to manage the state of the books, allowing users to add new books to the array and update existing book information from the book detail page. Additionally, within the book detail page, I have also used the 
            Moreover, I integrated the Open Library API<a href='https://openlibrary.org/dev/docs'>Open Libary API</a> to retrieve additional information about the book's author and their top works upon request, enhancing the user's experience."</p>
          </div>
        </div>
          <div>
          
          <button onClick={handleClick}>{addClose}</button>
          <div>
            <BookForm />
          </div>

            {books.map((book)=>
              <Link key={book.id} to={`book/${book.id}`}>
                  <div>
                    <ul >
                      <h4>{book.title}</h4>
                      <p>{book.author}</p>
                    </ul>
                  </div>
              </Link>
          )}
          
          
        </div>
      </div>
  )
}

export default ReadingList