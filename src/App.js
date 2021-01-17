import './App.css';
// import PortfolioElement from './components/PortfolioElement';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/portfolio' component={Portfolio}/>
        </Switch>
      </Router>
      {/* <Portfolio/> */}
    </div>
  );
}

export default App;
