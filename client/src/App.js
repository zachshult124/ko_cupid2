import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App = () => (
  <Router>
    <div>
      <Navbar className="w-100" />
      <Wrapper className="w-100">
        <Route exact path="/" component={Login} />

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />

      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
