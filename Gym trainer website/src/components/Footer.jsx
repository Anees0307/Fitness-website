import React from 'react';
import './Footer.css';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            SCULPT
          </Link>
        </div>
        <p className='footer-subscription-text'>
          Join our newsletter to receive the latest updates and offers
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>How it works</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/terms'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/services'>
              Services: <CallIcon className='iiii' /> 91+ 9332854021
            </Link>
            <Link to='/queries'>
              Queries: <CallIcon className='iiii' /> 91+ 9998882341
            </Link>
            <Link to='/email'>
              <MailIcon className='iiii' /> Email: sculpt@gmail.com
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/instagram'>
              <InstagramIcon /> Instagram
            </Link>
            <Link to='/facebook'>
              <FacebookIcon /> Facebook
            </Link>
            <Link to='/twitter'>
              <TwitterIcon /> Twitter
            </Link>
          </div>
        </div>
      </div>
      <div className='country-list'>
        <h4>
          Australia &nbsp;&nbsp;&nbsp;&nbsp; France &nbsp;&nbsp;&nbsp;&nbsp;
          Germany &nbsp;&nbsp;&nbsp;&nbsp;
          Japan &nbsp;&nbsp;&nbsp;&nbsp;
          Poland &nbsp;&nbsp;&nbsp;&nbsp;
          United Kingdom &nbsp;&nbsp;&nbsp;&nbsp; United States
        </h4>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='website-rights'>SCULPT © 2024</div>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/facebook'
              aria-label='Facebook'
            >
              <FacebookIcon />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/instagram'
              aria-label='Instagram'
            >
              <InstagramIcon />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/twitter'
              aria-label='Twitter'
            >
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
