import {
    PACIENTES_POR_PARAMETRO_SUCCESS,
    PACIENTES_POR_PARAMETRO_FAIL,
} from '../actions/types';

const initialState = {
    pacientes_por_parametro: null,
    pacientes_por_parametro_count: null,
    pacientes_por_parametro_next: null,
};


export default function Consultas(state=initialState, action) {
    const{type, payload} = action;

    switch(type) {
        case PACIENTES_POR_PARAMETRO_SUCCESS:
            return{
                ...state,
                pacientes_por_parametro: payload.results.pacientes
            };
        case PACIENTES_POR_PARAMETRO_FAIL:
            return{
                ...state,
                pacientes_por_parametro: null
            };
       
        default:
            return state
    }
}