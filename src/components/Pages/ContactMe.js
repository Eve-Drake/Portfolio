import Nav from '../Utilities/Nav';
import React, { useState } from 'react';
import { send } from 'emailjs-com';

function Hire() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_6pp6vos',
      'template_638wrgd',
      toSend,
      'EKQBp2Lom6XwoAEhP'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setOpen(true)
        setToSend({
          from_name: '',
          message: '',
          reply_to: '',})
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div >
      <Nav />
      <div >
        <div>
          <div>
            <span>
              <div>
                <img src='https://www.svgrepo.com/show/250446/coding-html.svg' alt='orange </>'/>
              </div>
              <span>
                <p>Eve Drake</p>
              </span>

              <span>
                <p>contact.evedrake@gmail.com</p>
              </span>

              <span item md={12}>
                <form onSubmit={onSubmit} >
                  <input
                    type='text'
                    name='from_name'
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                  <input
                    type='text'
                    name='reply_to'
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                  
                  <input 
                    type='textarea'
                    name='message'
                    value={toSend.message}
                    onChange={handleChange}
                  />
                  <button>Submit</button>
                </form>

              </span>

              <div
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Thank you. Message Sent"
                />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hire;