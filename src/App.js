import 'bootswatch/dist/flatly/bootstrap.css';
import React from 'react';
import './custom.css';
import Login from './views/Login';



class App extends React.Component {

    render() {
        return (
            <div>
                <Login />
            </div>
        );
    }
}

export default App;
