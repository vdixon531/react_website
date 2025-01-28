import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Experience from './components/pages/Experience';
import ContactMe from './components/pages/ContactMe';
import Adventure from './components/pages/Adventure';
import BlogPost from './components/pages/BlogPost';
import ScrollToTop from './components/ScrollToTop'; 


function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/music' component={Music} />
        <Route path='/experience' component={Experience} />
        <Route path='/adventure' component={Adventure} />
        <Route path='/contact-me' component={ContactMe} />
        <Route path='/youtube' component={ContactMe} />
        <Route path='/career/:postId' component={BlogPost} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
