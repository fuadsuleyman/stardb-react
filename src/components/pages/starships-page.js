import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components';

// burda kod daha qisadi, sadece olaraq, header.js-de url-in sonuna / qoyduq
// diger page sehifeleri ile muqaise ele, bele daha best praktice-di
const StarshipsPage = ({ history }) => {
  return (
    <StarshipList onItemSelected={(id) => history.push(id)} />
  );
};

export default withRouter(StarshipsPage);

