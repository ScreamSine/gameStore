class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, platform, price, img }) => {
      htmlCatalog += `
        <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img src="${img}" class="products-element__img" />
            <span class="products-element__platform">${platform}</span>
            <span class="products-element__price">💸  ${price} ₽</span>
            <button class="products-element__btn">Добавить в корзину</button>
        </li>
      `;
    });
    const html = `
     <ul class="products-container">
      ${htmlCatalog}
     </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const header = new Header();
const products = new Products();
// const footer = new Footer();

header.render();
products.render();
// footer.render();
