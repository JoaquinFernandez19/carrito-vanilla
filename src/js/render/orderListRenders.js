const createOrderNode = (name, price, id, quantity, state) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item', 'order-item');
  li.setAttribute('id', id);
  //price
  const badgePrice = document.createElement('span');
  badgePrice.classList.add('badge', 'badge-dark', 'price');
  badgePrice.textContent = price * quantity;
  //product name
  const productName = document.createElement('p');
  productName.textContent = titleCase(name);
  //quantity
  const quantityNode = document.createElement('span');
  quantityNode.classList.add('badge', 'badge-danger', 'quantity');
  quantityNode.textContent = quantity;
  const quantityControls = document.createElement('span');
  quantityControls.classList.add('quantity-controls');
  const numbersDiv = document.createElement('div');
  numbersDiv.classList.add('d-flex', 'align-items-center');
  //controls
  //rest quantity
  const restBtn = document.createElement('i');
  restBtn.classList.add('fa', 'fa-sort-desc');
  restBtn.addEventListener('click', () => {
    reduceQuantityOrder(state, id);
  });
  //plus quantity
  const plusBtn = document.createElement('i');
  plusBtn.classList.add('fa', 'fa-sort-up');
  plusBtn.addEventListener('click', () => {
    increaseQuantityOrder(state, id);
  });
  //delete
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('fa', 'fa-times');
  deleteBtn.addEventListener('click', () => {
    deleteOrder(state, id);
  });
  //appends
  quantityControls.append(plusBtn, restBtn);
  quantityNode.append(quantityControls);
  numbersDiv.append(quantityNode, badgePrice);
  li.append(deleteBtn, productName, numbersDiv);

  return li;
};
const reduceQuantityOrder = (state, id) => {
  //reduce quantity
  state.orderList.map((item) => {
    if (item.id === id && item.quantity >= 2) {
      item.quantity--;
      renderOrders(state);
    } else if (item.id === id && item.quantity === 1) {
      deleteOrder(state, id);
    }
  });
};
const increaseQuantityOrder = (state, id) => {
  //increase quantity
  state.orderList.map((item) => {
    if (item.id === id) {
      item.quantity++;
      renderOrders(state);
    }
  });
};
const deleteOrder = (state, id) => {
  state.orderList = state.orderList.filter((item) => {
    if (item.id === id) {
      return false;
    } else {
      return true;
    }
  });
  renderOrders(state);
};
class Order {
  constructor(name, price, id) {
    (this.name = name), (this.price = price), (this.id = id), (this.quantity = 1);
  }
}
const handleCreationOfOrders = (name, price, id, state) => {
  let currentOrder = new Order(name, price, id);
  //checkeamos si la order ya está ingresada
  if (
    state.orderList.length === 0 ||
    !state.orderList.some((item) => item.id === currentOrder.id)
  ) {
    state.orderList.push(currentOrder);
  } else {
    console.log('alredy in!');
  }

  renderOrders(state);
};
const renderOrders = (state) => {
  const container = document.querySelector('.order-list');
  removeAllChildNodes(container);
  state.orderList.map((item) => {
    container.append(createOrderNode(item.name, item.price, item.id, item.quantity, state));
  });

  state.totalPrice = state.orderList.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  //total price
  const totalPrice = document.querySelector('.total-price');
  totalPrice.textContent = state.totalPrice;
};
