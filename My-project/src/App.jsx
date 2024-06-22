import './App.css'
import  { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page from './Components/Justpage/Page'
function App() {

  return (
    <>
    <BrowserRouter>
   
    <Routes>
    
      <Route path='/' Component={Page}>

      </Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
