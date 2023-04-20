import Nav from '../Utilities/Nav';
import { Link } from 'react-router-dom';
import ContactActionButton from '../Utilities/ContactActionButton';

const Home = () => {
    return (  
		<main className='landing-page'>
			<Nav />
			<div className='heading'>
				<h1>Captivating Code</h1>
				<h1>Delightful Design</h1>
			</div>
			
			<h2 className='landing-left'><span className='bold'>Eve Drake</span> Frontend Web Development</h2>	
			<ContactActionButton />
		</main>
     );
}
 
export default Home;