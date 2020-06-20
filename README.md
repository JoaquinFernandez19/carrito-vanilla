## Shopping app example

This only uses vanilla javascript, the systems works in 4 steps:

-listen to actions via event listeners an then dispatch a function
-that function changes the main state of the app
-then the render functions come in and re render the whole component with the new data

It inclues a search bar, order type by price, categorys and responsive design.
You can choose items and then change the quantity and also remove them.
The prices, products and quantity update automatically.

### I used gulp for uglifyin and processing the files, babel for js and sass as a pre-processor for css.

### Bootstrap 4.5, popper and jquery.
