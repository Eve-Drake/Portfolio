
import { Card, CardContent, Grid, Typography, Box, Avatar, TextField, Snackbar, Button, Divider } from '@mui/material';
import { Container } from '@mui/system';
import Nav from '../Utilities/Nav';
import { theme } from '../../themes/Theme';
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
    <Box >
      <Nav />
      <Container sx={{display: 'flex', justifyContent: 'center', p: {md: 5, sm: 1}}}>
        <Card sx={{width: {md: '40vw', sm: '90vh'}, borderRadius:1, border: 1}}>
          <CardContent sx={{backgroundColor: theme.palette.primary.light, }}>
            <Grid container>
              <Box sx={{alignItems: 'center', margin: 'auto', display: {md: 'block', sm:'none'}}}>
                <Avatar src='https://www.svgrepo.com/show/250446/coding-html.svg' alt='orange </>'/>
              </Box>
              <Grid item md={12}>
                <Typography align='center' gutterBottom variant='h3' component='div'>Eve Drake</Typography>
              </Grid>

              <Grid item md={12} >
                <Typography align='center'gutterBottom variant='body 1' component='div' >contact.evedrake@gmail.com</Typography>
              </Grid>

              <Grid item md={12}>
                <form onSubmit={onSubmit} >
                  <TextField label='Your Name'sx={{mx:3, width: '88%', my: 1}}
                    type='text'
                    name='from_name'
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                  <TextField label='Your Email' sx={{mx: 3,  width: '88%', my: 1}}
                    type='text'
                    name='reply_to'
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                  
                  <TextField multiline minRows={5} label='Enter your Message' sx={{mx: 3, my:1, width: '88%', pb: 3,}} 
                    type='textarea'
                    name='message'
                    value={toSend.message}
                    onChange={handleChange}
                  />
                  <Button fullWidth variant='outlined' type='submit' >Submit</Button>
                </form>

              </Grid>

              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Thank you. Message Sent"
                />
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Hire;