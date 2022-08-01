import react from 'react';

import Reactdom from 'react-dom/client';

import Content from './component/App/App';

let contentEle = document.getElementById('content');

let content = ReactDOM.createRoot(contentEle);

content.render(<App/>);


