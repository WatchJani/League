import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Page404 } from './pages/page404';
import { Home } from './pages/home';
import { Navbar } from './components/navBar';
// import { ProtectedPage } from './pages/protectedPage';
import ProtectedRoute from './components/ProtectedRoute';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='*' element={<Page404 />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
