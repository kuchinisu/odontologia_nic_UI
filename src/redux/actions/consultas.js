import {
    PACIENTES_POR_PARAMETRO_SUCCESS,
    PACIENTES_POR_PARAMETRO_FAIL,
} from './types';
import axios from 'axios';

export const get_pacientes_por_parametros = (filters) => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        try {
            const baseUrl = process.env.REACT_APP_API_URL;
            if (!baseUrl) {
                throw new Error("REACT_APP_API_URL is not defined");
            }
            const url = new URL(`${baseUrl}/api/registros/consultar/pacientes/parametros/`);

            Object.keys(filters).forEach(key => {
                if (filters[key]) {
                    url.searchParams.append(key, filters[key]);
                }
            });

            const res = await axios.get(`${url.toString()}`, config);
            if (res.status === 200) {
                dispatch({
                    type: PACIENTES_POR_PARAMETRO_SUCCESS,
                    payload: res.data
                });
            } else {
                dispatch({
                    type: PACIENTES_POR_PARAMETRO_FAIL,
                });

                console.log(res)
            }
        } catch (err) {
            dispatch({
                type: PACIENTES_POR_PARAMETRO_FAIL,
            });
            console.error("Error en la solicitud:", err);
            
        }
    } else {
        console.error("No access token found");
    }
};
