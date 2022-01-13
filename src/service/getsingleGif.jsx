
const fromApiresponseTogufs =apiresponse =>{
    const {data} = apiresponse
    const { title, images, id} = data
    const { url } = data.images.downsized_medium;
    return {title,
            images,
            id,
            url}
    
}

export default function GetSingleGif ({id}){
    return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=Bl5n93o1TXOey7JMQbDqAUkbx2RYXyNQ`)
    .then(resp => resp.json())
    .then(fromApiresponseTogufs)
}