import "./App.scss";

import { Switch, Route } from "react-router-dom";
import Header from "./components/header-component/header-component";
import Footer from "./components/footer/footer-component";

import HomePage from "./pages/home-page/homepage";
import ThreeDPage from "./pages/three-d-page/three-d-page";
import ProgrammingPage from "./pages/programming-page/programming-page";
import AboutPage from "./pages/about-page/about-page";
import singlePages from "./pages/single-pages/single-pages";

import ReactGA from "react-ga";
ReactGA.initialize("G-BRS8VGQT78");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/pp" component={ProgrammingPage} />
        <Route path="/threed/:id" component={singlePages} />
        <Route path="/pp/:id" component={singlePages} />
        <Route exact path="/threed" component={ThreeDPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
