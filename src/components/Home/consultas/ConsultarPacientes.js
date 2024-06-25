import { useDispatch, connect } from "react-redux";
import { useEffect, useState } from "react";
import { get_pacientes_por_parametros } from '../../../redux/actions/consultas';
import DispPacientes from "../dipslays/DispPacientes";



const ConsultarPacientes = ({ pacientes_por_parametro }) => {
    const [filters, setFilters] = useState({
        nombre: '',
        apellido_materno: '',
        apellido_paterno: '',
        correo_electronico: '',
        direccion: '',
        nacionalidad: '',
        identificacion_oficial: '',
        edad_min: '',
        edad_max: '',
        peso_min: '',
        peso_max: '',
        estatura_min: '',
        estatura_max: ''
    });

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSubmit = () => {
        dispatch(get_pacientes_por_parametros(filters));
    };

    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Filtrar Pacientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" name="nombre" value={filters.nombre} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido Materno</label>
                        <input type="text" name="apellido_materno" value={filters.apellido_materno} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                        <input type="text" name="apellido_paterno" value={filters.apellido_paterno} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                        <input type="text" name="correo_electronico" value={filters.correo_electronico} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Dirección</label>
                        <input type="text" name="direccion" value={filters.direccion} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nacionalidad</label>
                        <input type="text" name="nacionalidad" value={filters.nacionalidad} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Identificación Oficial</label>
                        <input type="text" name="identificacion_oficial" value={filters.identificacion_oficial} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Edad Mínima</label>
                        <input type="number" name="edad_min" value={filters.edad_min} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Edad Máxima</label>
                        <input type="number" name="edad_max" value={filters.edad_max} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Peso Mínimo</label>
                        <input type="number" name="peso_min" value={filters.peso_min} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Peso Máximo</label>
                        <input type="number" name="peso_max" value={filters.peso_max} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Estatura Mínima</label>
                        <input type="number" name="estatura_min" value={filters.estatura_min} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Estatura Máxima</label>
                        <input type="number" name="estatura_max" value={filters.estatura_max} onChange={handleInputChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button onClick={handleSubmit} className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md">Buscar</button>
                </div>
            </div>

            <div>
                {pacientes_por_parametro ? (
                    <div>
                        <DispPacientes pacientes={pacientes_por_parametro}/>
                    </div>
                ) : (
                    <div>
                        <p>No se encontraron resultados.</p>
                    </div>
                )}
            </div>

        </div>
        
    );
};

const mapStateToProps = state => ({
    pacientes_por_parametro: state.Consultas.pacientes_por_parametro,
});

export default connect(mapStateToProps)(ConsultarPacientes);