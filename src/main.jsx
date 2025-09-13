import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Buy from './pages/buy/Buy.jsx'
import PropertyDetails from './components/PropertyDetails.jsx'
import properties from '../public/property.json'
import ContactUs from './pages/login/Login.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/login/SignUp.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
      element:<Buy/>
      },
      {
        path:'/property/:id',
      element:<PropertyDetails properties={properties}/>
      },
      {
        path:'/login',
      element:<Login/>
      },
      {
        path:'/signup',
      element:<SignUp/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>

    </RouterProvider>
    
  </StrictMode>,
)
