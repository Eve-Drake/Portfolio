import * as React from 'react';
import ClickCounter from '../SmallProjects/ClickCounter'
import DogAPI from '../SmallProjects/DogAPI';
import WordGenerator from '../SmallProjects/WordGenerator';
import UserGenerator from '../SmallProjects/UserGenerator';
import RandomCard from '../SmallProjects/RandomCard'
import Nav from '../Utilities/Nav';
import { Container } from '@mui/system';
import { Stack, Divider, Paper, Typography } from '@mui/material';
import { theme } from '../../themes/Theme';
import ContactActionButton from '../Utilities/ContactActionButton';


const SmallProjectsPage = () => {
    return ( 
        <div className='smallProjectsPage'>
            <Nav />
            <ContactActionButton /> 
            <Paper sx={{
				backgroundColor: theme.palette.primary.dark,
                color: theme.palette.primary.contrastText,
				borderRadius: "0",
				minHeight: '20vh', 
                pb: 2
			    }}>
                <Container>
                    <h2 >Explanation</h2>
                    <h3>Functionality...</h3>
                    <Typography variant='body1'>On this page, I have included a number of smaller basic projects to show an understanding of fundemental factors as well as maintain my skills.
                    These include projects like a click counter, basic expense tracker and a random dog image generator 
                    using the <a href="https://dog.ceo/api/breeds/image/random">dog image API</a>. I am continuing to add 
                    various smaller projects as time goes on with further plans including: Light mode/Dark mode, QR code generator and simple task tracker.  </Typography>
                </Container>
            </Paper>
            <Container>
                <Stack 
                    sx={{p:5, display: 'flex', justifyContent: 'center', alignItems: 'center',}} 
                    divider={<Divider orientation="horizontal" flexItem />}
                    spacing={{md:4}}>
                        
                    <Typography variant='h4'>Click Counter</Typography>
                        <ClickCounter />

                    <Typography variant='h4'>Word Generator</Typography>
                        <WordGenerator />

                    <Typography variant='h4'>Dog Image API</Typography>
                        <DogAPI />

                    <Typography variant='h4'>Random Card</Typography>
                        <RandomCard />
                    
                    <Typography variant='h4'>Random User</Typography>
                        <UserGenerator />
                </Stack>

            </Container>


        </div>
     );
}
 
export default SmallProjectsPage;