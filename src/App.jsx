import React from 'react';
import Naver from './component/naver/Naver';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListBooks from './pages/listBooks/ListBooks';
import PagesTo from './pages/pagesToRead/PagesTo';
import Product from './component/product/Product';

function App() {
  return (
    <div className='app'>
      <Naver />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ListBooks' element={<ListBooks />} />
        <Route path='/PagesTo' element={<PagesTo />} />
        <Route path='/product/:ProductId' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
