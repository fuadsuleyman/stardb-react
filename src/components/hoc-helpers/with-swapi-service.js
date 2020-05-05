import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

// hoc
// birinci argument componentdi, amma ikinci argument service-deki konkret methodlardi
const WithSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default WithSwapiService;