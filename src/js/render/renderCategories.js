const renderCategories = () => {
  const categories = ['Tazas', 'Remeras', 'Bolsos', 'Cuadros', 'Bicicletas'];
  const ul = document.querySelector('.category-ul');
  for (let i = 0; i < categories.length; i++) {
    let node = document.createElement('li');
    let text = document.createTextNode(categories[i]);
    node.appendChild(text);
    node.classList.add('list-group-item');
    ul.appendChild(node);
  }
};
