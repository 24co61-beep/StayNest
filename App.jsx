import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryTabs from "./components/CategoryTabs";
import ListingCard from "./components/ListingCard";
import Footer from "./components/Footer";

const listings = [
  {
    id: 1,
    title: "Beachfront apartment",
    location: "Goa, India",
    distance: "2,431 km away",
    dates: "18–23 Oct",
    price: 4200,
    rating: 4.88,
    category: "Beach",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Modern mountain cabin",
    location: "Manali, India",
    distance: "1,728 km away",
    dates: "2–7 Nov",
    price: 5600,
    rating: 4.96,
    category: "Mountains",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Luxury city loft",
    location: "Mumbai, India",
    distance: "8 km away",
    dates: "12–17 Oct",
    price: 6800,
    rating: 4.91,
    category: "City",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Peaceful forest retreat",
    location: "Wayanad, India",
    distance: "1,041 km away",
    dates: "25–30 Oct",
    price: 3900,
    rating: 4.84,
    category: "Nature",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Elegant pool villa",
    location: "Alibaug, India",
    distance: "70 km away",
    dates: "8–13 Nov",
    price: 7500,
    rating: 4.93,
    category: "Pools",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Cozy countryside home",
    location: "Lonavala, India",
    distance: "65 km away",
    dates: "14–19 Nov",
    price: 4500,
    rating: 4.89,
    category: "Countryside",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    title: "Riverside wooden house",
    location: "Rishikesh, India",
    distance: "1,525 km away",
    dates: "5–10 Dec",
    price: 4800,
    rating: 4.86,
    category: "Nature",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    title: "Minimal designer home",
    location: "Pune, India",
    distance: "150 km away",
    dates: "20–25 Oct",
    price: 3600,
    rating: 4.82,
    category: "City",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const text = `${item.title} ${item.location} ${item.category}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase().trim());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const toggleLike = (id) => {
    setLiked((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const handleSearch = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-copy text-center">
              <span className="eyebrow">YOUR NEXT GETAWAY</span>
              <h1>Find a place that feels like home.</h1>
              <p>
                Discover beautiful stays, unique spaces, and memorable trips
                across India.
              </p>
            </div>

            <SearchBar
              search={search}
              setSearch={setSearch}
              onSearch={handleSearch}
            />
          </div>
        </section>

        <section className="container listings-section">
          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="section-title mb-1">Explore stays</h2>
              <p className="section-subtitle mb-0">
                {filteredListings.length} places available
              </p>
            </div>
            <button className="filter-btn">
              <i className="bi bi-sliders2 me-2"></i>
              Filters
            </button>
          </div>

          {filteredListings.length > 0 ? (
            <div className="row g-4">
              {filteredListings.map((listing) => (
                <div className="col-12 col-sm-6 col-lg-3" key={listing.id}>
                  <ListingCard
                    listing={listing}
                    liked={liked.includes(listing.id)}
                    onLike={toggleLike}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <i className="bi bi-search"></i>
              <h3>No stays found</h3>
              <p>Try another destination or category.</p>
              <button
                className="btn main-btn"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Clear search
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />

      {showToast && (
        <div className="search-toast">
          <i className="bi bi-check-circle-fill me-2"></i>
          Search updated
        </div>
      )}
    </div>
  );
}

export default App;