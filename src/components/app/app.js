// new
import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import ApiService from "../../services/api-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import './app.css';
// contexti istifade etmekcu asagida import edirik
// ve asagida butun comp-leri icine saliriq
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';
import { PlanetDetails } from '../sw-components';




export default class App extends Component {

  // state-e atdigimcun burdan sildim
  // swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true,
    swapiService: new ApiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  onLogOut = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof ApiService ? DummySwapiService : ApiService;
      console.log("swich to " + Service.name);

      return {
        swapiService: new Service()
      };
    });
  };

  render() {

    const { isLoggedIn } = this.state;

    // asagida exact deyirki sirf bu routerde goster
    // exact-i yigisdirsaq her yerde gosterecek
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            {/* componentle de yazmaq olar, render funq-la da Route-u yazmaq olar */}
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path='/'
                  render={() => <h2>Welcome to Star DB</h2>}
                  exact />
                <Route path='/people/:id?' exact component={PeoplePage} />
                <Route path='/planets' exact component={PlanetsPage} />
                <Route path='/starships' exact component={StarshipsPage} />
                <Route path='/secret'
                  render={() => (<SecretPage isLoggedIn={isLoggedIn}
                    onLogOut={this.onLogOut}
                    alertMessage={this.alertMessage} />)} />
                <Route path='/login'
                  render={() => (<LoginPage isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin} />)} />
                {/* match-in komeyi ile starshipDetail-e id otururuk, url-den goturur */}
                <Route path='/planets/:id'
                  render={({ match }) => {
                    const { id } = match.params;
                    return <PlanetDetails itemId={id} />
                  }} />
                <Route path='/starships/:id'
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }} />

                  switch-den evvelki 2 setr yalnis url zamani actionlardi
                  ya redirect-le hell etmek olar, ya da path-i olmayan Route-la
                  {/* <Redirect to='/'/> */}
                  <Route render={()=> <h3 className='jumbotron text-center'>Page Not Found!</h3>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

