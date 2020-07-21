import 'bootswatch/dist/flatly/bootstrap.css';
import React from 'react';
import Navbar from '../components/Navbar';
import '../custom.css';
import Rotas from './rotas';





class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <Rotas />
                </div>
            </div>
        );
    }
}

export default App;
