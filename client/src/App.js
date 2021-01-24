import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Physical from "./pages/Physical";
import Mental from "./pages/Mental";
import Resources from "./pages/Resources";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Podcast from "./pages/Podcast";
import VideoLibrary from "./pages/VideoLibrary";
import Health from "./pages/Health";
import Exercise from "./pages/Exercise";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyAccount from "./pages/MyAccount";





function App() {
  return (
    <Router>
      <div>
  
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/physical" component={Physical} />
          <Route exact path="/mental" component={Mental} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/podcast" component={Podcast} />
          <Route exact path="/videolibrary" component={VideoLibrary} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/exercise" component={Exercise} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/myaccount" component={MyAccount} />

        </Wrapper>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
