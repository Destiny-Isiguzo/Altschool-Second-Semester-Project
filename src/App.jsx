import { useState } from 'react'
import './App.css'
import CounterPage from './components/CounterPage/CounterPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Root';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/counterpage',
    element: <CounterPage />
  },
  {
    path: '*',
    element: <h1>404 error. Page not found &#128533;</h1>,
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
