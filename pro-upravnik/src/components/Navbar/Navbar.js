import React, {useState} from 'react';
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks} from './Navbar.styled';
import slika from '../../imgs/NoviSad.jpg'
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)


    return (
        <> 
        {/* <img src={slika} alt="slika" style={{height:"90vh", width:"100%", margin:"0px", padding:"0px", bottom:0}}/> */}
         <IconContext.Provider value={{color: "#fff"}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                      <NavIcon />
                        PRO UPRAVNIK ZGRADA
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Početna
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/galerija'>
                                Galerija
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/kontakt'>
                                Kontakt
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
         </IconContext.Provider>
        </>
    )
}

export default Navbar
