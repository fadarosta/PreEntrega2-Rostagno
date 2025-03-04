import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/itemListContainer/itemListContainer'
import ItemCount from './Components/itemCount/itemCount'

function App () {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Yoguini,'}/>
    <ItemCount/>
    </>
  )
}

export default App
