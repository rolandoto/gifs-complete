
const Getgif = ({ keyword ,page} = {}) => {
   const  url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&limite=1&offset=${page * 25}&api_key=Bl5n93o1TXOey7JMQbDqAUkbx2RYXyNQ`;
  
  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gife = data.map((img) => {
          const { title, images, id } = img;
          const { url } = img.images.downsized_medium;
          return { title, images, id, url };
        });
        return gife;
      }
    });
};
export default Getgif;

//aqui el saca la imagen url {url} =  img.images.dowszised_medium

