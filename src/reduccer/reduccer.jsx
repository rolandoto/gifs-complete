
export  const initialState ={count:0}

export const reducer =(state,action)=>{
    switch (action.type){
        case 'increment':
            return {count:state.count + 1}
        case 'decrement':
            return {count : state.count -1}
        case 'reset':
            return {count: state.count = 0}
        default:
            throw new Error()
    }   
}