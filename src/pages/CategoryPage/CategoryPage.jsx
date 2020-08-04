import React from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import { selectShopCollection } from '../../redux/shop/shopSelector';
import { connect } from 'react-redux';

import './CategoryPage.scss';

function CategoryPage({
  match: {
    params: { category },
  },
  collection,
}) {
  console.log(category, collection);
  return (
    <div className="category-page">
      <div className="title">{collection.title}</div>
      <div className="items-container">
        {collection.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(CategoryPage);
