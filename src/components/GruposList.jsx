import { useSelector } from 'react-redux'
import {banderas} from '../assets/banderas/banderas'

const GruposList = () => {
    const grupos = useSelector((state)=>state.qatar.grupos);
    console.log(grupos);
    return grupos.map((grupo)=>{
        return (
            <div key={grupo.id} className='grupo'>
                <h1>{grupo.nombre}</h1>
                {
                    grupo.paises.map((pais)=>{
                        return (<div key={pais.nombre} className='grupoPais'><img src={banderas[pais.bandera]} className="bandera"/>{pais.nombre}<hr/></div>)
                    })
                }
            </div>
        )
    })
};

export default GruposList;