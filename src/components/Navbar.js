import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logoBrand from '../assets/image/debian-logo.png';
import '../style/style.css';

const NavbarComp = () => {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-nav p-3" fixed='top'>
                    <Container fluid>
                        <Navbar.Brand href="/" className='d-flex align-items-center fs-4'>
                            <img src={logoBrand} alt="Logo" width={50} />
                            Debian 11
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="top"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Debian 11
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href='#pengertian' className='text-dark mx-3'>Pengertian</Nav.Link>
                                    <Nav.Link href='#cara-install' className='text-dark mx-3'>Cara Install</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarComp;