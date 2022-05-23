class Header {
  render() {
    let htmlCatalog = "";
    htmlCatalog += `
      <li><a href="#">Личный кабинет</a></li>
      <li><a href="#">Главная</a></li>
      <li><a href="#">Новинки</a></li>
      <li><a href="#">Новости</a></li>
      <li><a href="#">Контакты</a></li>
    `;
    const html = `
     <ul class="header-container">
      ${htmlCatalog}
     </ul>
    `;
    ROOT_HEADER.innerHTML = html;
  }
}
