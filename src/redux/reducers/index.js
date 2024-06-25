import  { combineReducers } from 'redux';
import Auth from './auth';
import Consultas from './consultas';

export default combineReducers({
    Auth,
    Consultas,
})