import React from 'react';
import { render } from 'react-dom';
import App from './components//App';

const Main = () => {
    return (
        <React.Fragment>
            <App />
        </React.Fragment>
    )
}

render(<Main />, document.getElementById('root'))