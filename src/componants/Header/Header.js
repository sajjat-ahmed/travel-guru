import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../Logo.png'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <Navbar  expand="lg" className="navbar">
                <Link to="/home">
                    <Navbar.Brand href="#home"><img className="header__logo" src={Logo} alt=""/></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                        <FormControl type="text" placeholder="Search destination" className="mr-sm-2 search__input" />
                        <div className="search-icon-div">
                            <SearchIcon className="search-icon"></SearchIcon>
                        </div>
                    </Form>
                    <Nav className="ml-auto header__nav">
                        <Nav.Link className="header__nav" href="#home">News</Nav.Link>
                        <Nav.Link className="header__nav" href="#">Destination</Nav.Link>
                        <Nav.Link className="header__nav" href="#home">Blog</Nav.Link>
                        <Nav.Link className="header__nav" href="#link">Contact</Nav.Link>
                        <Link to="/login">
                             <Nav.Link href="#home" className="header_button header__nav">Login</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;