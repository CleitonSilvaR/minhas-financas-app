import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CadastroUsuario from '../views/cadastroUsuario';
import Home from '../views/home';
import Login from '../views/Login';



function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas;