import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import ScrollLink from 'react-scroll';
// import scrollLink from 'react-scroll/modules/mixins/scroll-link';

function Header({ setShow }) {
  const { pathname } = useLocation();
  const handleShow = () => setShow(true);
  return (
    <header className="navbarcontent ">
      <nav>
        <Navbar
          className="p-3 shadow-md animate__animated animate__bounce animate__delay-1s animate__fadeInUp"
          expand="lg"
          id={'navbar'}
          fixed="top"
        >
          <div className="">
            <NavbarBrand className={'brand'}>
              Ac service
              <MdOutlineMiscellaneousServices />
            </NavbarBrand>
          </div>
          <Navbar.Toggle></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav.Item className="d-flex aligns-items-center gap-4 ms-auto text-decoration-none nav">
              <Link
                className={`${pathname === '/' ? 'activelink' : ''}`}
                to="/"
              >
                Home
              </Link>
              <ScrollLink.Link to={'servicetimeline'}>
                Ac Services
              </ScrollLink.Link>
              <Link to={''} onClick={handleShow}>
                Contact us
              </Link>
              <Link
                to={'/Booking'}
                className={`${pathname === '/Booking' ? 'activelink' : ''}`}
              >
                {/* <Link > */}
                Booking
                {/* </Link> */}
              </Link>
              {pathname === '/' && (
                <ScrollLink.Link to={'footer'}>About us</ScrollLink.Link>
              )}
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </header>
  );
}

export default Header;
