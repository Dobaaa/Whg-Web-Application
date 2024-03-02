import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import Logo from "../Asests/wahglogo.png";

function Navs() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Nav-bg ">
      <Container className="container">
        <Navbar.Brand href="#home" className="title-logo">
          <img src={Logo} className="logo" />
          وَهَجٌ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex gap-5  ">
            <NavDropdown
              title={<span className="link">Service</span>}
              id="collapsible-nav-dropdown "
              className="link"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features" className="link">
              Venues
            </Nav.Link>
            <Nav.Link href="#pricing" className="link">
              Dresses
            </Nav.Link>
            <Nav.Link href="#pricing" className="link">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="link">
              List
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="Nav-btn ">
              Enter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
