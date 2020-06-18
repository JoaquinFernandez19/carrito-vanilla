const renderSelectedCategories = (state) => {
  const selectedContainer = document.querySelector('.products-category-selected');
  let selectedCategories = state.categoriesSelected;
  removeAllChildNodes(selectedContainer);
  return selectedCategories.map((item) => {
    let node = document.createElement('span');
    let closeSymbolNode = document.createElement('span');
    let closeSymbol = document.createTextNode(' ×');
    let text = document.createTextNode(item);
    closeSymbolNode.appendChild(closeSymbol);
    closeSymbolNode.classList.add('close-category');
    //Event listeners to cancel category
    closeSymbolNode.addEventListener('click', () => {
      let text = getFirstWord(node.textContent);
      let temp = state.categoriesSelected.filter((item) => item !== text);
      state.categoriesSelected = temp;
      renderSelectedCategories(state);
      renderProducts(state);
    });
    node.appendChild(text);
    node.appendChild(closeSymbolNode);
    node.classList.add('badge', 'badge-danger');
    selectedContainer.appendChild(node);
  });
};
