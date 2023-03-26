import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import {RecoilRoot} from 'recoil'

import App from './App';
import Feed from './Feed';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/feeds' element={<Feed />} />
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
