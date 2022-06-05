import { createRoot } from 'react-dom/client';
import { App } from './app';
import './css/global.css';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
