import { useState, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookContext } from './BookContext';
import Nav from '../Utilities/Nav'

const BookDetail = () => {

    const {id} = useParams();

    const [books, setBooks] = useContext(BookContext);

    const [authorUrl] = useState('https://openlibrary.org/search/authors.json?q=');
    const [loading, setLoading] = useState(false);
    
    const [authorInfo, setAuthorInfo] = useState(false);
    const worksUrl = 'https://openlibrary.org/authors/';

    //toggle see more

    const getAuthorInfo = () =>{

    }
    
  return (
    <div className='reading-list-book-detail'>
        <Nav />
        <h1> Book Detail</h1>
        <Link to='/ReadingList' className='link'>Back</Link>

        <div >
            <h2 >{books[id].title}</h2>
            <h5 >Genre: {books[id].genres}</h5>
            <h3 >By {books[id].author}</h3>
        </div>
                    
        <button onClick={getAuthorInfo}>Learn More</button>
    </div>
        
    
  )
}

export default BookDetail