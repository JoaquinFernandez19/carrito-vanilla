const renderProducts = (state) => {
  //container of all products
  const container = document.querySelector('.product-show');
  //clear container after each rendering
  removeAllChildNodes(container);
  //console logs for dev purposes
  console.log('Rendering products');
  console.log(state);
  //order type checkup
  if (state.order === 'low-to-high') {
    //if order is set low to high, sort the array with a helper function
    state.products.sort(priceSortingLowToHigh);
  } else if (state.order === 'high-to-low') {
    //if order is set to high to low, sort the array with a helper function
    state.products.sort(priceSortingHighToLow);
  }
  //map the products array
  state.products.map((item) => {
    if (
      //render only the items with the categories seledcted
      state.categoriesSelected.indexOf(item.type) !== -1 ||
      //or render everything if no category is selected
      state.categoriesSelected.length === 0
    ) {
      //if the user didnt search for anything just render normally
      if (state.searchTerm === null) {
        container.appendChild(
          createProductElement(item.name, item.price, item.src, item.id, item.bestseller, state)
        );
        //if the user searched
      } else if (state.searchTerm !== null) {
        //if the term searched by the user is found, render the matching items
        if (item.name.indexOf(state.searchTerm) !== -1) {
          container.appendChild(
            createProductElement(item.name, item.price, item.src, item.id, item.bestseller, state)
          );
        } else {
          //if no item were found with the term, say No items were found
          setTimeout(() => {
            if (container.children.length === 0) {
              console.log(container.children.length);
              container.textContent = 'No items were found';
            }
          }, 500);

          //if the curr item name dont match, dont render
        }
      }
    }
  });
};
//function to render the products
const createProductElement = (name, price, img, id, bestseller, state) => {
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
  cardTitle.textContent = titleCase(name);
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

  cardBtn.addEventListener('click', () => {
    handleCreationOfOrders(name, price, id, state);
  });
  //combine
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);
  cardDiv.appendChild(imgNode);
  cardDiv.appendChild(cardBody);

  return cardDiv;
};
