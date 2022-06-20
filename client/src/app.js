import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Page404 } from './pages/404/page404';
import { Navbar } from './components/navBar';
import ProtectedRoute from './components/ProtectedRoute';
import { RegisterJs } from './pages/register/registerJs';
import { ModalProvider } from './context/modalContext';
import TableData from './components/TableData';
import Confirmation from './pages/Confirmation';
import { AddSeason } from './pages/addSeason/addSeason';

export const App = () => {
  const RenderTableData = (type, navigate = null) => (
    <Route
      path={`/${type}`}
      element={
        <ProtectedRoute>
          <Navbar />
        </ProtectedRoute>
      }
    >
      <Route index element={<TableData type={type}  />} />
      <Route path='add' element={<RegisterJs type={type} navigate={navigate} path='add' />} />
      <Route path='edit/:id' element={<RegisterJs type={type} edit={true} />} />
      <Route path='create' element={<AddSeason />} />
    </Route>
  );

  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route
            path='/register'
            element={
              <RegisterJs type='users' path='add' navigate='/confirmation' />
            }
          />


          <Route path='*' element={<Page404 />} />
          <Route index element={<Login />} />
          <Route
            path='register/:id'
            element={<RegisterJs type='register' navigate='/users' />}
          />
          <Route path='/confirmation' element={<Confirmation />} />

          {RenderTableData('users')}
          {RenderTableData('teams')}
          {RenderTableData('players')}
          {RenderTableData('seasons', "/seasons/create")}
          {RenderTableData('leagues')}

        </Routes>
      </Router>
    </ModalProvider>
  );
};
