import "./App.css";
import Navbar from "./components/Navbar";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const page =
      location.pathname === "/about"
        ? "About"
        : location.pathname.startsWith("/portfolio")
          ? "Portfolio"
          : null;

    document.title = page ? `${page} | Alexander Zhong` : "Alexander Zhong";
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <PageTitle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
