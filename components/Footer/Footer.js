class Footer {
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
     <ul class="footer-container">
      ${htmlCatalog}
     </ul>
    `;
    ROOT_FOOTER.innerHTML = html;
  }
}

const footer = new Footer();
footer.render();
