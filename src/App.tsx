import './App.css'

import { LogsProvider } from '@/providers/Logs'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './core/Error'
import { MainLayout } from './layouts/Main'
import PokemonPage from './pages/Pokemon/Index'
import ZodExample from './pages/Zod/Index'
import Home from './pages/Home/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/pokemon',
    element: (
      <MainLayout>
        <PokemonPage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/zod',
    element: (
      <MainLayout>
        <ZodExample />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
])

function App() {
  return (
    <>
      <LogsProvider>
        <RouterProvider router={router} />
      </LogsProvider>
    </>
  )
}

export default App
