import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* TODO: Import image as logo for JOBS BG, Navbar.Brand with HREF act as an <a> element */}
        <Navbar.Brand href="/">JobsBG</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/offers">Job Offers</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;