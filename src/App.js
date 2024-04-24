import React from 'react';
import './App.css';
import AddProduct from './Component/AddProduct';
import ViewAllProduct from './Component/ViewAllProduct';
import ViewOrder from './Component/ViewOrder';
import ViewCompletedOrder from './Component/ViewCompletedOrder';
import Sidebar from './Component/SideBar';
import UpdateItem from './Component/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<ViewAllProduct />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/update' element={<UpdateItem />} />
          <Route path='/view-orders' element={<ViewOrder />} />
          <Route path='/view-completed-orders' element={<ViewCompletedOrder />} />
        </Routes>
      </div>
    </BrowserRouter>

    /* <Router>
     <div className="app">
       <Sidebar />
       <div className="main-content">
         <Route path="/" exact component={ViewAllProduct} />
         <Route path="/add-product" component={AddProduct} />
         <Route path="/view-orders" component={ViewOrder} />
         <Route path="/view-completed-orders" component={ViewCompletedOrder} />
       </div>
     </div>
   </Router>*/

  );
}

export default App;
