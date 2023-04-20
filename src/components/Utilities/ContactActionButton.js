
import React from 'react'
import { Link } from 'react-router-dom';

const ContactActionButton = () => {
  return (
    <button component={Link} to="ContactMe" variant='contained' size='large' color='secondary' >Contact Me</button>
  )
}

export default ContactActionButton