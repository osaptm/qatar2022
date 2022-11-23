import GruposList from './components/GruposList'
function App() {
  return (
    <>
      <div className='botonera'>
        <button className='myButton'>GRUPOS</button>
        <button className='myButton'>OCTAVOS</button>
        <button className='myButton'>CUARTOS</button>
        <button className='myButton'>SEMIS - FINAL</button>
      </div>
      <div className="container">
          <GruposList />
      </div>
    </>
  )
}
export default App
