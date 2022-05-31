import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './pages/login';
import { Register } from './pages/register';
import { Page404 } from './pages/page404';
import { Home } from './pages/home';
import { Navbar } from './components/navBar';
// import { ProtectedPage } from './pages/protectedPage';
import ProtectedRoute from './components/ProtectedRoute';
import { NewUser } from './pages/newUser';
import { Edit } from './pages/edit';


export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='*' element={<Page404 />} />
        <Route index element={<Login />} />
        <Route path='register/:id' element={<Register />} />

        {/* ovaj blok koda dodati u protected route kada bude sve radilo :D */}
        <Route path="/home" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='add' element={<NewUser />} />
          <Route path='edit' element={<Edit />} />
        </Route>

        <Route
          path='/homee'
          element={
            <ProtectedRoute>


            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
