import './App.css'
import  { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page from './Components/Justpage/Page'
// import Navbar from './Components/Navbar/Navbar'
function App() {

  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    
      <Route path='/' Component={Page}>

      </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
