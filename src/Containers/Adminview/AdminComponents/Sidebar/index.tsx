import React from "react";

import { Link } from "react-router-dom";

import profile_pic from "../../assets/img/img_avatar.png";
import "../../assets/css/sb-admin-2.min.css";
import "../../assets/css/all.css";
import "../../assets/scss/style.scss";
import { Accordion } from "react-bootstrap";

const Sidebar = (props: any) => {
  const onLinkClick = (e: any) => {
    console.log("Log Current :", e.target);

    var items = document.getElementsByClassName(
      "link-text"
    ) as HTMLCollectionOf<HTMLElement>;
    console.log("items :", items);
    for (var i = 0; i < items.length; i++) {
      items[i].style.color = "green";
    }
    e.target.style.color = "blue";
  };

  return (
    <div>
      <ul className="list-unstyled m-0">
        <li className="mb-2 mb-md-5">
          <a
            href=""
            className="d-block text-decoration-none text-dark text-center font-weight-bolder"
          >
            <div className="text-center">
              <img
                src={profile_pic}
                className="img-fluid mx-auto rounded-circle"
                width={"50%"}
                alt=""
              />
              <h5 className="text-dark font-weight-bolder mb-0 pb-0 mt-1">
                Welcome {props.loginStatus && "Admin"}
              </h5>
              <span className="text-muted small">Super Admin</span>
            </div>
          </a>
        </li>
        <li className="my-2 my-md-3">
          <Link
            to="/admin"
            className="d-inline-block w-100 font-weight-bold link-text"
            onClick={(e) => {
              onLinkClick(e);
            }}
          >
            <i className="fas fa-users d-inline-block mr-2 text-dark"></i>
            Dashboard
          </Link>
        </li>
        <li className="my-2 my-md-3">
          <Link
            to="/admin/userlist"
            className="d-inline-block w-100 font-weight-bold link-text"
            onClick={(e) => {
              onLinkClick(e);
            }}
          >
            <i className="fas fa-users d-inline-block mr-2 text-dark"></i>
            User list
          </Link>
        </li>
        <li className="my-2 my-md-3">
          <Link
            to="/admin/amouletlist"
            className="d-inline-block w-100 font-weight-bold link-text"
            onClick={(e) => {
              onLinkClick(e);
            }}
          >
            <i className="fas fa-gem d-inline-block mr-2 text-dark"></i>
            Amoulet list
          </Link>
        </li>
        <li className="my-2 my-md-3">
          <Link
            to="/admin/orderdetails"
            className="d-inline-block w-100 font-weight-bold link-text"
            onClick={(e) => {
              onLinkClick(e);
            }}
          >
            <i className="fas fa-gem d-inline-block mr-2 text-dark"></i>
            Order list
          </Link>
        </li>
        {/* <li className="my-2 my-md-3">
                  <Accordion>
                  <Accordion.Toggle eventKey="0" className="d-inline-block font-weight-bold link-text border-0 bg-transparent px-0">
                  <i className="fas fa-cogs mr-2 text-dark"></i>Configuraion
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0" className="pt-2 pl-2 pl-md-4">
                  <Link to="/admin/viewdescriptions" className="d-inline-block w-100 font-weight-bold link-text small text-primary" onClick={(e)=> {onLinkClick(e)} }>
                            <i className="fas fa-file-alt d-inline-block mr-2 text-dark"></i>
                            Descriptions
                          </Link>
                          
                  </Accordion.Collapse>
                  <Accordion.Collapse eventKey="0" className="pt-2 pl-2 pl-md-4">
                  <Link to="/admin" className="d-inline-block w-100 font-weight-bold link-text small text-primary" onClick={(e)=> {onLinkClick(e)} }>
                            <i className="fas fa-file-alt d-inline-block mr-2 text-dark"></i>
                            Notifications
                          </Link>
                  </Accordion.Collapse>
                      </Accordion>    
                  </li> */}

        {/* <li className="my-2 my-md-3">
                    <span className="block text-decoration-none text-dark font-weight-bolder w-100">
                    <i className="fas fa-book-reader"></i>
                      <span  className="ml-3 text-theme">
                          <Link to="/admin/stories">Stories</Link>
                      </span>
                    </span>
                  </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
