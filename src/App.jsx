import './App.css'
import ItemCount from './Components/itemCount/itemCount'
import ItemListContainer from './Components/itemListContainer/itemListContainer'
import NavBar from './Components/NavBar/NavBar'
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
