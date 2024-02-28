import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            YooCoding
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center mb-2">
              {navLinks.map((datas) => {
                return (
                  <div key={datas.id}>
                    <NavLink
                      to={datas.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {datas.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center mt-2">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
