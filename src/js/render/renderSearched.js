const createSearchedTermBadge = (term, state) => {
  const container = document.querySelector('.searched-term');
  const searchInput = document.querySelector('#product-input');
  //
  let badge = document.createElement('span');
  badge.classList.add('badge', 'badge-info');
  badge.textContent = titleCase(term);
  //cancel term
  let closeSymbolNode = document.createElement('span');
  let closeSymbol = document.createTextNode(' ×');
  closeSymbolNode.appendChild(closeSymbol);
  closeSymbolNode.addEventListener('click', () => {
    removeAllChildNodes(container);
    state.searchTerm = null;
    renderProducts(state);
    searchInput.disabled = false;
  });
  badge.appendChild(closeSymbolNode);
  return badge;
};
