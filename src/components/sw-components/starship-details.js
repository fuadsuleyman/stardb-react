import React from 'react';
import ItemDetails, { Record } from '../item-details';
//import { SwapiServiceConsumer } from '../swapi-service-context';
//context-le hoc ishlediyi ucun burdan sildim
import { WithSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default WithSwapiService(StarshipDetails, mapMethodsToProps);