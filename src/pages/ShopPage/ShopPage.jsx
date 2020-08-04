import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';

import './ShopPage.scss';
import CategoryPage from '../CategoryPage/CategoryPage';

function ShopPage({ collections, match }) {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:category`} component={CategoryPage} />
      {/* <CollectionsOverview /> */}
    </div>
  );
}

export default ShopPage;
