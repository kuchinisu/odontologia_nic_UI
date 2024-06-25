import Display3D from "./3d/Display3D";

const DetailsPaciente = ({ paciente, index } ) => {
    return (
        <div className="bg-gray-900 text-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Detalles del Paciente</h2>
            
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <div className="grid grid-cols-3 gap-3">
                        <div>
                            <p className="text-gray-400 mb-2">Nombre:</p>
                            <p className="text-lg">{paciente.nombre}</p>
                        </div>

                        <div>
                            <p className="text-gray-400 mb-2">Apellido Materno:</p>
                            <p className="text-lg">{paciente.apellido_materno}</p>
                        </div>
                        
                        <div>
                            <p className="text-gray-400 mb-2">Apellido Paterno:</p>
                            <p className="text-lg">{paciente.apellido_paterno}</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                </div>
                <div>
                    <p className="text-gray-400 mb-2">Correo Electrónico:</p>
                    <p className="text-lg">{paciente.correo_electronico}</p>
                    <div className="divider"></div>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Dirección:</p>
                    <p className="text-lg">{paciente.direccion}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Nacionalidad:</p>
                    <p className="text-lg">{paciente.nacionalidad}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Identificación Oficial:</p>
                    <p className="text-lg">{paciente.identificacion_oficial}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Género:</p>
                    <p className="text-lg">{paciente.genero}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Edad:</p>
                    <p className="text-lg">{paciente.edad}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Peso:</p>
                    <p className="text-lg">{paciente.peso}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Estatura:</p>
                    <p className="text-lg">{paciente.estatura}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">IMC:</p>
                    <p className="text-lg">{paciente.imc}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">Aparatos:</p>
                    <p className="text-lg">{paciente.aparatos}</p>
                </div>
                <div>
                    <p className="text-gray-400 mb-2">ID del Paciente:</p>
                    <p className="text-lg">{paciente.id_paciente}</p>
                </div>
            </div>

            <div>
                <div className="divider"></div>

                <div>
                    <div>
                        <h>Modelo 3D</h>
                    </div>

                    <div>
                        {paciente.archivo_3d ? (
                            <div>
                                <button className="btn" onClick={()=>document.getElementById(`my_modal_3d_${index}`).showModal()}>open modal</button>
                                <dialog id={`my_modal_3d_${index}`} className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        
                                        <div>
                                            <Display3D url={paciente.archivo_3d}/>
                                        </div>

                                    </div>
                                </dialog>
                            </div>

                            ):(

                            <div>
                                el paciente no tiene modelo 3d registrado
                            </div>
                        )}
                    </div>    

                </div>

            </div>
        </div>
    );
};

export default DetailsPaciente;