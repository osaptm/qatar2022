import GruposList from './components/GruposList'
import Today from './components/Today'
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className='botonera'>
        <Link className='myButton' to={'./'}>GRUPOS</Link>
        <Link className='myButton' to={'./today'}>PARTIDOS DE HOY</Link>
      </div>
      <Routes>
        <Route path="/" element={<GruposList />} />
        <Route path="/today" element={<Today />} />
      </Routes>
    </HashRouter>
  );
}

export default App;