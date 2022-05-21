import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Page404 } from './pages/page404';
import { Home } from './pages/home';
import { ProtectedPage } from './pages/protectedPage';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Page404 />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/protected' element={<ProtectedPage />} />
            </Routes>
        </BrowserRouter>
    )
}