import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detail from './Pages/Detail';
import ScrollToTop from './Components/ScrollToTop';
import Cart from './Pages/Cart';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/:id' exact element={<Detail />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
