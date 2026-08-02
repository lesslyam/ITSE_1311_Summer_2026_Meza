import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";

function MenuPage() {
  return (
    <main className="menu-page">
      <section className="frenchie-card">
        <h1>Our Menu</h1>

        <div className="menu-grid">
          {menuData.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

        <p>
          Our menu features handcrafted meals made with fresh ingredients,
          seasonal produce, and bold flavors inspired by international cuisine.
        </p>

        <img
          src="/images/img3.jpg"
          alt="Restaurant menu food selection"
          className="menu-page-image"
        />
      </section>
    </main>
  );
}

export default MenuPage;