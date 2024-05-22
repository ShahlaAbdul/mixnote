import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
// import MainLayout from './Layout/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
      <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/AboutPage/' element={<AboutPage />} />

      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
