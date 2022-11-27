import { useSelector } from 'react-redux'
import {banderas} from '../assets/banderas/banderas'
import { useEffect,useState } from 'react';
import {traeBandera, fechaText} from '../helpers/helpers'
import Table from 'react-bootstrap/Table';
import { useFetch } from "react-async";




const GruposList = () => {
    const gruposDefault = useSelector((state)=>state.qatar.grupos);
    const grupos = JSON.parse( localStorage.getItem('grupos') || localStorage.setItem('grupos', JSON.stringify(gruposDefault)) );
    const [fixture, setfixture] = useState([]);
   
    const getFixture = async() => {
        const data = await fetch('https://worldcupjson.net/matches');
        const json = await data.json();
        setfixture(json); 
    }

    const GetStats = ({grupo}) => {
        const arr = []
        for (const pais of grupo) {
            const { data, error } = useFetch(
                `https://worldcupjson.net/teams/${pais}`, {
                headers: { accept: "application/json" },
            });
            if (error) {
                return error.message;
            }
            if (data) {             
                arr.push(data)
            }
           
        }

        if(arr.length!==4) return;
        const orderArray = arr.sort((a,b)=>b.group_points-a.group_points); 
        return (
            <>  
               {
                orderArray.map((datax)=>{
                    return (
                        <tr key={datax?.country}>
                            <td>{`${datax?.country}(${datax?.games_played})`}</td>
                            <td>{datax?.wins}</td>
                            <td>{datax?.draws}</td>
                            <td>{datax?.losses}</td>                        
                            <td>{datax?.goal_differential}</td>
                            <td>{datax?.group_points}</td>
                        </tr>  
                    )
                })
               }               
            </>
         );
       
       
    }

    const PaisesMasPartidos = ({grupo}) =>{
        const codePaises=[];           
        let paises = grupo.paises.map((pais)=>{
            codePaises.push(pais.code);
            return (<div key={pais.nombre} className='pais'><img src={banderas[pais.bandera]} className="bandera"/>{pais.nombre}</div>)
        })         
               
        let partidos = fixture.map((partido)=>{
            if(partido.stage_name === 'First stage' && codePaises.includes(partido.home_team_country)){
                return (
                    <div key={partido.id} className='partido'>
                        <span className='nameTeam'>{ partido.home_team.name+' vs '+partido.away_team.name}</span>
                        <div className='dataPartido'>                       
                            <img src={banderas[traeBandera(grupos, partido.home_team_country)]} className="banderaPartido"/>
                            <div className='score'>
                                <input className='inputScore' type="number" placeholder='0' defaultValue={partido.home_team.goals} readOnly/>
                                {'-'}
                                <input className='inputScore' type="number" placeholder='0' defaultValue={partido.away_team.goals} readOnly/>
                            </div>                                                 
                            <img src={banderas[traeBandera(grupos, partido.away_team_country)]} className="banderaPartido"/>
                           
                        </div>                       
                        <div className='estadoPartido'>{partido.status.toUpperCase()}</div>
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

                <details open="">
                    <summary>CLICK AQUI TABLA!!!</summary>
                    <nav className='ecuentros-grupo'>
                        <div className='encuentro'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>PAIS / #</th>                                
                                <th>G</th>
                                <th>E</th>
                                <th>P</th>
                                <th>D</th>
                                <th>PU</th>
                                </tr>
                            </thead>
                            <tbody>
                            <GetStats grupo={codePaises}/>
                            </tbody>
                        </Table>
                        </div>
                    </nav>
                </details>

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