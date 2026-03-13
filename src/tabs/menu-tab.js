import pastaSaladImg from '../images/menu/pasta-salad.jpg';
import frenchCasseroleImg from '../images/menu/french.webp';

function Menu() {
  return `<h1 class="title">Our Menu</h1>
      <section class="section-menu">
        <div class="menu-cards">
          <div class="menu-card">
            <div class="menu-card-img">
              <h3 class="menu-card-title">Pasta salad</h3>
              <img src="${pastaSaladImg}" alt="Pasta salad" />
            </div>
            <div class="menu-card-info">
              <p class="menu-card-text">
                This Italian pasta salad that's loaded with tri-color rotini
                pasta, salami, bell peppers, and fresh mozzarella balls is quick
                to make and full of flavor for a delicious summertime salad.
              </p>
              <p class="menu-card-price">Price: 10&dollar;</p>
            </div>
          </div>

          <div class="menu-card">
            <div class="menu-card-img">
              <h3 class="menu-card-title">French Onion Green Bean Casserole</h3>
              <img
                src="${frenchCasseroleImg}"
                alt="French Onion Green Bean Casserole"
              />
            </div>

            <div class="menu-card-info">
              <p class="menu-card-text">
                A classic green bean casserole is elevated with some of my
                favorite flavors from French onion soup — caramelized onions and
                Gruyère cheese.
              </p>
              <p class="menu-card-price">Price: 10&dollar;</p>
            </div>
          </div>
        </div>
      </section>`;
}

export default Menu();
