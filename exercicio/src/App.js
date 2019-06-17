import React from 'react';
import './App.css';

// Páginas
import Home from './componentes/paginas/Home'
import Cadastro from './componentes/paginas/Cadastro'
import Chat from './componentes/paginas/Chat'

// Componentes
import Nav from './componentes/nav/Nav'
import {Switch, Route} from 'react-router-dom'

function App () {
  return (
    <Switch>
      <div className="App">
        <Nav/>
        <Route path='/' exact component={Home}/>
        <Route path='/cadastro' component={Cadastro}/>
        <Route path='/chat' component={Chat}/>
      </div>
    </Switch>
  )
}

export default App;
