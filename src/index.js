import react from 'react';

import Reactdom from 'react-dom/client';

import App from './component/App/App';

let contentEle = document.getElementById('content');

let content = Reactdom.createRoot(contentEle);

content.render(<App/>);


