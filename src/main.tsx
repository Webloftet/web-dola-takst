import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import { Layout } from './layout';
import Homepage from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Verdivurdering from './pages/Verdivurdering';
import Kvalitetssikring from './pages/Kvalitetssikring';
import Kostnadssestimering from './pages/Kostnadsestimering';
import Raadgiving from './pages/Raadgivning';
import Tilstand from './pages/Tilstand';
import Befaring from './pages/Befaring';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Homepage /> },
      { path: 'om-oss', element: <About /> },
      { path: 'kontakt', element: <Contact /> },
      {path: 'verdivurdering', element: <Verdivurdering/>},
      {path: 'kvalitetssikring', element: <Kvalitetssikring/>},
      {path: 'kostnadestimering', element: <Kostnadssestimering/>},
      {path: 'raadgiving', element: <Raadgiving/>},
      {path: 'tilstand', element: <Tilstand/>},
      {path: 'befaring', element: <Befaring/>},
      { path: '*', element: <div className="p-10">404 – siden finnes ikke</div> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
