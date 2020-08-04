const INITIAL_STATE = {
  categories: [
    {
      title: 'footwear',
      id: 3,
      route: 'footwear',
      bgImage: process.env.PUBLIC_URL + './assets/images/homepage/footwear.jpg',
    },
    {
      title: 'accessories',
      id: 4,
      route: 'accessories',
      bgImage:
        process.env.PUBLIC_URL + './assets/images/homepage/accessories.jpg',
    },
    {
      title: 'bags/trolleys',
      id: 5,
      route: 'bags',
      bgImage: process.env.PUBLIC_URL + './assets/images/homepage/bag.jpg',
    },
    {
      title: 'mens',
      id: 1,
      route: 'mens',
      bgImage: process.env.PUBLIC_URL + './assets/images/homepage/men.jpg',
      bigger: true,
    },
    {
      title: 'womens',
      id: 2,
      route: 'womens',
      bgImage: process.env.PUBLIC_URL + './assets/images/homepage/women.jpg',
      bgPos: 'top right',
      bigger: true,
    },
  ],
};

const bannerContainerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bannerContainerReducer;
