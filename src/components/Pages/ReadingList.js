import { useContext } from 'react'
import Nav from '../Utilities/Nav'
import { BookContext } from '../Reading-List/BookContext';
import { Link } from 'react-router-dom';
import BookForm from '../Reading-List/BookForm';
import { Box, Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import { theme } from '../../themes/Theme';
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
        <Paper sx={{
				backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
				borderRadius: "0",
				minHeight: '20vh', 
			  }}>
          <Container>
            <h2 >Reading List Application</h2>
            <h3>Functionality...</h3>
            <p >This is a reading list application created with the aim to show a combination of skills: Though this is a relatively small application, 
            I have used useContext to create the state for the books you can add a book to this array and within the book detail, you can  update the book information 
           . Additionally, within the book detail page, I have also used the <a href='https://openlibrary.org/dev/docs'>Open Libary API</a> to get information about the author, 
           as well as their top works, if requested.</p>
          </Container>
      </Paper>
          <Container>
          
          <Button variant="contained" color="success" onClick={handleClick}>{addClose}</Button>
          <Box sx={{display: toggle, p: 3}}>
            <BookForm />
          </Box>

            {books.map((book)=>
              <Link key={book.id} to={`book/${book.id}`}>
                  <Paper  sx={{p: 1, m: 3, backgroundColor: theme.palette.primary.light}}>
                    <ul >
                      <h4>{book.title}</h4>
                      <p>{book.author}</p>
                    </ul>
                  </Paper>
              </Link>
          )}
          
          
        </Container>
      </div>
  )
}

export default ReadingList