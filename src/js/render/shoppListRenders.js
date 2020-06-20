const renderOrders = (name, price, id, state) => {
  //container
  const container = document.querySelector('.order-list');
  removeAllChildNodes(container);

  const tempObj = new orderObj(name, price, id);
  const isEmpty = state.orderList.length === 0;
  const alredyIn = state.orderList.some((item) => item.id === tempObj.id);

  if (isEmpty || !alredyIn) {
    state.orderList.push(tempObj);
    state.orderList.map((item) => {
      container.appendChild(createOrderNode(item.name, item.price, item.id, item.number, state));
    });
  } else if (alredyIn) {
    //agregar el objeto o sumarlo
    state.orderList.map((item) => {
      if (item.id === tempObj.id) {
        item.number++;
        state.orderList.map((item) => {
          container.appendChild(
            createOrderNode(item.name, item.price, item.id, item.number, state)
          );
        });
      }
      //restarlo o sumarlo o borrarlo
    });
  }

  renderTotalPrice(state);
};

const renderTotalPrice = (state) => {
  const totalPriceNode = document.querySelector('.total-price');

  state.totalPrice = state.orderList.reduce((total, obj) => {
    return total + obj.price * obj.number;
  }, 0);

  totalPriceNode.textContent = state.totalPrice;
};

const orderObj = (name, price, id) => {
  return {
    name: name,
    price: price,
    id: id,
    number: 1,
  };
};

const createOrderNode = (name, price, id, number, state) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'order-item');
  li.setAttribute('id', id);
  //
  const badgePrice = document.createElement('span');
  badgePrice.classList.add('badge', 'badge-dark', 'price');
  badgePrice.textContent = price * number;
  //
  const productName = document.createElement('p');

  productName.textContent = titleCase(name);
  //
  const quantity = document.createElement('span');
  quantity.classList.add('badge', 'badge-danger', 'quantity');
  quantity.textContent = number;

  //
  const quantityControls = document.createElement('span');
  quantityControls.classList.add('quantity-controls');
  //
  const numbersDiv = document.createElement('div');
  numbersDiv.classList.add('d-flex', 'align-items-center');

  const restBtn = document.createElement('i');
  //rest quantity
  restBtn.addEventListener('click', () => {
    console.log(price * number);
  });

  const plusBtn = document.createElement('i');
  const deleteBtn = document.createElement('i');

  restBtn.classList.add('fa', 'fa-sort-desc');
  plusBtn.classList.add('fa', 'fa-sort-up');
  deleteBtn.classList.add('fa', 'fa-times');

  quantityControls.append(plusBtn, restBtn);
  quantity.append(quantityControls);
  numbersDiv.append(quantity, badgePrice);
  li.append(deleteBtn, productName, numbersDiv);

  return li;
};
