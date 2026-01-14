import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ProductContextProvider from './context/ProductContext.jsx';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
<StrictMode>
<ProductContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</ProductContextProvider>
</StrictMode>
);