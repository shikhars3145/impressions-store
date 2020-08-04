import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Banner from '../Banner/Banner';
import './BannerContainer.scss';
import { selectBannerContainerCategories } from '../../redux/bannerContainer/bannerContainerSelector';

function BannerContainer({ categories }) {
  return (
    <div className="bannerContainer">
      {categories.map(({ title, id, bgImage, bgPos, bigger }) => (
        <Banner
          title={title}
          key={id}
          imageUrl={bgImage}
          big={bigger}
          bgPos={bgPos}
        />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  categories: selectBannerContainerCategories,
});

export default connect(mapStateToProps)(BannerContainer);
