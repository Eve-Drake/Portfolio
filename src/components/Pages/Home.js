import {Box, Button, Card, CardContent, Grid, Typography, } from '@mui/material';
import Nav from '../Utilities/Nav';
import AnimatedCoder from '../Utilities/AnimatedCoder'
import Paper from '@mui/material/Paper'
import { Container } from '@mui/system';
import { theme } from '../../themes/Theme';
import Divider from '@mui/material/Divider';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import ContactActionButton from '../Utilities/ContactActionButton';

const Home = () => {
    return (  
		<div className='home'>
			<Nav />
			<ContactActionButton />
			{/*Hero page with motion animation */}
			<div className='hero' style={{
				backgroundImage: "url(" + "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" + ")",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
				alignItems: "center",
				display: 'flex',
				justifyContent: 'center', 
			}}>
				
				<Grid container sx={{
					justifyContent: "center", 
					display: "flex",
					p: 15
					}}>
					<Grid item sm={12} md={6}>
						<Container sx={{
							textAlign: "center"
						}}>
								<motion.div animate={{color: theme.palette.primary.contrastText, background: theme.palette.primary.main, borderRadius: '15px'}}>
									<Typography variant="h1">Eve Drake</Typography>
								
									<Divider light variant='middle'  sx={{
										"&::before, &::after":{
											borderColor: theme.palette.primary.contrastText
										}
									}}>
										BSc (Hons) CITS
									</Divider>
									<Typography variant='h3'>Web Development</Typography>
									<Typography variant='subtitle1' gutterBottom >Thank you for your interest. On this site, I aim to show my key web development skills through a variety of recent projects</Typography>
								</motion.div>
								
								<motion.div 
									animate={{y: 20, scale: 1.3}}
									whileHover={{scale: 1.4, color: theme.palette.secondary.contrastText}}>
									<Button component={Link} to="ContactMe" variant='contained' size='large' color='secondary' >Further Questions? Contact Me</Button>
								</motion.div>
						</Container>
					</Grid>

					<Grid item md={5} sx={{
						display: "flex",
						justifyContent:"center"
					}}>
							<Box sx={{ display: {xs: 'none', sm: 'none', md: 'flex' } }}>
								<img  style={{width:"250px"}}src='https://www.svgrepo.com/show/250446/coding-html.svg' alt='Orange </>'></img>
							</Box>
					</Grid>
				</Grid>
			</div>

			{/*Body */}
			<Grid container sx={{p:6}}>
					<Grid item md={7}>
						<Typography variant='h3'>Hi...</Typography>
						<Typography variant='h4'>Personal Statement</Typography>
						<Typography variant='body1'>
							Having completed my academic studies, I am now looking forward to continuing improving my front end development skills in a 
							professional environment. From my studies, I have gained in depth knowledge of front end web development, object oriented 
							programming and programming principles such as creating reactive web pages that have a user centred design while following 
							accessibility guidelines and principles.
						</Typography>
						<Typography variant='body2'>
							I have studied through the Open University, allowing me to gain many transferable skills such as problem solving, personal 
							accountability, reliability and time management during independent learning or while working alongside my peers. This experience 
							has meant I have been able to develop my skills through focusing on what I needed to practice, catering my learning 
							to my strengths. While my studies are now complete,  having gained a BSc with Honours in Computing, IT and Design, I have since 
							spent time developing new skills using frameworks, libraries or languages I lacked experience in. Additionally, I have conducted 
							freelance work, creating a B2B company website for <a href='https://wadebuildingservices.co.uk/'>Wade Building Services</a>. To do this, 
							I worked  alongside a sales department 
							(to determine branding) and technical department (for functional aspects), giving me the experience of handling multiple stakeholders 
							throughout a project.
						</Typography>
					</Grid>
					
					<Grid item md={5} sx={{
						display: {md: "flex", xs: 'none'}, 
						alignItems: 'center', 
						pl: {md: 12, sx: 10}, }}>
						<AnimatedCoder />
					</Grid>
			</Grid>

			{/*Cards */}
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

			{/*Footer */}
				<Box sx={{
					width: "100%",
					backgroundColor: 'primary.dark',
					mt: 5,
					height: "50px"}}>
				</Box>
				
		</div>
     );
}
 
export default Home;