import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Page404 } from './pages/404/page404';
import { Home } from './pages/home/home';
import { Navbar } from './components/navBar';
import ProtectedRoute from './components/ProtectedRoute';
import { RegisterJs } from './pages/register/registerJs';
import { AddUser } from "./pages/addUser.js"
import { AddSeason } from './pages/addSeason/addSeason';


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
          <Route path='add' element={<AddUser />} />
          <Route path='edit/:id' element={<RegisterJs />} />
          <Route path='season' element={<AddSeason />} />
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
