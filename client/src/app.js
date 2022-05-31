import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './pages/login';
import { Register } from './pages/register';
import { Page404 } from './pages/page404';
import { Home } from './pages/home';
import { Navbar } from './components/navBar';
// import { ProtectedPage } from './pages/protectedPage';
import ProtectedRoute from './components/ProtectedRoute';
import { NewUser } from './pages/newUser';


export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='*' element={<Page404 />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<NewUser />} />
        <Route
          path='/homee'
          element={
            <ProtectedRoute>
              <Navbar />
              {/* <Home /> */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
