import React, {useState} from 'react'
import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
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
                        <Navbar.Brand><Link to='/'>Podcast</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                                <Nav.Link><Link to='/episodes'>Episodes</Link></Nav.Link>
                                <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                                <Nav.Link><Link to='/contacts'>Contacts</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Button variant='primary'
                                        className='mr-2'
                                        onClick={handleShow}>Log In</Button>
                                <Button variant='danger'
                                        onClick={handleShow}>Log Out</Button>
                            </Nav>
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