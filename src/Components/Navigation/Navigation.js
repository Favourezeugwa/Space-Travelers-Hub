import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import Logo from './planet.png';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="ps-3">Space-Travelers-Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#rockets">Rockets</Nav.Link>
            <Nav.Link href="#missions">Missions</Nav.Link>
            <Nav.Link href="#my profile">My profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
