const { createSelector } = require('reselect');

const COLLECTION_ID_MAP = {
  mens: 1,
  womens: 2,
  footwear: 3,
  accessories: 4,
  bags: 5,
};

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollection = (collectionName) =>
  createSelector([selectShopCollections], (collections) => {
    console.log(collections);
    console.log(collectionName);
    return collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionName]
    );
  });
