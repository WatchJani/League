import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Page404 } from './pages/page404';
import { Home } from './pages/home';
import { ProtectedPage } from './pages/protectedPage';
import ProtectedRoute from './components/ProtectedRoute';
// import  GlobalStyle  from './globalStyles';

export const App = () => {
  return (
    
    <BrowserRouter>
    {/* <GlobalStyle> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/protected'
            element={
              <ProtectedRoute>
                <ProtectedPage />
              </ProtectedRoute>
            }
          />
        </Routes>
    {/* </GlobalStyle> */}
      </BrowserRouter>

  );
};
