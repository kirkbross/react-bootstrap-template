import React from "react";
import Home from "./Home";
import About from "./About";
import { Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Dashboard() {
  return (
    <div className="topbar">
      <Router>
        <Navbar bg="light" expand="lg">
          <Link to="/" className="navbar-brand">React-Bootstrap Template</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="mainNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>
              <NavDropdown title="DROPDOWN" id="dropdown1" className="font-weight-bold">
                <NavDropdown.Item href="#action/3.1">OTHER</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">PAGES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">HERE</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">LOGIN</NavDropdown.Item>
              </NavDropdown>
            </ul>
            <Form inline className="ml-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <main className="container py-4">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default Dashboard;
