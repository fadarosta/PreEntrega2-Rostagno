import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/itemListContainer/itemListContainer'
import ItemCount from './Components/itemCount/itemCount'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={'Yoguini,'} />
      <ItemCount />
    </BrowserRouter>
  )
}

export default App
