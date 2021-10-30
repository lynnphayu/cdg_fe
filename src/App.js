import React, { Suspense, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import { Evouchers } from './features/evouchers/Evouchers';
import { Evoucher } from './features/evouchers/Evoucher'
import { Works } from './features/works/Works';
import { Contactus } from './features/works/Contactus';
import { Banner } from './features/works/Banner';

function App() {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => console.log("RE PAR"), [])
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <div className="">
          <Suspense fallback={<div className="h-full w-full flex flex-wrap items-center content-center justify-center">
            <span className="flex h-4 w-4 justify-center items-center">
              <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </span>
          </div>}>
            <Switch location={location}>
              <Route exact path="/"><Evouchers /></Route>
              <Route path="/evoucher"><Evoucher /></Route>
              <Route path="/counter"> <Counter /></Route>
              <Route path="/works"><>
                <Banner />
                <Works />
                <Contactus />
              </></Route>
            </Switch>
          </Suspense>
        </div >
      </CSSTransition>
    </TransitionGroup >
  );
}

export default App;
