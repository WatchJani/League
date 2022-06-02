import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './pages/login';
import { Register } from './pages/register/register';
import { Page404 } from './pages/404/page404';
import { Home } from './pages/home/home';
import { Navbar } from './components/navBar';
// import { ProtectedPage } from './pages/protectedPage';
import ProtectedRoute from './components/ProtectedRoute';
import { NewUser } from './pages/newUser';
import { RegisterJs } from './pages/register/registerJs';



export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='*' element={<Page404 />} />
        <Route index element={<Login />} />
        <Route path='register/:id' element={<RegisterJs />} />

        {/* ovaj blok koda dodati u protected route kada bude sve radilo :D */}
        <Route path="/home" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='add' element={<NewUser />} />
          <Route path='edit/:id' element={<RegisterJs />} />
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
