import React from 'react';
import ReactDOM from 'react-dom';
import CompaniesPage from 'components/CompaniesPage';

document.addEventListener(`DOMContentLoaded`, () => {
  // React will look for a `react-app` div embedded in the Rails
  // template that it will load all react rendered contents into.

  const reactAppContainer = document.getElementById(`react-app`);

  if (reactAppContainer) {
    const stateElement = document.getElementById(`state`);
    const data = JSON.parse(stateElement.getAttribute(`data-state`));

    ReactDOM.render(
      (
        <CompaniesPage companies={data.companies} />
      ),
      document.getElementById(`react-app`)
    );
  }
});
