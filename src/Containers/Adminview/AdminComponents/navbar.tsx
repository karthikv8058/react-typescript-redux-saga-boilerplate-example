import React,{createRef, RefObject} from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { connect } from 'react-redux';
import { Link, withRouter,useHistory,Redirect } from 'react-router-dom';

import profile_pic from '../assets/img/img_avatar.png';
import '../assets/scss/style.scss';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {Navbar,Nav,NavDropdown,Form,Button,FormControl}  from 'react-bootstrap';
import { logout } from '../../../utils/logOutAll';


const Navbartop = (props:any) => {

  const history = useHistory();
  const MySwal = withReactContent(Swal);

  const notificationRef:RefObject<HTMLInputElement> = createRef();
  const profileRef:RefObject<HTMLInputElement> = createRef();


  const handleLogout = () => {

      Swal.fire({
        title: 'Are you leaving?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#96bd2a',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          console.log('logout');
          logout();
          history.push('/');
        }
      })
  }


    return (
      
      <Nav className="ml-auto">
        
      {/* <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item> */}
      <NavDropdown title={
        <span>
          <i className="fas fa-bell mr-2"></i>
          Notifications
          </span>
      } id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Notification 1</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Notification 2</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Notification 3</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title={
        <span>
          <i className="fas fa-user mr-2"></i>
          {props.loginStatus&&'Admin'}
        </span>
      } id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Settings</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Forgot Password ?</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">
          <Nav.Item>
            <Nav.Link /*as={Link} to="/"*/ onClick={handleLogout}>
              <i className="fas fa-power-off mr-2 text-danger"></i>Logout
            </Nav.Link>
          </Nav.Item>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    )
}

const mapStateToProps: any = (state: any) => {
    return {
      loginStatus:state.loginReducer.loginStatus,
    };
  };
  
  export default connect(
    mapStateToProps)(withRouter(Navbartop));
