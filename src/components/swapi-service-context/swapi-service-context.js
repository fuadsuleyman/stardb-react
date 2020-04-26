import React from 'react';

// ApiService-in butun componentlerde elcatan olmasi ucun context-den istifade edirik
// Provideri App.js de import edib istifade edirik
// Comsumer-i ise Details.js faylinda

const {
    Provider: SwapiServiceProvider,
    Consumer: SwapiServiceConsumer
} = React.createContext();

export {
    SwapiServiceProvider,
    SwapiServiceConsumer
};
