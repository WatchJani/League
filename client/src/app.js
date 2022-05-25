import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './pages/login';
import { Register } from './pages/register';
import { Page404 } from './pages/page404';
import { Home } from './pages/home';
import { ProtectedPage } from './pages/protectedPage';

import ProtectedRoute from './components/ProtectedRoute';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* do we need index parametar? */}
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
    </Router>
  );
};
