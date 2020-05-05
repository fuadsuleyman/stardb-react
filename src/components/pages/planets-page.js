import React from 'react';
import { withRouter } from 'react-router-dom';
import { PlanetList } from '../sw-components';

const PlanetsPage = ({ history }) => {
  return (
    <PlanetList onItemSelected={(itemId) => {
      history.push(`/stardb-react/planets/${itemId}`)
    }} />
  );
}

export default withRouter(PlanetsPage);







