import React from 'react';
import ItemDetails, { Record } from '../item-details';
//import { SwapiServiceConsumer } from '../swapi-service-context';
//context-le hoc ishlediyi ucun burdan sildim
import { WithSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
        return (
            <ItemDetails {...props}>
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation Period" />
                <Record field="diametr" label="Diameter" />
            </ItemDetails>
        )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default WithSwapiService(PlanetDetails, mapMethodsToProps);