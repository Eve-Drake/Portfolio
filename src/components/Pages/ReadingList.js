import { useContext } from 'react'
import Nav from '../Utilities/Nav'
import { BookContext } from '../Reading-List/BookContext';
import { Link } from 'react-router-dom';
import BookForm from '../Reading-List/BookForm';

const ReadingList = () => {
  const [books] = useContext(BookContext);

  return (
      <div className='reading-list'>
        <Nav /> 
        
        <div className='reading-list-heading'>
          <h2 >Reading List <span className='bold'>Application</span> </h2>
          <p >This reading list application showcases a variety of my skills, despite its relatively small size. I utilized the useContext hook to manage the state of the books, allowing users to add new books to the array and update existing book information from the book detail page. Additionally, within the book detail page, I have also used the 
          the <a href='https://openlibrary.org/dev/docs'>Open Libary API</a> to retrieve additional information about the book's author and their top works upon request, enhancing the user's experience.</p>
        </div>
        <BookForm />  
        
        
        <div>
          {books.map((book)=>
            <Link key={book.id} to={`book/${book.id}`}>
              <div>
                <ul>
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