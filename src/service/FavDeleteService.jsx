const ENDPOINT ='https://deno-api-users-login.herokuapp.com'

const FavDeleteService =({jwt,id})=>{

    return fetch(`${ENDPOINT}/favs/${id}`,{
        method:'DELETE',
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

export default FavDeleteService