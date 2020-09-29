import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CreateTasker from "./components/Create.component";
import Taskerr from "./components/Taskerr.component";
import EditTaskerr from "./components/Edit.Component";


function App() {
  return (
    <Router>
    <div className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Taskerr app!</Link>
        <div className="collapse nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Tasks</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <Route path="/" exact component={Taskerr} />
      <Route path="/edit/:id" component={EditTaskerr} />
      <Route path="/create" component={CreateTasker} />
    </div>

    </Router>
  );
}

export default App;
