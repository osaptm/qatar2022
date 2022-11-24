import GruposList from './components/GruposList'
function App() {
  return (
    <>
      <div className='botonera'>
        <button className='myButton' onClick={()=>{alert('En Creacion -> No seas SAPO')}}>GRUPOS</button>
        <button className='myButton' onClick={()=>{alert('En Creacion -> No seas SAPO')}}>OCTAVOS</button>
        <button className='myButton' onClick={()=>{alert('En Creacion -> No seas SAPO')}}>CUARTOS</button>
        <button className='myButton' onClick={()=>{alert('En Creacion -> No seas SAPO')}}>SEMIS - FINAL</button>
      </div>
      <div className="container">
          <GruposList />
      </div>
    </>
  )
}
export default App
