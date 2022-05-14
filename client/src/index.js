import { createRoot } from 'react-dom/client';
import { Register } from "./pages/register"

const App = () => {
    return (
        <Register />
    )
}


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);
