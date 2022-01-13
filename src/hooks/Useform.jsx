import {useReducer} from "react"

const ACTION = {
    UPDATE_KEYWORD:'update_keword',
    UPDATE_RAITING:'update_raiting'
}

const reduccer =(state,action)=>{
    //el param recibe el value del onchange
    switch (action.type) {
        case ACTION.UPDATE_KEYWORD:
             return {
                ...state,
                keywor:action.payload,
                time:state.time + 1
             }
        case ACTION.UPDATE_RAITING:
             return {
                ...state,
                raiting:action.payload
            }
        default:
            return state
    }
   
}

const Useform =({initialKeword='',initalRaiting=''})=>{
    
    const [state,dispatch] = useReducer(reduccer,{
            keywor: decodeURIComponent(initialKeword),
            raiting: initalRaiting,
            time:0
        })
    const {keywor,raiting,time} = state

    return {
        keywor,
        raiting,
        time,
        //hacer una funcion con el dispatch para keywor
        updateKeword: keyword => dispatch({type:ACTION.UPDATE_KEYWORD,payload: keyword}),
        //hacer una funcion para el raiting
        updateRaiting: raiting => dispatch({type:ACTION.UPDATE_RAITING,payload:raiting})
    }
}

export default  Useform