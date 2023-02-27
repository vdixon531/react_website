import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Experience from './components/pages/Experience';
import ContactMe from './components/pages/ContactMe';
import Adventure from './components/pages/Adventure';
import Resume from './components/pages/Resume';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/music' component={Music} />
        <Route path='/experience' component={Experience} />
        <Route path='/adventure' component={Adventure} />
        <Route path='/contact-me' component={ContactMe} />
        <Route path='/youtube' component={ContactMe} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
