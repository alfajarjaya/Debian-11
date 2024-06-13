import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import feather from 'feather-icons';

const Footer = () => {
    useEffect(() => {
        feather.replace();
    })

    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About This Site</h5>
                        <p>This website provides comprehensive guides and tutorials for installing Debian 11 Linux.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#pengertian" className="text-light">Pengertian</a></li>
                            <li><a href="#cara-install" className="text-light">Cara Install</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>About the Creator</h5>
                        <p>Developed by Alfajjar, only a student who likes to play with computers</p>
                        <div>
                            <a href="https://alfajjar.vercel.app" target="_blank" rel="noreferrer" className="text-light me-3">
                                <i data-feather="globe"></i>
                            </a>
                            <a href="https://github.com/alfajarjaya" target="_blank" rel="noreferrer" className="text-light me-3">
                                <i data-feather="github"></i>
                            </a>
                            <a href="https://instagram.com/bang_jarrrz" target="_blank" rel="noreferrer" className="text-light">
                                <i data-feather="instagram"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <p>&copy; 2024 Debian Installation Guide. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
