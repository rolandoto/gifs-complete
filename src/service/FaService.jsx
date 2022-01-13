const ENDPOINT ='https://deno-api-users-login.herokuapp.com'

const FavService =({id,jwt})=>{

    return fetch(`${ENDPOINT}/favs/${id}`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify({jwt})
    }).then(resp =>{
        if(!resp.ok) throw new Error('Response is not ok')
        return resp.json()
    }).then(resp=>{
         const {favs} =resp
         return favs
    })
}

export default FavService