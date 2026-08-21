import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import { Toaster } from 'sonner';

export default function App() {
  return (
      <Router>
        <Header />
        <main className='pt-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:category' element={<Products />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/confirmation' element={<Confirmation />} />
          </Routes>
        </main>
        <Toaster richColors />
      </Router>
  );
}