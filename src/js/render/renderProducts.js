const renderProducts = (state) => {
  const container = document.querySelector('.product-show');
  let currArray = state.products.map((item) => {
    if (state.categoriesSelected.indexOf(item.product) !== -1) {
      item.list.map((innerItem) => {
        console.log(innerItem.name);
      });
    }
  });
};

/* 
<div class="card">
<img
class="card-img-top"
src="https://lh3.googleusercontent.com/proxy/16LCpzW6NrBTXcpoTIR9RU0mN3aez5_97O36sCOAn4FhYMDUhVDJfQlm8M7M4ID07vLoZJmpQmJoXohy6u5pHF4_TZpIPHtn03ZRC3vLWeg3wIh8u-LrvawkR7E"
alt="Card image cap"
/>
<div class="card-body">
<h5 class="card-title">Taza Verde</h5>
<p class="card-text">30 <i class="fa fa-diamond"></i></p>
<a href="#" class="btn btn-primary">Add To Cart</a>
</div>
                        */
