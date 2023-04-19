import * as React from 'react';
import ClickCounter from '../SmallProjects/ClickCounter'
import DogAPI from '../SmallProjects/DogAPI';
import WordGenerator from '../SmallProjects/WordGenerator';
import UserGenerator from '../SmallProjects/UserGenerator';
import RandomCard from '../SmallProjects/RandomCard'
import Nav from '../Utilities/Nav';
import ContactActionButton from '../Utilities/ContactActionButton';


const SmallProjectsPage = () => {
    return ( 
        <div className='smallProjectsPage'>
            <Nav />
            <ContactActionButton /> 
            
                <div>
                    <h2 >Explanation</h2>
                    <h3>Functionality...</h3>
                    <p>On this page, I have included a number of smaller basic projects to show an understanding of fundemental factors as well as maintain my skills.
                    These include projects like a click counter, card draw component and a random dog image generator 
                    using the <a href="https://dog.ceo/api/breeds/image/random">dog image API</a>. I am continuing to add 
                    various smaller projects as time goes on with further plans including: Light mode/Dark mode, QR code generator and simple task tracker.  </p>
                </div>
            <div>
                
                  
                    <h4>Click Counter</h4>
                        <ClickCounter />

                    <h4>Word Generator</h4>
                        <WordGenerator />

                    <h4>Dog Image API</h4>
                        <DogAPI />

                    <h4>Random Card</h4>
                        <RandomCard />
                    
                    <h4>Random User</h4>
                        <UserGenerator />

            </div>


        </div>
     );
}
 
export default SmallProjectsPage;