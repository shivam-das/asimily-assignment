import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from "shards-react";
import {useHistory} from "react-router-dom";

const NavBar = () => {
    const history = useHistory();

    const navigateToEmployees = () => {
        history.push("/employees");
    };

    const navigateToAbout = () => {
        history.push("/about");
    };

    const navigateToHome = () => {
        history.push("/");
    };

    return (
        <Navbar type="dark" theme="dark" expand="md">
            <NavbarBrand onClick={navigateToHome}>
                <HomeIcon />
            </NavbarBrand>
            <Nav navbar>
                <NavItem>
                    <NavLink active onClick={navigateToEmployees}>Employees</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink active onClick={navigateToAbout}>About</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
