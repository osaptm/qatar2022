import { createSlice } from '@reduxjs/toolkit';
let initialState = {
    grupos:[
        {
            id:1,
            nombre:'Grupo A',
            paises:[
                {nombre:'Catar',code:'QAT',bandera:'qatar'},
                {nombre:'Ecuador',code:'ECU',bandera:'ecuador'},
                {nombre:'Senegal',code:'SEN',bandera:'senegal'},
                {nombre:'Holanda',code:'NED',bandera:'holanda'},
            ]
        },
        {
            id:2,
            nombre:'Grupo B',
            paises:[
                {nombre:'Inglaterra',code:'ENG',bandera:'inglaterra'},
                {nombre:'Iran',code:'IRN',bandera:'iran'},
                {nombre:'USA',code:'USA',bandera:'eeuu'},
                {nombre:'Gales',code:'WAL',bandera:'gales'},
            ]
        },
        {
            id:3,
            nombre:'Grupo C',
            paises:[
                {nombre:'Argentina',code:'ARG',bandera:'argentina'},
                {nombre:'Arabia Saudita',code:'KSA',bandera:'arabia'},
                {nombre:'Mexico',code:'MEX',bandera:'mexico'},
                {nombre:'Polonia',code:'POL',bandera:'polonia'},
            ]
        },
        {
            id:4,
            nombre:'Grupo D',
            paises:[
                {nombre:'Francia',code:'FRA',bandera:'francia'},
                {nombre:'Australia',code:'AUS',bandera:'australia'},
                {nombre:'Dinamarca',code:'DEN',bandera:'dinamarca'},
                {nombre:'Tunez',code:'TUN',bandera:'tunez'},
            ]
        },
        {
            id:5,
            nombre:'Grupo E',
            paises:[
                {nombre:'España',code:'ESP',bandera:'spain'},
                {nombre:'Costa Rica',code:'CRC',bandera:'costarica'},
                {nombre:'Alemania',code:'GER',bandera:'alemania'},
                {nombre:'Japon',code:'JPN',bandera:'japon'},
            ]
        },
        {
            id:6,
            nombre:'Grupo F',
            paises:[
                {nombre:'Belgica',code:'BEL',bandera:'belgica'},
                {nombre:'Canada',code:'CAN',bandera:'canada'},
                {nombre:'Marruecos',code:'MAR',bandera:'marruecos'},
                {nombre:'Croacia',code:'CRO',bandera:'croacia'},
            ]
        },
        {
            id:7,
            nombre:'Grupo G',
            paises:[
                {nombre:'Brazil',code:'BRA',bandera:'brasil'},
                {nombre:'Serbia',code:'SRB',bandera:'serbia'},
                {nombre:'Suiza',code:'SUI',bandera:'suiza'},
                {nombre:'Camerun',code:'CMR',bandera:'camerun'},
            ]
        },
        {
            id:8,
            nombre:'Grupo H',
            paises:[
                {nombre:'Portugal',code:'POR',bandera:'portugal'},
                {nombre:'Ghana',code:'GHA',bandera:'ghana'},
                {nombre:'Uruguay',code:'URU',bandera:'uruguay'},
                {nombre:'Corea',code:'KOR',bandera:'corea'},
            ]
        },
    ],
    status:false,
    error:false,
}
export const qatarSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        
    }
})

export const {  } = qatarSlice.actions;

export default qatarSlice.reducer;

