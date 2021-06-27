
import './App.css';
import List from "./Components/List";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

import { Route, BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>

      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Sistema <span className="sr-only"></span></Link>
              <Link className="nav-item nav-link" to={"/create"}>Crear Trabajador</Link>
              <Link className="nav-item nav-link" to={"/edit"}>Editar Trabajador</Link>
          </div>
      </nav>

    <div className="Container">
      <br></br>

      <Route exact path="/" component={List} ></Route>
      <Route path="/create" component={Create} ></Route>
      <Route path="/edit" component={Edit} ></Route>
  
    </div>
    </Router>
  );
}

export default App;
