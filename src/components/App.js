
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
            <Route exact path="/badges/edit/:badgeId" component={BadgeEdit} />
            <Route component={NotFound} />
          </Switch>
      </Layout>      
    </BrowserRouter>
  );
}

export default App;