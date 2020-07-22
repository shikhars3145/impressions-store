import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import './BannerContainer.scss';
export class BannerContainer extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          title: 'footwear',
          id: 3,
          bgImage:
            process.env.PUBLIC_URL + './assets/images/homepage/footwear.jpg',
        },
        {
          title: 'accessories',
          id: 4,
          bgImage:
            process.env.PUBLIC_URL + './assets/images/homepage/accessories.jpg',
        },
        {
          title: 'bags/trolleys',
          id: 5,
          bgImage: process.env.PUBLIC_URL + './assets/images/homepage/bag.jpg',
        },
        {
          title: 'mens',
          id: 1,
          bgImage: process.env.PUBLIC_URL + './assets/images/homepage/men.jpg',
          bigger: true,
        },
        {
          title: 'womens',
          id: 2,
          bgImage:
            process.env.PUBLIC_URL + './assets/images/homepage/women.jpg',
          bgPos: 'top right',
          bigger: true,
        },
      ],
    };
  }
  render() {
    return (
      <div className="bannerContainer">
        {this.state.categories.map(({ title, id, bgImage, bgPos, bigger }) => (
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
}

export default BannerContainer;
