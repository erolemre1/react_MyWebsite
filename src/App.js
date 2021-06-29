import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import React from "react";
import About from '../src/components/About';
import MyWorks from '../src/components/MyWorks';
import Contact from "./components/Contact";
import Comments from "./components/Comments";
import { ReactComponent as Logo } from "./logo.svg";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <Logo
                alt=""
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              Erol Emre Güleç
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/about">Hakkımda</Nav.Link>
                <Nav.Link href="/my-works">Yaptığım İşler</Nav.Link>
                <Nav.Link href="/comments">Yorumlar</Nav.Link>
                <Nav.Link href="/contact">İletişim</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
        </>
        <Switch>
          <Route path="/about" exact={true}>
            <About />
          </Route>
          <Route path="/my-works" exact={true}>
            <MyWorks />
          </Route>
          <Route path="/contact" exact={true}>
            <Contact />
          </Route>
          <Route path="/comments" exact={true}>
            <Comments />
          </Route>
          <Route path="/" exact={true}>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
