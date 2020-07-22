import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../components/Card';
import FormGroup from '../components/Form-group';




class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        console.log(this.state.email);
        console.log(this.state.senha);
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuarios')
    }
    render() {
        return (
            <div className="row">
                {/* style=" position: relative;left: 300px;" */}
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <form>
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                    <input type="email"
                                                        value={this.state.email}
                                                        onChange={e => this.setState({ email: e.target.value })}
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Digite o Email" />
                                                </FormGroup>

                                                <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                    <input type="password"
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({ senha: e.target.value })}
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="Password" />
                                                </FormGroup>

                                                {/* <div class="container">
                                                        <div class="row">
                                                            <div class="col text-center"> */}
                                                <button onClick={this.entrar} className="btn btn-success  btn-lg btn-block">Entrar</button>
                                                <button onClick={this.prepareCadastrar} className="btn btn-danger  btn-lg btn-block">Cadastrar</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
