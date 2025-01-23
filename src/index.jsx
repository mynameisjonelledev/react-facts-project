import { createRoot } from 'react-dom/client'
import defineConfig from '../vite.config'
import { App } from './App';


createRoot(document.getElementById('root')).render(
  <>
  <App />
  </> 
);
