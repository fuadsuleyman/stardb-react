import React from 'react';
import ItemDetails, { Record } from '../item-details';
//import { SwapiServiceConsumer } from '../swapi-service-context';
//context-le hoc ishlediyi ucun burdan sildim
import {WithSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default WithSwapiService(PersonDetails, mapMethodsToProps);
