import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Experience from './components/pages/Experience';
import ContactMe from './components/pages/ContactMe';
import Adventure from './components/pages/Adventure';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/music' component={Music} />
        <Route path='/experience' exact component={Experience} />
        <Route path='/adventure' exact component={Adventure} />
        <Route path='/contact-me' exact component={ContactMe} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
