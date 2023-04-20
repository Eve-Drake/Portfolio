import *  as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";


const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <button className='nav-button' onClick={() => setOpenMenu(!openMenu)}><GrMenu /></button>
      <nav className={openMenu ? 'nav' : 'hidden'}>
        <button><GrClose /></button>
      </nav>
    </>
  );
};
export default Nav;
