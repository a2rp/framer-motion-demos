import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <>
        {/* <ConfirmProvider> */}
        <BrowserRouter basename='/framer-motion-demos'>
            <App />
        </BrowserRouter>
        {/* </ConfirmProvider> */}
    </>,
)
