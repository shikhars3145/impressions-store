import { createSelector } from 'reselect';

const selectBannerContainer = (state) => state.bannerContainer;

export const selectBannerContainerCategories = createSelector(
  [selectBannerContainer],
  (bannerContainer) => bannerContainer.categories
);
