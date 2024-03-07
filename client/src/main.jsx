import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
      <App />
      <ToastContainer
      progressClassName="toastProgress"
  bodyClassName="toastBody"/>
    </React.StrictMode>,
    </AuthProvider>
)
