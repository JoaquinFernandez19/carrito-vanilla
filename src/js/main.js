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
const titleCase = (str) => {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

window.onload = () => {
  let STATE = {
    categoriesSelected: [],
    products: PRODUCTS,
    order: 'low-to-high',
    searchTerm: null,
    orderList: [],
    totalPrice: 0,
  };

  renderCategories();
  renderSelectedCategories(STATE);
  categorySelectionListener(STATE, renderSelectedCategories);
  renderProducts(STATE);
  lowToHighBtn(STATE);
  highToLowBtn(STATE);
  formListeners(STATE);

  //final buy
  document.querySelector('.buyBtn').addEventListener('click', () => {
    if (STATE.orderList.length !== 0) {
      alert(JSON.stringify(STATE.orderList));
      STATE.orderList = [];
      renderOrders(STATE);
    }
  });
  //
};
