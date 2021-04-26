import "./App.css";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header-component/header-component";
import Footer from "./components/footer/footer-component";

import HomePage from "./pages/homepage/homepage";
import ThreeDPage from "./pages/three-d-page/three-d-page";
import ProgrammingPage from "./pages/programming-page/programming-page";
import AboutPage from "./pages/about-page/about-page";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pp" component={ProgrammingPage} />
        <Route path="/threed" component={ThreeDPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
