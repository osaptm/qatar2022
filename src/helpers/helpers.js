export const traeBandera = (grupos, code) => {
    let bandera = '';            
    const pais = grupos.forEach((grupo)=>{ 
         const res = grupo.paises.filter((pais)=>pais['code'] === code) 
         if(res.length === 1){
             bandera = res[0].bandera
         }
     })
    return bandera;
 }
 export const fechaText = (date) =>{
    let fecha = new Date(date);
    return fecha.toLocaleString();
}