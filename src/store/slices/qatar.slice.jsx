import { createSlice } from '@reduxjs/toolkit';
let initialState = {
    grupos:[
        {
            id:1,
            nombre:'Grupo A',
            paises:[
                {nombre:'Catar',bandera:'qatar'},
                {nombre:'Ecuador',bandera:'ecuador'},
                {nombre:'Senegal',bandera:'senegal'},
                {nombre:'Holanda',bandera:'holanda'},
            ]
        },
        {
            id:2,
            nombre:'Grupo B',
            paises:[
                {nombre:'Inglaterra',bandera:'inglaterra'},
                {nombre:'Iran',bandera:'iran'},
                {nombre:'USA',bandera:'eeuu'},
                {nombre:'Gales',bandera:'gales'},
            ]
        },
        {
            id:3,
            nombre:'Grupo C',
            paises:[
                {nombre:'Argentina',bandera:'argentina'},
                {nombre:'Arabia Saudita',bandera:'arabia'},
                {nombre:'Mexico',bandera:'mexico'},
                {nombre:'Polonia',bandera:'polonia'},
            ]
        },
        {
            id:4,
            nombre:'Grupo D',
            paises:[
                {nombre:'Francia',bandera:'francia'},
                {nombre:'Australia',bandera:'australia'},
                {nombre:'Dinamarca',bandera:'dinamarca'},
                {nombre:'Tunez',bandera:'tunez'},
            ]
        },
        {
            id:5,
            nombre:'Grupo E',
            paises:[
                {nombre:'España',bandera:'spain'},
                {nombre:'Costa Rica',bandera:'costarica'},
                {nombre:'Alemania',bandera:'alemania'},
                {nombre:'Japon',bandera:'japon'},
            ]
        },
        {
            id:6,
            nombre:'Grupo F',
            paises:[
                {nombre:'Belgica',bandera:'belgica'},
                {nombre:'Canada',bandera:'canada'},
                {nombre:'Marruecos',bandera:'marruecos'},
                {nombre:'Croacia',bandera:'croacia'},
            ]
        },
        {
            id:7,
            nombre:'Grupo G',
            paises:[
                {nombre:'Brazil',bandera:'brasil'},
                {nombre:'Serbia',bandera:'serbia'},
                {nombre:'Suiza',bandera:'suiza'},
                {nombre:'Camerun',bandera:'camerun'},
            ]
        },
        {
            id:8,
            nombre:'Grupo H',
            paises:[
                {nombre:'Portugal',bandera:'portugal'},
                {nombre:'Ghana',bandera:'ghana'},
                {nombre:'Uruguay',bandera:'uruguay'},
                {nombre:'Corea',bandera:'corea'},
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

