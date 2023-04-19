import { useContext } from 'react'
import Nav from '../Utilities/Nav'
import { BookContext } from '../Reading-List/BookContext';
import { Link } from 'react-router-dom';
import BookForm from '../Reading-List/BookForm';
import { useState } from 'react';
import ContactActionButton from '../Utilities/ContactActionButton';

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
        <ContactActionButton />
        <div>
          <div>
            <h2 >Reading List Application</h2>
            <h3>Functionality...</h3>
            <p >This is a reading list application created with the aim to show a combination of skills: Though this is a relatively small application, 
            I have used useContext to create the state for the books you can add a book to this array and within the book detail, you can  update the book information 
           . Additionally, within the book detail page, I have also used the <a href='https://openlibrary.org/dev/docs'>Open Libary API</a> to get information about the author, 
           as well as their top works, if requested.</p>
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