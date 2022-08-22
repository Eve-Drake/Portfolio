import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import ContactMe from './components/Pages/ContactMe';
import SmallProjectsPage from './components/Pages/SmallProjectsPage';
import Hire from './components/Pages/ContactMe';
import ShoppingList from './components/Pages/ShoppingList';
import { theme } from './themes/Theme'
import {ThemeProvider} from '@mui/material';

import { BookProvider } from './components/Reading-List/BookContext';
import ReadingList from './components/Pages/ReadingList';
import BookDetail from './components/Reading-List/BookDetail';

function App() {
  return (
    <ThemeProvider theme = {theme}>

      <Router>
        <div className="App">   
          <BookProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/SmallProjectsPage" element={<SmallProjectsPage />}></Route>
              <Route path="/Hire" element={<Hire />}></Route>
              <Route path='/ShoppingList' element={<ShoppingList />}></Route>
              <Route path='/ContactMe' element={<ContactMe />}></Route>
              <Route path='/ReadingList' element={<ReadingList />}></Route>
              <Route path='/ReadingList/book/:id' element={<BookDetail />}></Route>
            </Routes>
          </BookProvider>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
