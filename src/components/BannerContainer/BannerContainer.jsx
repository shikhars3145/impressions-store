import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import './BannerContainer.scss';
export class BannerContainer extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          title: 'Footwear',
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
          title: 'Bags/Trolleys',
          id: 5,
          bgImage: process.env.PUBLIC_URL + './assets/images/homepage/bag.jpg',
        },
        {
          title: 'Men',
          id: 1,
          bgImage: process.env.PUBLIC_URL + './assets/images/homepage/men.jpg',
          bigger: true,
        },
        {
          title: 'Women',
          id: 2,
          bgImage:
            process.env.PUBLIC_URL + './assets/images/homepage/women.jpg',
          bigger: true,
        },
      ],
    };
  }
  render() {
    return (
      <div className="bannerContainer">
        {this.state.categories.map(({ title, id, bgImage, bigger }) => (
          <Banner title={title} key={id} imageUrl={bgImage} big={bigger} />
        ))}
      </div>
    );
  }
}

export default BannerContainer;
