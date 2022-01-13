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
import Default from "./component/Default";
import  Headers from "./component/Headers";
import { UserContext } from "./context/UseContext";
import Register from "./page/Register";
import LoginPage from "./page/LoginPage";

const Homepage = React.lazy(() => import('./component/Home'))

export default function App() {

 
  const custon = CustonHooks()

  const useCarts = Usecart()

  //cuando se usa react-router-dom o wouter 
  //se puede usar esto como una funcion
  // <Route component={() => <h1> 404 error </h1>}
  //  path='/404'/>

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
            <UserContext>
                <GitContext>
                <ContexCart.Provider value={useCarts} >
                    <Headers />
                <Router>
                    <Homepage path='/'/>
                    <ListOfGif  path="/gif/:keyword/:raiting" />
                    <Calculadora path='/calculadora' />
                    <CarritoStore path='/carrito' />
                    <Detail  path='/Detail/:id' />
                    <DetailDefault path='DetailDefault/:id' />
                    <Checkout path='/Cheackout' />
                    <Default path='/404' />
                    <LoginPage  path='/Login' />
                     <Register  path='/Register' />
                </Router>
                </ContexCart.Provider>
                </GitContext>
            </UserContext>
            </Suspense>
        </Section>
    </StaticContext.Provider>
  );
}
