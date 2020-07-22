import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

import './CollectionPreview.scss';

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <div className="title">{title}</div>
      <div className="items">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProperties }) => (
            <ItemCard key={id} {...otherItemProperties} />
          ))}
      </div>
    </div>
  );
}
