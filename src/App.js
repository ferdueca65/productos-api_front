import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductosAdmin from './pages/ProductosAdmin';
import ProductosCrear from './pages/ProductosCrear';
import ProductosEditar from './pages/ProductosEditar';

class App extends React.Component {

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/productos" exact component={ProductosAdmin} />
          <Route path="/productos-crear" exact component={ProductosCrear}/>
          <Route path="/productos-editar/:productoId" exact component={ProductosEditar}/>
        </Switch>
      </Router>
    )
  }

}
export default App;