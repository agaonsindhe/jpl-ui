import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import ClassicLeague from '../pages/ClassicLeague'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/JPL/" component={Dashboard}/>
            <Route path="/classicleague" component={ClassicLeague}/>
        </Switch>
    )
}

export default Routes
