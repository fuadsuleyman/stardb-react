import React, { Component } from 'react';
import './random-planet.css';
import ApiService from '../../services/api-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';

/*
- state yaziriq asagida klasin icine
- const la destruks edib divvlerin icine yaziriq
- api service-i import edib objekt yaradiriq new ile
- updateBerries funq yaradiriq, melumati setState ile otururuk
- constryktorun icinde bu funqsiyani cagiririq
- image deyishsin deye link elave edirik, id hissesini deyisirik
- random qunqsiya elave edirik
*/

export default class RandomPlanet extends Component {

    static defaultProps = {
      updateInterval: 10000
    }

    // bu props-u tipini yoxlayir
    // bunu yazmadan evvel project-de npm install prop-types edirik
    // isRequired de yazmaq olur. defaultProps olanda isRequired ishlemir
    static propTypes = {
      updateInterval: PropTypes.number
    }

    apiService = new ApiService();

    // loading state-i spinnerin zaqruzkadan evvel gorunmesi ucundu
    state = {
        planet: {},
        loading: true
    }

    // construktorun icindeki kodu compDIdMOunt-a atdim, best praktice budu
    // constructor(){
    //     super();
    // }

    componentDidMount(){
        const {updateInterval} = this.props; 
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    // bunu etmesek toggle etdikce interval-lar silinmeyecek, get-gede suretlenecek
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    // asagida loading-i false edirikki yeni error-a catibsa demeli loading olmayacaq
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    // api-service-de api-den hansi melumatlarin lazim oldugunu qeyd etdik
    // api-den aldigumiz obyektle state-i update edirik
    updatePlanet = () => {
        const id = Math.floor(Math.random()*17) + 2;
        this.apiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)
    }


    render() {
        const { planet, loading, error } = this.state;

        const hasDate = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        

        // spinner ucun esas mentiq asagidakidi, loading state-i true olduqda spinneri
        // eks halda img ve div olan hisseni gosterir
        const spinner = loading ? <Spinner/> : null;
        const content = hasDate ? <PlanetView planet = {planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}                
                {content}
            </div>
        );
    }
}

// spinneri yerlesdirmek ucun yeni component yaratdim
const PlanetView = ({ planet }) => {
    const { id, name, population,
        rotationPeriod, diameter } = planet;
    
      return (
        <React.Fragment>
          <img className="planet-image"
               src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
               alt="planet" />
          <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Population</span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Rotation Period</span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Diameter</span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </React.Fragment>
      );   
}; 