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
const lowToHighBtn = (state) => {
  const btn = document.querySelector('.lowToHigh');
  const oppositeBtn = document.querySelector('.highToLow');
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      return null;
    } else {
      btn.classList.add('active');
      oppositeBtn.classList.remove('active');
      state.order = 'low-to-high';
      renderProducts(state);
      console.log(state);
    }
  });
};
const highToLowBtn = (state) => {
  const btn = document.querySelector('.highToLow');
  const oppositeBtn = document.querySelector('.lowToHigh');
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      return null;
    } else {
      btn.classList.add('active');
      oppositeBtn.classList.remove('active');
      state.order = 'high-to-low';
      renderProducts(state);
      console.log(state);
    }
  });
};

const formListeners = (state) => {
  const form = document.querySelector('form');
  const searchInput = document.querySelector('#product-input');
  const container = document.querySelector('.searched-term');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!searchInput.disabled && searchInput.value !== '') {
      state.searchTerm = searchInput.value;
      renderProducts(state);
      container.appendChild(createSearchedTermBadge(state.searchTerm, state));
      searchInput.value = '';
      searchInput.disabled = true;
    }
  });
};
