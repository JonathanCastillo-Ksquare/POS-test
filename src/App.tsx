import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import CancelView from './views/CancelView';
import IncommingOrderView from './views/IncommingOrderView';
import OrderView from './views/OrderView';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path='/orderview/:orderId' element={<OrderView />} />
        <Route path='/cancelorder/:orderId' element={<CancelView />} />
        <Route path='/incomming' element={<IncommingOrderView />} />


      </Route>
    </Routes>
  );
}

export default App;