
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Cards from './components/Cards/Cards'

function App() {

  return (
    <div className='container'>
<NavBar/>
<ItemListContainer/>
<Cards/>
</div>
  )
}

export default App
