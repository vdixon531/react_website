import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Experience from './components/pages/Experience';
import Adventure from './components/pages/Adventure';
import BlogPost from './components/pages/BlogPost';
import ScrollToTop from './components/ScrollToTop'; 
import Footer from "./components/Footer";


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
        <Route path='/career/:postId' component={BlogPost} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
