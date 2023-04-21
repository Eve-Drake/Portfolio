import Nav from '../Utilities/Nav';
import { Link } from 'react-router-dom';
import ContactActionButton from '../Utilities/ContactActionButton';

const Home = () => {
    return (  
		<main className='landing-page'>
			<Nav />
			<div className='heading'>
				<h1 className='heading-left'>Captivating <span className='bold'>Code</span></h1>
				
				<h1 className='heading-right'>Delightful <span className='bold'>Design</span></h1>
			</div>
			<h2 className='landing-p'><span className='bold'>Eve Drake</span>- Frontend Web Development</h2>
				
			<ContactActionButton />
		</main>
     );
}
 
export default Home;