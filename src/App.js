import './SCSS/App.scss';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
