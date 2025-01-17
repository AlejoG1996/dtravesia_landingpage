//react
import { useState } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';


import Home from '../Home';
const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',element: <Home />}
  ])
  return routes
}

function App() {

  return (
    <BrowserRouter basename="/dtravesia_landingpage">
    <AppRoutes></AppRoutes>
    </BrowserRouter>
  )
}

export default App
