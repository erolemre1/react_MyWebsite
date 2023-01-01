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
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <Router>
      <div>
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
           Anasayfa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/hakkimda">Hakkımda</Nav.Link>
                <Nav.Link href="/isler">Yaptığım İşler</Nav.Link>
                <Nav.Link href="/yorumlar">Yorumlar</Nav.Link>
                <Nav.Link href="/iletisim">İletişim</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
        </>
        <Switch>
          <Route path="/hakkimda" exact={true}>
            <About />
          </Route>
          <Route path="/isler" exact={true}>
            <MyWorks />
          </Route>
          <Route path="/iletisim" exact={true}>
            <Contact />
          </Route>
          <Route path="/yorumlar" exact={true}>
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
