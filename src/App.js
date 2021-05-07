import logo from './logo.svg';
import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";




const NavBar = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <NavLink to="/" style={{ marginRight: 30 }}>Home</NavLink>
      <NavLink to="/discover" style={{ marginRight: 30 }}>Search</NavLink>
      <NavLink to="/detail">Detail</NavLink>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/discover" component={Search} />        
        <Route path="/" component={Home} />
      </Switch>
     
    </div>
  );
}

export default App;
