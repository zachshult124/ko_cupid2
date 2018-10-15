import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Signup2 from "./pages/Signup2";

const App = () => (
  <Router>
    <div>
      <Navbar className="w-100" />
      <Wrapper className="w-100">
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup2" component={Signup2} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" component={Search} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
