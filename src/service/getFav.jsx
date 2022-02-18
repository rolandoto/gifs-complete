const ENDPOINT ='https://deno-api-users-login.herokuapp.com'

const getFavs =({jwt})=>{

    return fetch(`${ENDPOINT}/favs`,{
        method:'GET',
        headers:{
            'Authorization': jwt,
            'Content-type':'application/json'
        }     
    }).then(resp =>{
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
         const {favs} =resp
         return favs
    })
}

export default getFavs
