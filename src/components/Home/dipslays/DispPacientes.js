import { Link } from "react-router-dom";
import  DetailsPaciente  from './DetailsPaciente';

const DispPacientes = ({pacientes}) => {
    return(
        <div className="bg-primary-content rounded-lg p-5">
            {pacientes ? (
                <div className="flex justify-start">
                    {pacientes.map((paciente, index)=>
                        <div className="p-5 bg-primary rounded-sm">
                            
                            <div className="font-bold text-accent-content">
                                {paciente.apellido_paterno} {paciente.apellido_materno} {paciente.nombre}
                            </div>

                            <div className="text-primary-content">
                                identificacion de paciente: {paciente.id_paciente}
                            </div>

                            <div className="text-primary-content">
                                identificacion oficial {paciente.identificacion_oficial}
                            </div>

                            <div className="text-primary-content">
                                {paciente.genero}
                            </div>

                            <button className="btn" onClick={()=>document.getElementById(`my_modal_${index}`).showModal()}>open modal</button>
                            {/*-------------------------------------------*/}

                            
                            <dialog id={`my_modal_${index}`} className="modal">
                                <div className="modal-box w-11/12 max-w-5xl">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    
                                    <div>
                                        <DetailsPaciente paciente={paciente} index={index}/>
                                    </div>

                                </div>
                            </dialog>

                        </div>
                    )}
                </div>
            ):(
                <div>

                </div>
            )}
        </div>
    );
};

export default DispPacientes;