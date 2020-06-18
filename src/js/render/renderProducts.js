const renderProducts = (state) => {
  const container = document.querySelector('.product-show');
  removeAllChildNodes(container);
  console.log('Rendering products');
  console.log(state);
  if (state.order === 'low-to-high') {
    state.products.sort(priceSortingLowToHigh);
  } else if (state.order === 'high-to-low') {
    state.products.sort(priceSortingHighToLow);
  }
  state.products.map((item, index, arr) => {
    if (
      state.categoriesSelected.indexOf(item.type) !== -1 ||
      state.categoriesSelected.length === 0
    ) {
      if (state.searchTerm === null) {
        container.appendChild(
          createProductElement(item.name, item.price, item.src, item.bestseller)
        );
      } else if (state.searchTerm !== null) {
        if (item.name.indexOf(state.searchTerm) !== -1) {
          container.appendChild(
            createProductElement(item.name, item.price, item.src, item.bestseller)
          );
        } else {
          return null;
        }
      }
    }
  });
};

const createProductElement = (name, price, img, bestseller) => {
  //card
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'bg-dark');
  //img
  let imgNode = document.createElement('img');
  imgNode.classList.add('card-img-top');
  imgNode.setAttribute('src', img);
  imgNode.setAttribute('alt', name);
  //card body
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  //cardtitle h5
  let cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = name;
  //card title badge
  if (bestseller) {
    let bestSellerBadge = document.createElement('span');
    bestSellerBadge.classList.add('badge', 'badge-danger');
    bestSellerBadge.textContent = 'HOT';
    cardTitle.appendChild(bestSellerBadge);
  }
  //cardtext p
  let cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerHTML = `${price} <i class="fa fa-diamond"></i>`;
  //card button
  let cardBtn = document.createElement('button');
  cardBtn.classList.add('btn', 'btn-light');
  cardBtn.textContent = 'Agregar al carrito';
  cardBtn.addEventListener('click', () => console.log('Agregado al carrito' + name));
  //combine
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);
  cardDiv.appendChild(imgNode);
  cardDiv.appendChild(cardBody);

  return cardDiv;
};
