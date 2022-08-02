import react from 'react';

import Reactdom from 'react-dom/client';

import App from './component/App/App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './component/Details/Details';

 
let contentEle = document.getElementById('content');

let content = Reactdom.createRoot(contentEle);

content.render(<BrowserRouter>
<Routes>
    <Route path='/app' element={<App/>}/>
    <Route path='/details' element={<Details />}/>
</Routes></BrowserRouter>);


