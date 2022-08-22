import { Fab } from '@mui/material'
import React from 'react'
import { BiComment } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ContactActionButton = () => {
  return (
    <div>
        <Fab component={Link} to='/ContactMe'color="secondary" aria-label="contact" sx={{ margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed',
            }}>
            <BiComment/>
        </Fab>
    </div>
  )
}

export default ContactActionButton