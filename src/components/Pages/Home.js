
import Nav from '../Utilities/Nav';
import { theme } from '../../themes/Theme';
import { Link } from 'react-router-dom';
import ContactActionButton from '../Utilities/ContactActionButton';

const Home = () => {
    return (  
		<div className='home'>
			<Nav />
			<ContactActionButton />
			{/*Hero page with motion animation */}
			<div className='hero' >
				
				<span >
					<span>
						<div>
								<div animate={{color: theme.palette.primary.contrastText, background: theme.palette.primary.main, borderRadius: '15px'}}>
									<h1>Eve Drake</h1>
								
									
										BSc (Hons) CITS
									
									<h3>Web Development</h3>
									<h4>Thank you for your interest. On this site, I aim to show my key web development skills through a variety of recent projects</h4>
								</div>
								
								<div 
									animate={{y: 20, scale: 1.3}}
									whileHover={{scale: 1.4, color: theme.palette.secondary.contrastText}}>
									<button component={Link} to="ContactMe" variant='contained' size='large' color='secondary' >Further Questions? Contact Me</button>
								</div>
						</div>
					</span>

					<span item md={5} sx={{
						display: "flex",
						justifyContent:"center"
					}}>
							<div sx={{ display: {xs: 'none', sm: 'none', md: 'flex' } }}>
								<img  style={{width:"250px"}}src='https://www.svgrepo.com/show/250446/coding-html.svg' alt='Orange </>'></img>
							</div>
					</span>
				</span>
			</div>

			{/*Body */}
			<span div sx={{p:6}}>
					<span item md={7}>
						<h3>Hi...</h3>
						<h4>Personal Statement</h4>
						<p>
							Having completed my academic studies, I am now looking forward to continuing improving my front end development skills in a 
							professional environment. From my studies, I have gained in depth knowledge of front end web development, object oriented 
							programming and programming principles such as creating reactive web pages that have a user centred design while following 
							accessibility guidelines and principles.
						</p>
						<p>
							I have studied through the Open University, allowing me to gain many transferable skills such as problem solving, personal 
							accountability, reliability and time management during independent learning or while working alongside my peers. This experience 
							has meant I have been able to develop my skills through focusing on what I needed to practice, catering my learning 
							to my strengths. While my studies are now complete,  having gained a BSc with Honours in Computing, IT and Design, I have since 
							spent time developing new skills using frameworks, libraries or languages I lacked experience in. Additionally, I have conducted 
							freelance work, creating a B2B company website for <a href='https://wadebuildingservices.co.uk/'>Wade Building Services</a>. To do this, 
							I worked  alongside a sales department 
							(to determine branding) and technical department (for functional aspects), giving me the experience of handling multiple stakeholders 
							throughout a project.
						</p>
					</span>
					
			</span>


				
		</div>
     );
}
 
export default Home;