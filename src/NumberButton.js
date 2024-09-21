import {ACTIONS} from './App.js';

export default function NumberButtonButton({dispatch, digit}){
    return <button onClick={()=>dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit}})}>{digit}</button>
}