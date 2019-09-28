
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonPage } from '@ionic/react';
import './App.css';
import Home from '../../Home/Home';
import * as ROUTES from './constants/routes';


class App extends Component {
  render() {
    return (
      <Router>
        <IonApp>
          <IonPage >
            <Switch>
              <Route exact path={ROUTES.HOME} component={Home} />
            </Switch>
          </IonPage>
        </IonApp>
      </Router>
    );
  }
}

export default App;