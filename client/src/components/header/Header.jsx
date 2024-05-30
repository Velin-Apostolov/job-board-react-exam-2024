import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navbar-container'>
        {/* TODO: Import image as logo for JOBS BG, Navbar.Brand with HREF act as an <a> element */}
        <Link className='home' to='/'>JobFind</Link>
        <Nav className="me-auto navbar-nav">
          <Link to='/offers' className='nav-link'>Offers</Link>
          <div id='user'>
            <Link to='/create' className='nav-link'>Create Offer</Link>
            <Link to='/profile' className='nav-link'>My Profile</Link>
            <Link to='/logout' className='nav-link'>Logout</Link>
          </div>
          <div id='guest'>
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/register' className='nav-link'>Register</Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;