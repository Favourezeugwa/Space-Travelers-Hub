import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
// import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
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
            <Nav.Link href="#rockets">
              <NavLink to="/">Rockets</NavLink>
            </Nav.Link>
            <Nav.Link href="#missions">
              <NavLink to="/mission">Missions</NavLink>
            </Nav.Link>
            <Nav.Link href="#myProfile">
              <NavLink to="/myProfile">My Profile</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
