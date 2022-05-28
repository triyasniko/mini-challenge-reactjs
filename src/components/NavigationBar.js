import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, Link } from "react-router-dom";

const NavigationBar=(props)=>{
     //assigning location variable
     const location = useLocation();
     //destructuring pathname from location
     const { pathname } = location;
     //Javascript split method to get the name of the path in array
     const splitLocation = pathname.split("/");

    return(
        <Row>
            <Col md={12} >
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid className='px-5'>
                    <Navbar.Brand href="/" className="pr-5">SitusNews</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/" activeClassName="active">Home</Nav.Link>
                        <Nav.Link href="/news" activeClassName="active">News</Nav.Link> */}
                        <li className={splitLocation[1] === "" ? "active" : ""}>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className={splitLocation[1] === "news" ? "active" : ""}>
                            <Link className='nav-link' to='/news'>News</Link>
                        </li>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Col>
        </Row>
    )
}
export default NavigationBar;