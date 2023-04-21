import *  as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";


const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <>
      <button className='nav-button' onClick={() => setOpenMenu(!openMenu)}>{openMenu? <GrClose /> : <GrMenu />}</button>
      <nav className={openMenu ? 'nav' : 'hidden'}>
        
        <ul>
          <h3><Link to='/' className='link'>Home</Link></h3>
          <li><Link to='/AboutMe' className='link'>About</Link></li>
          <li><Link to='/ShoppingList' className='link'>Shopping List Applications</Link></li>
          <li><Link to='/ReadingList' className='link'>Reading List Application</Link></li>
          <li><Link to='/ContactMe' className='link'>Contact Me</Link></li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
