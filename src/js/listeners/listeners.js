const categorySelectionListener = (state, cb) => {
  const ul = document.querySelector('.category-ul');
  const ulChildrens = Array.prototype.slice.call(ul.children);
  ulChildrens.forEach((li) => {
    li.addEventListener('click', () => {
      if (state.categoriesSelected.indexOf(li.textContent) === -1) {
        state.categoriesSelected.push(li.textContent);
        cb(state);
        renderProducts(state);
      }
    });
  });
};
