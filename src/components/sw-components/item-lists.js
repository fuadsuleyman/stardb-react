import React from 'react';
import { withData, WithSwapiService } from '../hoc-helpers';
//import ApiService from '../../services/api-service';
import ItemList from '../item-list';

// melumatlari context-den alacagimiz ucun asagidakilar lazim deyil
// const swapiService = new ApiService();

// const {
//     getAllPeople,
//     getAllStarships,
//     getAllPlanets
// } = swapiService;


// funqsiya compozisiya movzusu
// Wrapped yerinde her hansi component ola biler
// children yerideki ise funqsiyadi
const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

// yuxarida fn-in yerinde ola bilecek funqsiyalar
const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = WithSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
    mapPersonMethodsToProps);

const PlanetList = WithSwapiService(
    withData(
        withChildFunction(ItemList, renderName)),
        mapPlanetMethodsToProps);

const StarshipList = WithSwapiService(
    withData(
        withChildFunction(ItemList, renderModelAndName)),
        mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}