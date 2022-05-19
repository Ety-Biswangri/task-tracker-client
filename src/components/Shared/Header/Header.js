import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{
            backgroundColor: "#132a13"
        }} >
            <Container>
                <Navbar.Brand as={Link} to="/home">Task Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/myTasks">My Tasks</Nav.Link>
                            </>
                        }

                        {
                            user
                                ?
                                <>
                                    <Button style={{ backgroundColor: "lightblue", color: "black", fontWeight: "600" }} onClick={() => signOut(auth)}>Log Out</Button>
                                </>
                                :
                                <Link to="/login"><Button style={{ backgroundColor: "lightblue", color: "black", fontWeight: "600" }}>Login</Button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;