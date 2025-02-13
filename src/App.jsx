import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import './App.css'
import Name from './components/Name'
import About from './components/About'

function App() {
  return (
    <div>
      <Navbar/>
      <Name />
      <hr />
      <About/>
      <hr />


    </div>
  )
}

export default App
