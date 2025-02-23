import './App.css'
import { lazy, Suspense } from 'react'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import AuthView from './components/AuthView/AuthView'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {

  const Login = lazy(() => import('./components/Login/Login'))
  const routes = createBrowserRouter([
    {path:"", element:<Layout/>, children:[
      {path:"home", element:
      <Suspense>
      <ProtectedRoutes><Home/></ProtectedRoutes>
      </Suspense>
  },
      {path:"login", element:
      <Suspense>
      <AuthView><Login/> </AuthView>
      </Suspense>
  },
    ]}
  ])

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
