function MenuCard({ item }) {
  const formattedPrice = item.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <article className="menu-card">
      <h2>{item.name}</h2>

      <p className="menu-category">
        Category: {item.category}
      </p>

      <p className="menu-description">
        {item.description}
      </p>

      <p className="menu-price">
        {formattedPrice}
      </p>
    </article>
  );
}

export default MenuCard;