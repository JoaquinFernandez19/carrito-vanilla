"use strict";var getFirstWord=function(e){return e.substring(0,e.indexOf(" "))};window.onload=function(){var e={categoriesSelected:["Tazas","Remeras","Bolsos"],products:PRODUCTS};renderCategories(),renderSelectedCategories(e),categorySelectionListener(e,renderSelectedCategories),renderProducts(e)};var PRODUCTS=[{product:"Tazas",list:[{name:"Taza Verde",src:"https://image.shutterstock.com/image-photo/green-cup-isolated-on-white-260nw-120723292.jpg",id:1,price:10},{name:"Taza Azul",src:"https://www.sublimacionexpress.com/wp-content/uploads/2018/02/Taza-m%C3%A1gica-azul-11oz.jpg",id:2,price:15},{name:"Taza Roja",src:"https://www.sublimacionexpress.com/wp-content/uploads/2018/03/Taza-m%C3%A1gica-roja-11oz.jpg",id:3,price:15}]},{product:"Remeras",list:[{name:"Remera Verde",src:"https://s.fenicio.app/f/tex/productos/1-vema_460x460_1536263337_35a.jpg",id:1,price:30},{name:"Remera Azul",src:"https://s.fenicio.app/f/tex/productos/1-remera-basica-azf-textilshop_1920-1200_1538081935_9ad.jpg",id:2,price:40},{name:"Remera Roja",src:"https://http2.mlstatic.com/remera-roja-logo-ecko-unltd-authentic-classic-D_NQ_NP_810869-MLA31606047219_072019-F.jpg",id:3,price:30}]},{product:"Bolsos",list:[{name:"Bolso Verde",src:"https://www.webtpvonline.es/productos/imagenes/img_2048_347aa00e8c2949504ea7b05d0fe3d057_20.png",id:1,price:100},{name:"Bolso Azul",src:"https://i.pinimg.com/originals/b1/86/1e/b1861e39b048d7b539647236bf80d891.jpg",id:2,price:150},{name:"Bolso Rojo",src:"https://www.botiga.com.uy/media/catalog/product/cache/1/thumbnail/600x600/0dc2d03fe217f8c83829496872af24a0/1/1/119_0121600425r_bolso_mudador_deluxe_everyday_messenger_red_rr04-25__1__1.jpg",id:3,price:90}]}],categorySelectionListener=function(t,r){var e=document.querySelector(".category-ul");Array.prototype.slice.call(e.children).forEach(function(e){e.addEventListener("click",function(){-1===t.categoriesSelected.indexOf(e.textContent)&&(t.categoriesSelected.push(e.textContent),r(t),renderProducts(t))})})},renderCategories=function(){for(var e=["Tazas","Remeras","Bolsos"],t=document.querySelector(".category-ul"),r=0;r<e.length;r++){var o=document.createElement("li"),c=document.createTextNode(e[r]);o.appendChild(c),o.classList.add("list-group-item"),t.appendChild(o)}},renderProducts=function(t){document.querySelector(".product-show"),t.products.map(function(e){-1!==t.categoriesSelected.indexOf(e.product)&&e.list.map(function(e){console.log(e.name)})})},removeAllChildNodes=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},renderSelectedCategories=function a(d){var i=document.querySelector(".products-category-selected"),e=d.categoriesSelected;return removeAllChildNodes(i),e.map(function(e){var r=document.createElement("span"),t=document.createElement("span"),o=document.createTextNode(" ×"),c=document.createTextNode(e);t.appendChild(o),t.classList.add("close-category"),t.addEventListener("click",function(){var t=getFirstWord(r.textContent),e=d.categoriesSelected.filter(function(e){return e!==t});d.categoriesSelected=e,a(d),renderProducts(d)}),r.appendChild(c),r.appendChild(t),r.classList.add("badge","badge-secondary"),i.appendChild(r)})};