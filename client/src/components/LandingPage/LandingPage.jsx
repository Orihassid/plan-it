/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import MultiStepDialog from '../MultiStepDialog/MultiStepDialog'
import "./LandingPage.css"
//import { Button } from './Button';
import { Link } from 'react-router-dom';
import video_logo from '../../images/picnic-logo.mp4';
import app_logo from '../../images/app-logo.png';
import AboutUsCards from '../AboutUsCards/AboutUsCards';
import Footer from '../Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LoginLogout from '../LoginLogout/LoginLogout'
import arrow from '../../images/white_arrow.gif'

const LandingPage = () => {
  const [isCreateEventClicked, setIsCreateEventClicked] = useState(false);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    
    showButton();
    Aos.init();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <video src={video_logo} autoPlay loop muted></video>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Plan it.
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/my-events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Events
              </Link>
            </li>

            <li className='nav-item'>
              <LoginLogout />
            </li>  
          </ul>
 
        </div>
        <div className="App">
          {isCreateEventClicked && <MultiStepDialog setIsCreateEventClicked={setIsCreateEventClicked} />}
          <div className="header-text-center">
            <button
              className="createplan"
              onClick={() => setIsCreateEventClicked(true)}>
              Plan your next event <img className='arrow-container' height={40} width={40} alt='next' src={arrow}></img>
            </button>
          </div>
        </div>
      </nav>
      <AboutUsCards/>
      <Footer/>
    </>
  );

}

export default LandingPage;
