import { useState ,useEffect, useContext} from "react";
import  GitContext  from "../context/GifsContext";
import Getgif from "../service/Getgif";

const INTIAL = 0

const UseGift = ({keyword,raiting}) =>{
    
    const [page,setPage] = useState(INTIAL)
  
    const [loading,setLoadings] =useState(false)
    const {gifs,setGifs} = useContext(GitContext)
    const [nextloading,setNextloading] = useState(false)
  //const [gifs, setGifs] = useState(
  //  {loading:false, results: []});
  const keywordTouse = keyword || localStorage.getItem('lastKeyword') || 'random'
  useEffect(() => {
    //setLoadin(true)
    //setGifs(
      //actualy  => ({loading: true, results: actualy.results})
    //)
    //si tenemos la keyword o sino tomalo del localstorage
    //recuperamos la keyword del  localsotrage
    
    setLoadings(true)
    Getgif({ keyword :keywordTouse,raiting})
    .then((gifse) => {
      //setGifs(gifs)});
     // setLoadin(false)
     //setGifs({loading: false, results: gifs})
     setGifs(gifse)
     setLoadings(false)
     //guardamos la keyword en el  localsotrage
      
    })
  }, [keyword,keywordTouse,setGifs,raiting]);
  //MUY INPORTANTE SABER QUE EN EL OBJECTO ES UNA DEPENDECIA
  //QUE ES NECESARIA

  useEffect(() => {
    if(page ===  INTIAL)return 
    setNextloading(true)
    Getgif({keyword:keywordTouse,page,raiting})
    .then((nextGifs => {
      setNextloading(false)
      //el aqui cocatena los resultados anterios con los nuevos 
      //los unos para que cada que le de click bayan bajando cada vez mas
      setGifs(preveGifs => preveGifs.concat(nextGifs))
    })).catch((e) =>{
      setNextloading(true)
      console.error(e)
    })
  },[,keywordTouse,page])

  return {loading,gifs,setPage,nextloading}
}

export default UseGift