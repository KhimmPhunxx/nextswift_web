import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LayoutPage from './components/layout/LayoutPage'
import Home_Page from './pages/homepage/Home_Page'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<LayoutPage/>} >
                <Route path='' element={<Home_Page/>} />

              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
