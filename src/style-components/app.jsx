import  styled, { keyframes } from 'styled-components'
import  {Link as Linkrouter} from '@reach/router'
import { fadeIn } from '../Style-component-Global/style'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(20deg);
  }
`;

export const Link = styled(Linkrouter)`
color:white;
&[aria-current]{
    color:#0088ff; 
  //aqui le estoy pasando un para metro cuando cargue el punto me carge un segundo
    &:after{
        content:'·';
        position: absolute;
        bottom: 0;
        font-size: 34px;
        line-height: 20px;
        margin-left: 10px;
      &:hove {
        
    opacity: 1
    transition: all 0.10s ease 0s;
      }
     
  }  
`
export const Nav = styled.div`
display: flex;
justify-content: flex-end;
`

export const Flex = styled.div`
display:flex;
justin-content:center
`

export const Img = styled.img`
vertical-align: middle;
width: 419px;
align-items: stretch;
height: 168px;
object-fit: contain;`


export const LisProduct = styled.div`
text-align:center;`



export const Image = styled.img`
${fadeIn({time:"2s"})}
    box-shadow: 0 10px 14px rgba(0,0,0,.2) ;
    object-fit: cover;
    position: absolute;
    top: 0;
`

export const ImgWraper = styled.div `
border-radius: 10px;
display: grid;
grid-auto-columns: min-content;
overflow: hidden;
padding: 15.25% 5px 0 0;
position: relative;
width: 100%;
`

export const Flexed = styled.div`
    display: grid;
    grid-template-rows: 273px [Line1] 200px [Line2] 200px [Line3] 200px [Line4];
    grid-template-columns: 326px 350px 350px 288px;
    grid-gap: 4px;
  `

  export const FLeximage = styled.img`
  vertical-align: middle;
  width: 419px;
  align-items: stretch;
  height: 168px;
  object-fit: contain;
  `

  export  const White = styled.div`
  color:white;`


  export const Boton = styled.button`
  
   
      width: 300px;
      height: 45px;
      font-family: 'Roboto', sans-serif;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      font-weight: 500;
      color: #000;
      background-color: #fff;
      border: none;
      border-radius: 45px;
      box-shadow: 0px 15px 20px #0a58ca;
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
      
    
    &:hover {
      background-color: blue;
      box-shadow: 0px 15px 20px #0a58ca;
      color: #fff;
      transform: translateY(-7px);
    }
     
    

  `

  export const Section = styled.section`
  overflow: hidden;
  `

  export const Lx = styled.div`
  display: grid;
    grid-template-rows: 273px [Line1] 140px [Line2] 124px [Line3] 112px [Line4];
    grid-template-columns: 326px 350px 350px 288px;
    grid-gap: 4px;`



export const Center = styled.div`

text-align: center;
`