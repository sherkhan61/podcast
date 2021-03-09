import React, {useState} from 'react'
import {Container, Form, Image, Modal, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../logo.svg"
import "./header.css"

export const Header = () => {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <header className="w-100">
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand>
                            <Link to='/'>
                                <Image className="header_logo" alt="logo"
                                       src={logo}/>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <ul className="navbar-nav">
                                <li className="navbar-item active-li">
                                    <Nav.Link><Link to='/'>HOME</Link></Nav.Link>
                                </li>
                                <li className="navbar-item">
                                    <Nav.Link><Link to='/episodes'>EPISODES</Link></Nav.Link>
                                </li>
                                <li className="navbar-item">
                                    <Nav.Link><Link to='/blog'>BLOG</Link></Nav.Link>
                                </li>
                                <li className="navbar-item">
                                    <Nav.Link><Link to='/contacts'>CONTACTS</Link></Nav.Link>
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId='fromBasicEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='email@.com'/>
                                <Form.Text className='text-muted'>Lorem ipsum dolor sit amet.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId='fromBasicPassword'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='password'/>
                            </Form.Group>
                            <Form.Group controlId='fromBasicCheckbox'>
                                <Form.Check type='checkbox' label='Remember me'/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    )
}