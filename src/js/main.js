//Helper functions

const getFirstWord = (string) => {
  return string.substring(0, string.indexOf(' '));
};
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
const priceSortingLowToHigh = (a, b) => {
  let comparision = 0;
  if (a.price > b.price) {
    comparision = 1;
  } else if (a.price < b.price) {
    comparision = -1;
  }
  return comparision;
};
const priceSortingHighToLow = (a, b) => {
  let comparision = 0;
  if (a.price < b.price) {
    comparision = 1;
  } else if (a.price > b.price) {
    comparision = -1;
  }
  return comparision;
};

window.onload = () => {
  let STATE = {
    categoriesSelected: [],
    products: PRODUCTS,
    order: 'low-to-high',
    searchTerm: null,
  };

  renderCategories();
  renderSelectedCategories(STATE);
  categorySelectionListener(STATE, renderSelectedCategories);
  renderProducts(STATE);
  lowToHighBtn(STATE);
  highToLowBtn(STATE);
  formListeners(STATE);
};
