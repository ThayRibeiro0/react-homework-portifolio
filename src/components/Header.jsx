import Navigation from './Navigation';
import './styles/Header.css';
import Helmet from '../assets/images/helmet.gif';

const Header = () => {
    return ( 
        <header className='header-container'>
            <h1>
                <img 
                    src={Helmet} 
                    alt="Greek Helmet" 
                    className='helmet'
                />
                Thays
                </h1>
            <Navigation />
           
        </header>
     );
}
 
export default Header;