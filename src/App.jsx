import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Payouts from './pages/Payouts';
import PageNotFound from './pages/PageNotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='/payouts' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/payouts' element={<Payouts />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
