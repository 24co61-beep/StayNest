const categories = [
  { name: "All", icon: "bi-grid" },
  { name: "Beach", icon: "bi-sun" },
  { name: "Mountains", icon: "bi-mountains" },
  { name: "City", icon: "bi-buildings" },
  { name: "Nature", icon: "bi-tree" },
  { name: "Pools", icon: "bi-water" },
  { name: "Countryside", icon: "bi-house" }
];

function CategoryTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="category-scroll">
      {categories.map((category) => (
        <button
          className={`category-tab ${
            activeCategory === category.name ? "active" : ""
          }`}
          key={category.name}
          onClick={() => setActiveCategory(category.name)}
        >
          <i className={`bi ${category.icon}`}></i>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;