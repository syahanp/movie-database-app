import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';
import './style/main.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const SingleMovie = lazy(() => import('./pages/SingleMovie'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/movie" component={SingleMovie} />
                </Switch>

                <Modal />
                
            </Suspense>
        </Router>
    )
}

export default App
