import {keyframes,css} from 'styled-components'
import  styled from 'styled-components'

    export const fadeIn = ({time ='3s', type="ease"} = {}) => 
    css` animation: ${time} ${fadekeyframes} ${type};`


    const fadekeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }


    to {

        filter: blur(0);
        opacity: 1;
    }
    `



const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;