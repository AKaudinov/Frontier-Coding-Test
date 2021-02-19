import React from 'react';
import  {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../components/App';
import NotFound from "../components/NotFound";


export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    )
};

export default AppRouter;
