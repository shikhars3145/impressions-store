const SHOP_DATA = [
  {
    id: 1,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'Green Slim Fit Shirt',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/men/greenShirt.jpg',
        price: 1679,
      },
      {
        id: 2,
        name: 'Grey Jeans',
        imageUrl:
          process.env.PUBLIC_URL + './assets/images/clothing/men/greyJeans.jpg',
        price: 1754,
      },
      {
        id: 3,
        name: 'White Linen Blazer',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/men/whiteBlazer.jpg',
        price: 1979,
      },
      {
        id: 4,
        name: 'Striped Polo T-shirt',
        imageUrl:
          process.env.PUBLIC_URL + './assets/images/clothing/men/polo.jpg',
        price: 1099,
      },
      {
        id: 5,
        name: 'Off-White Chinos',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/men/offWhiteChino.jpg',
        price: 2199,
      },
      {
        id: 6,
        name: 'Blue Checked Shirt',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/men/blueChecked.jpg',
        price: 1119,
      },
      {
        id: 7,
        name: 'Blue Party Suit',
        imageUrl:
          process.env.PUBLIC_URL + './assets/images/clothing/men/partySuit.jpg',
        price: 8249,
      },
      {
        id: 8,
        name: 'Red Checked Shirt',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/men/redChecked.jpg',
        price: 714,
      },
      {
        id: 9,
        name: 'Blue Tuxedo Suit',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/men/blueTuxedo.jpg',
        price: 4999,
      },
      {
        id: 10,
        name: 'Blue Jeans',
        imageUrl:
          process.env.PUBLIC_URL + './assets/images/clothing/men/blueJeans.jpg',
        price: 1819,
      },
      {
        id: 11,
        name: 'Khaki Chinos',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/men/khakhiChino.jpg',
        price: 1679,
      },
    ],
  },
  {
    id: 2,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 34,
        name: 'Gold Sheath Dress',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/women/women-dress-gold.jpg',
        price: 1370,
      },
      {
        id: 35,
        name: 'Dotted A-Line Dress',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/women/women-dress-dots.jpg',
        price: 2692,
      },
      {
        id: 36,
        name: 'Women Blue Jeans',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/women/women-jeans-blue.jpg',
        price: 1349,
      },
      {
        id: 37,
        name: 'Maroon Lace Top',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/women/women-top-maroon.jpg',
        price: 524,
      },
      {
        id: 38,
        name: 'Women Grey Jeans',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/women/women-jeans-black.jpg',
        price: 854,
      },
      {
        id: 39,
        name: 'White Printed Tunic',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/women/women-top-white.jpg',
        price: 599,
      },
      {
        id: 40,
        name: 'Accordion Pleats Dress',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/women/women-dress-black.jpg',
        price: 799,
      },
    ],
  },
  {
    id: 3,
    title: 'Footwear',
    routeName: 'footwear',
    items: [
      {
        id: 65,
        name: 'Men Grey Sneakers',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/footwear/men-grey-sneakers.jpg',
        price: 2999,
      },
      {
        id: 66,
        name: 'Men Black Trainers',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/footwear/men-black-trainer.jpg',
        price: 1500,
      },
      {
        id: 67,
        name: 'Women Grey Ballerinas',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/footwear/women-grey-ballerinas.jpg',
        price: 957,
      },
      {
        id: 68,
        name: 'Women White Sandals',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/footwear/women-white-sandals.jpg',
        price: 160,
      },
    ],
  },
  {
    id: 4,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 91,
        name: 'Mens Analogue Watch',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/fossil-watch.jpg',
        price: 5997,
      },
      {
        id: 92,
        name: 'Mens Aviator Glasses',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/men-aviator.jpg',
        price: 1499,
      },
      {
        id: 93,
        name: 'Womens Analogue Watch',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/fossil-girl.jpg',
        price: 6597,
      },
      {
        id: 94,
        name: 'Womens Wallet',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/women-wallet.jpg',
        price: 1427,
      },
      {
        id: 95,
        name: 'Men Analogue Watch',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/titan-watch-black.jpg',
        price: 5695,
      },
      {
        id: 96,
        name: 'Womens Analogue Watch',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/fossil-girl-silver.jpg',
        price: 5397,
      },
      {
        id: 97,
        name: 'Mens Wallet',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/puma-wallet.jpg',
        price: 1249,
      },
      {
        id: 98,
        name: 'Men Analogue Watch',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/fossil-silver.jpg',
        price: 7995,
      },
      {
        id: 99,
        name: 'Mens Leather Belt',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/accessories/men-black-leather-belt.jpg',
        price: 849,
      },
    ],
  },
  {
    id: 5,
    title: 'Bags/Trolleys',
    routeName: 'bags',
    items: [
      {
        id: 121,
        name: 'Grey Cabin Trolley Suitcase',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/bags/grey-small-trolley.jpg',
        price: 4199,
      },
      {
        id: 122,
        name: 'White Large Trolley Suitcase',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/bags/white-trolley.jpg',
        price: 7042,
      },
      {
        id: 123,
        name: 'Black Large Trolley Suitcase',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/bags/black-trolley.jpg',
        price: 6600,
      },
      {
        id: 124,
        name: 'Black Handheld Bag',
        imageUrl:
          process.env.PUBLIC_URL +
          './assets/images/clothing/bags/handheld-puma.jpg',
        price: 1649,
      },
    ],
  },
];

export default SHOP_DATA;
