import {  useContext, useState} from 'react'
import * as React from 'react';
import { Button, Box} from '@mui/material'
import { BookContext } from './BookContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const BookForm = () => {
  const [books, setBooks] = useContext(BookContext);

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [genre, setGenre] = useState();
  const [pages, setPages] = useState();
  const [totalPages, setTotalPages] = useState();
  const [newId, setNewId] = useState(Math.floor(Math.random()*1000))

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const close = (event, reason) =>{
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setNewId(newId+1)//prevents repeat ids
    setBooks([...books, {title: title, author: author, genre: genre, pages: pages, currentPage: totalPages, id : newId}]);
    setAlertOpen(true)
    setAuthor('');
    setTitle('');
    setGenre('');
    setPages('');
    setTotalPages('');
  }

  return (
    <div>
      <Box sx={{
        p: 1, 
        width: '20%',
        display: "flex",
				justifyContent:"center" }}>
          <form onSubmit={handleSubmit} >
            <label htmlFor='title'>Title</label>
              <input 
              type='text'
              value ={title}
              onChange={(e) => setTitle(e.target.value)}
              />

            <label htmlFor='author'>Author</label>
              <input  
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
            
            <label htmlFor='genre'>Genre</label>
              <input
              type='text'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              />  

            <label htmlFor='pages'>Current Page</label>
              <input
                type='number'
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                />

            <label htmlFor='totalPages'>Total Pages</label>
              <input 
                type='number'
                value={totalPages}
                onChange={(e) => setTotalPages(e.target.value)}
                />
                <Button type='submit'variant="contained">Submit</Button>
            </form>
      </Box>

      <Snackbar open={alertOpen} autoHideDuration={5000} onClose={close}>
        <Alert onClose={close} severity="success" sx={{ width: '100%' }}>
          Book Added!
        </Alert>
      </Snackbar>

      </div>
  )
}

export default BookForm