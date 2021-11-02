import React from 'react'



const Getreding = () => {
    const  url = `https://api.giphy.com/v1/trending/searches?q=&limite=10&api_key=Bl5n93o1TXOey7JMQbDqAUkbx2RYXyNQ`;
   
   return fetch(url)
     .then((res) => res.json())
     .then((response) => {
       const { data = [] } = response;
       
       return data
     });
 };
 export default Getreding;
 
 //aqui el saca la imagen url {url} =  img.images.dowszised_medium
 
 