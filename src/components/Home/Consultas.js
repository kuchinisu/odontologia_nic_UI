import { useDispatch, connect } from "react-redux";
import { useEffect, useState } from "react";
import { get_pacientes_por_parametros } from '../../redux/actions/consultas';
import DispPacientes from "./dipslays/DispPacientes";
import ConsultarPacientes from "./consultas/ConsultarPacientes";
import ConsultarDiente from "./consultas/ConsultarDiente";
import { PACIENTE, DIENTE } from "../function/TiposRegistro";

const Consultas = () => {
    const [consultar, setConsultar] = useState();

    const handleChangeConsulta = (tipo) => {
        setConsultar(tipo)
      };


    return (
        <div>
            
            <div>
                <select onChange={(e)=>handleChangeConsulta(e.target.value)}  className="select select-success w-full max-w-xs mx-auto mb-6">
                    <option disabled selected>Registrar</option>
                    <option>{PACIENTE}</option>
                    <option>{DIENTE}</option>
                    
                </select>
            </div>

            <div>

                {consultar === PACIENTE && (
                    <ConsultarPacientes/>
                ) || consultar === DIENTE && (
                    <ConsultarDiente/>
                ) 
                
                }

                

            </div>
            
        </div>
    );
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Consultas);
