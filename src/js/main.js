const getFirstWord = (string) => {
  return string.substring(0, string.indexOf(' '));
};

window.onload = () => {
  let STATE = {
    categoriesSelected: ['Tazas', 'Remeras', 'Bolsos'],
    products: PRODUCTS,
  };
  console.log(STATE.products);
  renderCategories();
  renderSelectedCategories(STATE);
  categorySelectionListener(STATE, renderSelectedCategories);
  renderProducts(STATE);
};
