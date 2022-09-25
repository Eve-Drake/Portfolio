import React from 'react';
import {Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion'

const BuildingThisWebsite = () => {
  return (
    <Container>
		<Typography variant='h4' sx={{textAlign: 'center', p: 1}}>Building This Website</Typography>
			<Grid container sx={{
			    display: "flex",
				alignItems: 'center',
				justifyContent: "center"
			}}>
					<Grid item md={4}  sx={{p:1}}>
							<motion.div whileHover={{y: 5, scale: 1.05}}>
							<Card >
								<CardContent sx={{border: 1, borderColor: 'secondary.dark', backgroundColor: 'primary.light', borderRadius: '5px'}}>
									<Typography gutterBottom variant='h5'>Core Structures</Typography>
									<Typography variant='body2'>
										As with all websites, the initial building blocks started with HTML. 
										This however, is minimal in comparison to the other technologies used.
									</Typography>
								</CardContent>	
							</Card>
							</motion.div>					
						</Grid>

						<Grid item md={4} sx={{p:1}}>
						<motion.div whileHover={{y: 5, scale: 1.05}}>
							<Card>
								<CardContent sx={{border: 1, borderColor: 'secondary.dark', backgroundColor: 'primary.light', borderRadius: '5px'}}>
									<Typography gutterBottom variant='h5'>Functionality</Typography>
									<Typography variant='body2'>
									Most importantly, the functionality of this website is built from react. All functional objects you find on this 
											sites pages are build from the React.js library alongside it's various hooks.
									</Typography>
								</CardContent>
							</Card>
						</motion.div>
						</Grid>

						<Grid item md={4} sx={{p:1}}>
						<motion.div whileHover={{y: 5, scale: 1.05}}>
							<Card>
								<CardContent sx={{border: 1, borderColor: 'secondary.dark', backgroundColor: 'primary.light', borderRadius: '5px'}}>
									<Typography gutterBottom variant='h5'>Styling</Typography>
									<Typography variant='body2'>
										This website has been styled though a mix of SCSS (with use of a live compilation extension) as 
										well as MUI and framer motion library components.
									</Typography>
								</CardContent>
							</Card>
						</motion.div>
						</Grid>
					</Grid>
				</Container>

  )
}

export default BuildingThisWebsite