import { useSelector } from 'react-redux'
import {banderas} from '../assets/banderas/banderas'
//import fixture from '../json/fixture.json'
import { useEffect,useState } from 'react';

const GruposList = () => {
    const gruposDefault = useSelector((state)=>state.qatar.grupos);
    const grupos = JSON.parse( localStorage.getItem('grupos') || localStorage.setItem('grupos', JSON.stringify(gruposDefault)) );
    const [fixture, setfixture] = useState([]);
    const PaisesMasPartidos = ({grupo}) =>{
        const codePaises=[];
        const traeBandera = (code) => {
           let bandera = '';            
           const pais = grupos.forEach((grupo)=>{ 
                const res = grupo.paises.filter((pais)=>pais['code'] === code) 
                if(res.length === 1){
                    bandera = res[0].bandera
                }
            })
           return bandera;
        }
        const fechaText = (date) =>{
            let fecha = new Date(date);
            return fecha.toLocaleString();
        }
        let paises = grupo.paises.map((pais)=>{
            codePaises.push(pais.code);
            return (<div key={pais.nombre} className='pais'><img src={banderas[pais.bandera]} className="bandera"/>{pais.nombre}</div>)
        })         
        
        let partidos = fixture.map((partido)=>{
            if(partido.stage_name === 'First stage' && codePaises.includes(partido.home_team_country)){
                return (
                    <div key={partido.id} className='partido'>
                        <div className='dataPartido'>
                            {/* <span>{partido.home_team.name}</span> */}
                            <img src={banderas[traeBandera(partido.home_team_country)]} className="banderaPartido"/>
                            <div className='score'>
                                <input className='inputScore' type="number" placeholder='0' defaultValue={partido.home_team.goals} readOnly/>
                                {'-'}
                                <input className='inputScore' type="number" placeholder='0' defaultValue={partido.away_team.goals} readOnly/>
                            </div>                                                 
                            <img src={banderas[traeBandera(partido.away_team_country)]} className="banderaPartido"/>
                            {/* <span>{partido.away_team.name}</span>  */}
                        </div>                       
                        <div className='horaInicio'>{fechaText(partido.datetime)}</div>
                        <hr/>
                    </div>
                )
            }
        })
        return(
            <>
                <div className='paisesGrupo'>
                    {paises}
                </div>
                <hr />
                <details open="">
                    <summary>CLICK AQUI PARA DETALLES!!!</summary>
                    <nav className='ecuentros-grupo'>
                        <div className='encuentro'>
                            {partidos}
                        </div>
                    </nav>
                </details>
            </>
        )     
    }   

    const getFixture = async() => {
        const data = await fetch('https://worldcupjson.net/matches');
        const json = await data.json();
        setfixture(json);
    }

    useEffect(() => {
       getFixture();
    }, []);

    return grupos.map((grupo)=>{
        return (
            <div key={grupo.id} className='grupo'>
                <h1>{grupo.nombre}</h1>
                <PaisesMasPartidos grupo={grupo}/>
            </div>
        )
    })
};

export default GruposList;