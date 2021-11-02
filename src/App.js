import React, { useState,Suspense } from "react";
import ListOfGif from "./component/ListOfGif";
import Detail from "./component/Detail";
import { Router } from "@reach/router";
import Calculadora from "./service/custon-hooks/Calculadora";
import CarritoStore from "./pages/CarritoStore";
import Home from "./component/Home";
import './index.css'
import { BsFillBagFill } from "react-icons/bs";
import { ImHome3,ImPencil2,ImCodepen,ImAppleinc } from "react-icons/im";
import {Link} from './style-components/app'
import { StaticContext } from "./context/StatictContex";
import CustonHooks from "./service/custon-hooks/CustonHooks";
import { GitContext } from "./context/GifsContext";
import Checkout from "./pages/Checkout.jsx/Sheckout";
import { ContexCart } from "./context/ContexCart";
import { Usecart } from "./hooks/Usecart";
import DetailDefault from "./component/DetailDefault";
import ListHome from "./component/ListHome";
import {Section}  from './style-components/app'

const Homepage = React.lazy(() => import('./component/Home'))

export default function App() {

  const NotFound = () => (
    <div>lo siento no found</div>
  ) 

  const custon = CustonHooks()

  const useCarts = Usecart()

  return (
       <StaticContext.Provider value={{name:'Rolando'}}>
        <Section className="App">
          <Suspense fallback={null}>
          <div className='flex-card'>
                  <Link to='/'>
                      <ImAppleinc />
                  </Link>
                  <Link to='/gif/goku'>
                      <ImHome3 />
                  </Link>
                  <br/>
                  <Link to='/calculadora'> 
                      <BsFillBagFill />
                  </Link>
                  <br/>
                  <Link to='/Action'> 
                     <ImPencil2 />
                  </Link>
                  <br/>
                  <Link to='/carrito'> 
                      <ImCodepen />
                  </Link>
                  <br/>
            </div> 
            <GitContext>
           <ContexCart.Provider value={useCarts} >
              <Router>
                  <Homepage path='/'/>
                  <ListOfGif path='/gif/:keyword' />
                  <Calculadora path='/calculadora' />
                  <CarritoStore path='/carrito' />
                  <Detail  path='/Detail/:id' />
                  <DetailDefault path='DetailDefault/:id' />
                  <Checkout path='/Cheackout' />
                  <NotFound default />
              </Router>
              </ContexCart.Provider>
            </GitContext>
            </Suspense>
        </Section>
    </StaticContext.Provider>
  );
}
