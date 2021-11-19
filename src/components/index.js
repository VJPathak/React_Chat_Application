import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbar';
import { GrDrag } from "react-icons/gr";
import color from 'material-ui/colors/amber';
const Navbar = () => {

  const mystyle = {
    fontfamily: "Times New Roman",
    fontSize: 20,
    //backgroundColor: "DodgerBlue", 
  };

  return (
    
    <>
      <Nav> 
        <NavMenu>
          <div style={mystyle}>
            <NavLink to='/extra' activeStyle>
             <GrDrag  />
            </NavLink>
          </div>
          <div style={mystyle}>
            <NavLink to='/chat' activeStyle>
              Chat
            </NavLink>
          </div>
          <div style={mystyle}>
            <NavLink to='/status' activeStyle>
              Status
            </NavLink>
          </div>
          <div style={mystyle}>
            <NavLink to='/friends' activeStyle>
              Friend Request
            </NavLink>
          </div>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;