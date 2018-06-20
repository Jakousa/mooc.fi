import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto';
import 'typeface-open-sans-condensed';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
