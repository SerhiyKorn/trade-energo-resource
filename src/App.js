import React from "react";
import Navbar from "./Components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer } from "mdbreact";
import Main from "./pages/Main";
import Jumbo from "./Components/Jumbo";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NormBase from "./pages/NormBase";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Jumbo></Jumbo>
      <div>
        <MDBContainer>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/normbase" component={NormBase} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </MDBContainer>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
