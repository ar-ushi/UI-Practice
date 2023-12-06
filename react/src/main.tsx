import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './screens/counter/counter'
import { RouterProvider, createHashRouter } from 'react-router-dom'


const router = createHashRouter([
  {
    path: '/',
    element: <Counter />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
