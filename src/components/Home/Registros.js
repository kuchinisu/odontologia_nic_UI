import { useState } from 'react';
import { AFECCION, APARATO, MODELO_3D_BOCA, PACIENTE, PROCEDIMIENTO, TRATAMIENTO, UNIDAD, 
  PROCEDIMIENTO_REALIZADO, TRATAMIENTO_INICIADO,TRATAMIENTO_ACTUALIZADO, DIENTE, 
  DOCUMENTO_EXTRA} from '../function/TiposRegistro';

import {
    MEXICANA,
    ESTADOUNIDENSE,
    HOMBRE,
    MUJER,
    SIN_ESPECIFICAR,
    EN_TRATAMIENTO,
    VIGENTE_SIN_TRATAMIENTO,
    TRATAMIENTO_SUSPENDIDO,
    TRATAMIENTO_TERMINADO,
    IRREBERSIBLE_CON_INTENTO_DE_TRATAMIENTO,
    IRREBERSIBLE_SIN_INTENTO_DE_TRATAMIENTO
} from '../globales';

const Registros = () => {

    const [registrar, setRegistrar] = useState();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
    const handleChangeRegistro = (tipo) => {
      setRegistrar(tipo)
    };
  
    const [listaDeAfecciones, setListaDeAfecciones] = useState([]);
    const handleAddAfeccion = () => {
      const idAfeccion = document.getElementById('afeccion_id_r7_w1').value;  
      setListaDeAfecciones(prevState => [...prevState, idAfeccion]);
      document.getElementById('afeccion_id_r7_w1').value = '';  
    };

    //funciones de posts

    const RegistrarPaciente = () => {
        const nombre = document.getElementById('paciente_nombre_r0_w1');
        const apellidoMaterni = document.getElementById('paciente_materno_r0_w1');
        const apellidoPaterno = document.getElementById('paciente_paterno_r0_w1');
        const correoElectronico = document.getElementById('paciente_correo_r0_w1');
        const direccion = document.getElementById('paciente_direccion_r0_w1');
        const nacionalidad = document.getElementById('paciente_nacionalidad_r0_w1');
        const id_oficial = document.getElementById('paciente_id_oficial_r0_w1');
        const genero = document.getElementById('paciente_genero_r0_w1');
        const fecha_de_nacimiento = document.getElementById('paciente_nacimiento_r0_w1');
        const estatura = document.getElementById('paciente_estatura_r0_w1');
        const peso = document.getElementById('paciente_peso_r0_w1');

        if (!nombre || !apellidoMaterni || !apellidoPaterno || !correoElectronico || !direccion ||
        !nacionalidad || !id_oficial || !genero || !fecha_de_nacimiento || !estatura || !peso) {
        console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        }

        const formData = new FormData();

        const nombreV = nombre.value;
        const apellidoMaternoValue = apellidoMaterni.value;
        const apellidoPaternoValue = apellidoPaterno.value;
        const correoElectronicoValue = correoElectronico.value;
        const direccionValue = direccion.value;
        const nacionalidadValue = nacionalidad.value;
        const id_oficial_value = id_oficial.value;
        const generoValue = genero.value;
        const fecha_de_nacimiento_value = fecha_de_nacimiento.value;
        const estatura_value = estatura.value;
        const pesovalue = peso.value;

        formData.append('nombre', nombreV);
        formData.append('apellido_materno', apellidoMaternoValue);
        formData.append('apellido_paterno', apellidoPaternoValue);
        formData.append('correo_electronico', correoElectronicoValue);
        formData.append('direccion', direccionValue);
        formData.append('nacionalidad', nacionalidadValue);
        formData.append('identificacion_oficial', id_oficial_value);
        formData.append('genero', generoValue);
        formData.append('fecha_de_nacimiento', fecha_de_nacimiento_value);
        formData.append('estatura', estatura_value);
        formData.append('peso', pesovalue);

        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/paciente/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };

    const registrarModelo3D = () => {
        const paciente = document.getElementById('paciente_id_r1_w1');
        const modelo_3d = document.getElementById('modelo_3d_boca_r1_w1').files[0];
        

        if (!paciente || !modelo_3d) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const pacienteV = paciente.value;
       

        formData.append('paciente', pacienteV);
        formData.append('archivo_3d', modelo_3d);

        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/modelo_3d_boca/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };
    
    const registrarProcedimiento = () => {
        const procedimiento = document.getElementById('procedimiento_nombre_r2_w1');
        const descripcion = document.getElementById('procedimiento_descripcion_r2_w1');
        

        if (!procedimiento || !descripcion) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const procedimientoV = procedimiento.value;
        const descripcionV = descripcion.value;
       

        formData.append('nombre', procedimientoV);
        formData.append('descripcion', descripcionV);

        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/procedimiento/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };
    
    const registrarTratamiento = () => {
        const procedimiento = document.getElementById('tratamiento_nombre_r3_w1');
        const descripcion = document.getElementById('tratamiento_descripcion_r3_w1');
        

        if (!procedimiento || !descripcion) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const procedimientoV = procedimiento.value;
        const descripcionV = descripcion.value;
       

        formData.append('nombre', procedimientoV);
        formData.append('descripcion', descripcionV);

        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/tratamiento/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };

    const registrarAparato = () => {
        const aparato = document.getElementById('aparato_nombre_r4_w1');
        

        if (!aparato) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const aparatoV = aparato.value;
       

        formData.append('nombre', aparatoV);

        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/aparato/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };
    
    const registrarUnidad= () => {
        const aparato = document.getElementById('aparato_nombre_r5_w1');
        const documento = document.getElementById('documento_unidad_r5_w1').files[0];
        const modelo_3d = document.getElementById('modelo_3d_unidad_r5_w1').files[0];
        

        if (!aparato || !documento || !modelo_3d) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const aparatoV = aparato.value;
       

        formData.append('aparato', aparatoV);
        formData.append('documento', documento);
        formData.append('archivo_3d', modelo_3d);

        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/unidad/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };
        
    
    const registrarAfeccion= () => {
        const paciente = document.getElementById('paciente_id_r6_w1');
        const descripcion = document.getElementById('afeccion_descripcion_r6_w1');
        const estado = document.getElementById('afeccion_estado_r6_w1');
        const documento = document.getElementById('afeccion_documento_r6_w1').files[0];
        

        if (!paciente || !descripcion || !estado || !documento) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const pacienteV = paciente.value;
        const descripcionV = descripcion.value;
        const estadoV = estado.value;
       

        formData.append('paciente', pacienteV);
        formData.append('descripcion', descripcionV);
        formData.append('estado', estadoV);
        formData.append('documento', documento);

        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/afeccion/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };
    
    const registrarProcedimientoRealizado= () => {
        const paciente = document.getElementById('paciente_id_r7_w1');
        const procedimiento = document.getElementById('procedimiento_nombre_r7_w1');
        

        if (!paciente || !procedimiento) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const pacienteV = paciente.value;
        const procedimientoV = procedimiento.value;
       

        formData.append('paciente', pacienteV);
        formData.append('procedimiento', procedimientoV);
        formData.append('afecciones', listaDeAfecciones);
        formData.append('realizado',isChecked);
       
        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/procedimiento_realizado/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };


    const registrarTratamientoIniciado = () => {
        const paciente = document.getElementById('paciente_id_r8_w1');
        const tratamiento = document.getElementById('tratamiento_nombre_r8_w1');
        const documento = document.getElementById('tratamiento_documento_r8_w1').files[0];
        

        if (!paciente || !tratamiento) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const pacienteV = paciente.value;
        const tratamientoV = tratamiento.value;
       

        formData.append('paciente', pacienteV);
        formData.append('tratamiento', tratamientoV);
        formData.append('afecciones', listaDeAfecciones);
        formData.append('realizado', documento);
       
        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/tratamiento_iniciado/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
    };

    const registrarTratamientoActualizado = () => {
        const tratamientoIniciadom = document.getElementById('tratamiento_iniciado_id_r9_w1'); 
        const descripcion = document.getElementById('tratamiento_actualizado_descripcion_r9_w1'); 
        const documento = document.getElementById('tratamiento_actualizado_documento_r9_w1').files[0];
        
        if (!tratamientoIniciadom || !descripcion || !documento) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };

        const formData = new FormData();

        const tratamientoIniciadomV = tratamientoIniciadom.value;
        const descripcionC = descripcion.value;
       

        formData.append('tratamiento', tratamientoIniciadomV);
        formData.append('descripcion', descripcionC);
        formData.append('documento', documento);
       
        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/actualizacion_de_tratamiento/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        };
    };
    
    const registrarDiente = () => {
        const paciente = document.getElementById('paciente_id_r10_w1'); 
        const numeracion = document.getElementById('diante_numeracion_r10_w1'); 
        const descripcion = document.getElementById('diente_descripcion_r10_w1'); 
        const documento = document.getElementById('diente_documento_r10_w1').files[0];
        
        if (!paciente || !numeracion || !documento) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };
        const formData = new FormData();

        const pacienteV = paciente.value;
        const numeracionV = numeracion.value;
        const descripcionV = descripcion.value;
       

        formData.append('paciente', pacienteV);
        formData.append('numeracion', numeracionV);
        formData.append('descripcion', descripcionV);
        formData.append('documento', documento);
       
        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/diente/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        };
    };
    
    const registrarDocumentoExtra = () => {
        const paciente = document.getElementById('paciente_id_r11_w1'); 
        const documento = document.getElementById('paciente_documento_extra_r11_w1').files[0];
        
        if (!paciente || !documento) {
            console.error('Uno o más elementos no fueron encontrados en el DOM');
        return;
        };
        const formData = new FormData();

        const pacienteV = paciente.value;

        formData.append('paciente', pacienteV);
        formData.append('documento', documento);
       
        if (localStorage.getItem('access')) {
        const jwt = `JWT ${localStorage.getItem('access')}`;
        const url = `${process.env.REACT_APP_API_URL}/api/registros/registrar/doc_extra/`;

        const options = {
            method: 'POST',
            headers: {
            'Authorization': jwt,
            },
            body: formData,
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        };
    };


        
    return(
        <div className='bg-base-300 mx-auto p-8 rounded-lg max-w-4xl'>

            <select onChange={(e)=>handleChangeRegistro(e.target.value)}  className="select select-success w-full max-w-xs mx-auto mb-6">
                <option disabled selected>Registrar</option>
                <option>{PACIENTE}</option>
                <option>{MODELO_3D_BOCA}</option>
                <option>{PROCEDIMIENTO}</option>
                <option>{TRATAMIENTO}</option>
                <option>{APARATO}</option>
                <option>{UNIDAD}</option>
                <option>{AFECCION}</option>
                <option>{PROCEDIMIENTO_REALIZADO}</option>
                <option>{TRATAMIENTO_INICIADO}</option>
                <option>{TRATAMIENTO_ACTUALIZADO}</option>
                <option>{DIENTE}</option>
                <option>{DOCUMENTO_EXTRA}</option>
            </select>

            <div className='divider'></div>


            <div className='flex flex-col items-center'>
                    
            {registrar === PACIENTE && (
                <div className='mb-5 w-full'>
                <div>
                  <label>Nombre(s)</label>
                  <input type="text" id='paciente_nombre_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                </div>
          
                <div className='mb-5 flex w-full space-x-6'>
                  <div className='flex-1'>
                    <label>Apellido materno</label>
                    <input type="text" id='paciente_materno_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                  </div>
                  <div className='flex-1'>
                    <label>Apellido paterno</label>
                    <input type="text" id='paciente_paterno_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                  </div>
                </div>
          
                <div className='mb-5 w-full'>
                    <div>
                        <label>Correo electrónico</label>
                    </div>
                    <div>
                        <input type="text" id='paciente_correo_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                    </div>
                  
                </div>
          
                <div className='mb-5 flex w-full space-x-6'>
                  <div className='flex-1'>
                    <div>
                        <label>Dirección</label>
                    </div>
                    <div>
                       <input type="text" id='paciente_direccion_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" /> 
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <div><label>Nacionalidad</label></div>
                    <div>
                        <select id='paciente_nacionalidad_r0_w1' className="select select-success w-full max-w-xs mx-auto">
                            <option disabled selected>Nacionalidad</option>
                            <option value="MEXICANA">{MEXICANA}</option>
                            <option value="ESTADOUNIDENSE">{ESTADOUNIDENSE}</option>
                        </select>
                    </div>
                    
                  </div>
                </div>
          
                <div className='mb-5 w-full'>
                  <div><label>Identificación oficial</label></div>

                  <div>
                    <input type="text" id='paciente_id_oficial_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                  </div>
                  
                </div>
          
                <div className='mb-5 w-full'>
                    <div><label>Género</label></div>

                    <div>
                        <select id='paciente_genero_r0_w1' className="select select-success w-full max-w-xs mx-auto">
                            <option disabled selected>Seleccionar</option>
                            <option value="HOMBRE">{HOMBRE}</option>
                            <option value="MUJER">{MUJER}</option>
                            <option value="SIN_ESPECIFICAR">{SIN_ESPECIFICAR}</option>
                        </select>
                    </div>
                  
                  
                </div>
          
                <div className='mb-5 w-full flex space-x-6'>
                  <div className='flex-1'>
                    <div><label>Fecha de nacimiento</label></div>
                    <div>
                        <input type="date" id='paciente_nacimiento_r0_w1' className="input input-bordered w-full max-w-xs mx-auto" />
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <div><label>Estatura</label></div>
                    <div>
                        <input type="text" id='paciente_estatura_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                    </div>
                    
                  </div>
                  <div className='flex-1'>
                    <div><label>Peso</label></div>
                    <div>
                        <input type="text" id='paciente_peso_r0_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                    </div>
                    
                  </div>
                </div>
          
                <div>
                  <button onClick={RegistrarPaciente} className='btn'>Subir</button>
                </div>
              </div>

            ) || registrar === MODELO_3D_BOCA && (
                <div className='mb-5 w-full'>

                <div className='mb-5 flex w-full space-x-6'>
                    <div className='flex-1'>
                        <div>
                            <label>Paciente</label>
                        </div>

                        <div>
                            <input type="text" id='paciente_id_r1_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div>
                        <label>Modelo 3D</label>
                        </div>
                        <div>
                            <input id='modelo_3d_boca_r1_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>
                    </div>


                </div>
                
                <div>
                    <button onClick={()=>registrarModelo3D()} className='btn'>Subir</button>
                </div>
                </div>
            ) || registrar === PROCEDIMIENTO && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Nombre</label>
                        </div>

                        <div>
                            <input type="text" id='procedimiento_nombre_r2_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div>
                        <label>Descripcion</label>
                        </div>

                        <div>
                        <textarea id='procedimiento_descripcion_r2_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                        </div>
                        </div>

                </div>
                
                <div>
                    <button className='btn' onClick={()=>registrarProcedimiento()}>Subir</button>
                </div>
                </div>
            ) || registrar === TRATAMIENTO && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Nombre</label>
                        </div>

                        <div>
                            <input type="text" id='tratamiento_nombre_r3_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div>
                        <label>Descripcion</label>
                        </div>

                        <div>
                            <textarea id='tratamiento_descripcion_r3_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                        
                        </div>

                        </div>

                </div>
                
                <div>
                    <button onClick={()=>registrarTratamiento()} className='btn'>Subir</button>
                </div>
                </div>
            ) || registrar === APARATO && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Nombre</label>
                        </div>

                        <div>
                            <input type="text" id='aparato_nombre_r4_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>
                    </div>  

                </div>
                
                <div>
                    <button className='btn' onClick={()=>registrarAparato()}>Subir</button>
                </div>
                </div>
            ) || registrar === UNIDAD && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Aparato</label>
                        </div>

                        <div>
                            <input type="text" id='aparato_nombre_r5_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <div>
                            <label>Documento</label>
                        </div>

                        <div>
                            <input id='documento_unidad_r5_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>
                    </div>
                    
                    <div className='flex-1'>
                        <div>
                            <label>Modelo 3D</label>
                        </div>

                        <div>
                            <input id='modelo_3d_unidad_r5_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btn' onClick={()=>registrarUnidad()}>Subir</button>
                </div>
                </div>
            ) || registrar === AFECCION && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Paciente</label>
                        </div>

                        <div>
                            <input type="text" id='paciente_id_r6_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>

                    </div>

                    <div className='flex-1'>
                        <div>
                            <label>Descripcion</label>
                        </div>

                        <div>
                            <textarea id='afeccion_descripcion_r6_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                            </div>
                        </div>
                    
                    <div className='flex-1'>
                        <div>
                            <label>Estado de la Afeccion</label>
                        </div>

                        <div>
                            <select id='afeccion_estado_r6_w1' className="select select-success w-full max-w-xs mx-auto mb-6">
                            <option disabled selected>Estado</option>
                                <option>{EN_TRATAMIENTO}</option>
                                <option>{TRATAMIENTO_TERMINADO}</option>
                                <option>{TRATAMIENTO_SUSPENDIDO}</option>
                                <option>{VIGENTE_SIN_TRATAMIENTO}</option>
                                <option>{IRREBERSIBLE_CON_INTENTO_DE_TRATAMIENTO}</option>
                                <option>{IRREBERSIBLE_SIN_INTENTO_DE_TRATAMIENTO}</option>
                            </select>
                        </div>

                        <div>
                            <div>Documento</div>
                            <input id='afeccion_documento_r6_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>

                    </div>
                </div>
                <div>
                    <button className='btn' onClick={()=>registrarAfeccion()}>Subir</button>
                </div>
                </div>
            ) || registrar === PROCEDIMIENTO_REALIZADO && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Paciente</label>
                        </div>

                        <div>
                            <input type="text" id='paciente_id_r7_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>

                    </div>

                    <div className='flex-1'>
                        <div>
                            <label>Procedimiento</label>
                        </div>

                        <div>
                            <textarea id='procedimiento_nombre_r7_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                            </div>
                        </div>
                    
                    <div className='flex-1'>
                        <div>
                            <label>Afecciones Trabajadas (si se procedio para una afeccion)</label>
                            <input type="text" id='afeccion_id_r7_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                            <button onClick={()=>handleAddAfeccion()} className='btn'>Añadir</button>
                        </div>
                    </div>

                    <div>
                    <label>
                        <input 
                        type="checkbox" 
                        checked={isChecked} 
                        onChange={handleCheckboxChange} 
                        />
                        Seleccionar
                    </label>
                    <p>Valor: {isChecked ? 'True' : 'False'}</p>
                    </div>
  
                </div>
                <div>
                    <button className='btn' onClick={()=>registrarProcedimientoRealizado()}>Subir</button>
                </div>
                </div>
            ) || registrar === TRATAMIENTO_INICIADO && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Paciente</label>
                        </div>

                        <div>
                            <input type="text" id='paciente_id_r8_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>

                    </div>

                    <div className='flex-1'>
                        <div>
                            <label>Tratamiento</label>
                        </div>

                        <div>
                            <textarea id='tratamiento_nombre_r8_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                            </div>
                        </div>
                    
                    <div className='flex-1'>
                       

                        <div>
                            <div>Documento</div>
                            <input id='tratamiento_documento_r8_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>

                    </div>
                </div>
                <div>
                    <button className='btn' onClick={()=>registrarTratamientoIniciado()}>Subir</button>
                </div>
                </div>
            ) || registrar === TRATAMIENTO_ACTUALIZADO && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Tratamiento</label>
                        </div>

                        <div>
                            <input type="text" id='tratamiento_iniciado_id_r9_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>

                    </div>

                    <div className='flex-1'>
                        <div>
                            <label>Descripcion</label>
                        </div>

                        <div>
                            <textarea id='tratamiento_actualizado_descripcion_r9_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                            </div>
                        </div>
                    
                    <div className='flex-1'>
                        
                        <div>
                            <div>Documento</div>
                            <input id='tratamiento_actualizado_documento_r9_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>

                    </div>
                </div>
                <div>
                    <button className='btn' onClick={()=>registrarTratamientoActualizado()}>Subir</button>
                </div>
                </div>
            ) || registrar === DIENTE && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Paciente</label>
                        </div>

                        <div>
                            <input type="text" id='paciente_id_r10_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>

                    </div>

                    <div className='flex-1'>
                        <div>
                            <label>Numeración</label>
                        </div>

                        <div>
                            <textarea id='diante_numeracion_r10_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>                            </div>
                        </div>
                    
                    <div className='flex-1'>
                        <div>
                            <label>Descripción</label>
                        </div>

                        <div>
                            <textarea id='diente_descripcion_r10_w1' className="textarea textarea-secondary w-full" placeholder="Bio"></textarea>
                        </div>

                        <div>
                            <div>Documento</div>
                            <input id='diente_documento_r10_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>

                    </div>
                </div>
                <div>
                    <button className='btn' onClick={()=>registrarDiente()}>Subir</button>
                </div>
                </div>
            ) || registrar === DOCUMENTO_EXTRA && (
                <div className='mb-5 w-full'>

                <div className='mb-5'>
                    <div className='flex-1'>
                        <div>
                            <label>Paciente</label>
                        </div>

                        <div>
                            <input type="text" id='paciente_id_r11_w1' placeholder="Type here" className="input input-bordered w-full max-w-xs mx-auto" />
                        </div>

                    </div>

                    
                    
                    <div className='flex-1'> 

                        <div>
                            <div>Documento</div>
                            <input id='paciente_documento_extra_r11_w1' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>

                    </div>
                </div>
                <div>
                    <button className='btn' onClick={()=>registrarDocumentoExtra()}>Subir</button>
                </div>
                </div>
            ) }


            </div>
        </div>
    )
};


export default Registros