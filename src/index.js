import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/vendor/ionicons/css/ionicons.min.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';

ReactGA.initialize('UA-156504943-2');

ReactDOM.render(<App/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
