import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Product from './Product';

const Pages = ({ user }) => {
    return (
        <Router>
            <Switch>                
                <Route exact path='/' >
                    <Me user={user} />
                </Route>
                <Route exact path='/projects' >
                    <Projects user={user} />
                </Route>
                <Route exact path='/product' >
                    <Product user={user} />
                </Route>
                <Route exact path='/work' >
                    <Work user={user} />
                </Route>
                <Route exact path='/education' >
                    <Education user={user} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Pages;