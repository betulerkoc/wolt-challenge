import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RestaurantProvider} from './context/restaurant'

ReactDOM.render(
    <RestaurantProvider>   
        <App />
    </RestaurantProvider>,
document.getElementById('root'));

serviceWorker.unregister();
