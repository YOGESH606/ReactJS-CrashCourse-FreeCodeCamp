import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './home';
import About from './about';
import People from './people';
import Error from './error';
import Person from './person';

import Navbar from './navbar';

const ReactRouteSetup=()=>{
    return <Router>
        <Navbar/>   
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/About'>
                <About />  
            </Route>

            <Route path='/People'>
                <People />
            </Route>

            <Route path='/person/:id' children={<Person/>}>      
            </Route>

            <Route path='*'>
                <Error />
            </Route>
        </Switch>
        
    </Router>
};

export default ReactRouteSetup;