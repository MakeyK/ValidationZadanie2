import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    return (
        <Navbar style={{marginLeft: '40px', marginRight: '40px', borderRadius: '10px', height: '50px'}} bg="info" fixed='top'>
        </Navbar>
    );
});

export default NavBar;