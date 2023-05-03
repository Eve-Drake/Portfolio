import { useState } from 'react';
import Nav from '../Utilities/Nav';
import { FaGithubSquare, FaEnvelope} from "react-icons/fa";

function Hire() {
  const [copied, setCopied] = useState(false)
const handleCopy = ()=>{
  navigator.clipboard.writeText('contact.evedrake@gmail.com')
  setCopied(true)
  }
  return (
    <div className='contact-me'>
      <Nav />
        <p>Want to Get in Touch?</p>
        <div className='contactIcons'> <span ><FaGithubSquare className='icon'/></span> <span ><FaEnvelope className='icon'/></span> </div>
        <p>Or Contact me on: <span onClick={handleCopy} className='email'>contact.evedrake@gmail.com</span></p>

        {copied? 'Email Copied! I look foward to heaing from you': ''}
        
    </div>
  );
}

export default Hire;