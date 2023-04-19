import { useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from './BookContext';
import { useNavigate } from "react-router-dom";
import ContactActionButton from '../Utilities/ContactActionButton';
import Nav from '../Utilities/Nav'

const BookDetail = () => {

    const {id} = useParams();

    const [books, setBooks] = useContext(BookContext);
    const [book, setBook] = useState({});
    
    useEffect(()=>{
        for ( let i = 0; i < books.length; i++){
            if (books[i].id === id){
                setBook(books[i])
            }
        }
    },[books]);

    const nav = useNavigate();

    const [authorUrl] = useState('https://openlibrary.org/search/authors.json?q=');
    const [loading, setLoading] = useState(false);
    
    //Author Info 
    const [authorInfo, setAuthorInfo] = useState(false);
    const worksUrl = 'https://openlibrary.org/authors/';
    const [olId, setOlId] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [topWork, setTopWork] = useState('')
    const [numWorks, setNumWorks] = useState(0)
    const [works, setWorks] = useState([])
    

    //toggle see more
    const [more, setMore] = useState(false)



    async function handleInfo(){
        setLoading(true);
        let trimAuthor  = book.author.replace(/\s/g, '+')
        const response = await fetch(authorUrl + trimAuthor);
        const data = await response.json();
        const item = data.docs[1];

        //set author info
        setAuthorInfo(true);
        setOlId(item.key);
        setBirthDate(item.birth_date);
        setTopWork(item.top_work);
        setNumWorks(item.work_count);
        setMore(true);
        setLoading(false);

    }

    async function handleMore(){
        const workResp = await fetch(worksUrl + olId + '/works.json?limit=10')
        const worksData = await workResp.json();
        setWorks(worksData.entries);
        console.log(works)
        setLoading(false)
    }

    const handleDelete = () =>{
        let index = books.indexOf(book);
        if (index > -1){
            books.splice(index, 1)
        }
        nav(-1)
    }
    
  return (
    <div>
        <Nav />
        <ContactActionButton />
        <div>
            <h1> Book Detail</h1>
            <div>
                <span div>
                    <span >
                        <button>Back</button>
                        <button>Delete</button>
                    </span>

                    <span >
                        <h2 >{book.title}</h2>
                        <h5 >Genre: {book.genres}</h5>
                        <h3 >By {book.author}</h3>
                    </span>
                    <span >
                        Progress
                    </span>
                    <span >
                        <button>Author Info</button>
                            {authorInfo && 
                                <div>
                                    <div>
                                        <p>Birth Year: {birthDate}</p>
                                        <p>Bestselling Work: {topWork}</p>
                                        <p>Total Number of Works: {numWorks}</p>
                                    </div>    
                                </div>
                            }
                            {more &&
                                <div>
                                    <button onClick={handleMore}>View More Works?</button>
                                    <span>
                                        {works.map((work)=>
                                            <li >{work.title}</li>
                                        )}
                                    </span>
                                </div>
                            } 
                        {loading && <h1>Loading...</h1>}
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default BookDetail