function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="search-panel">
      <div className="search-item search-destination">
        <i className="bi bi-geo-alt-fill search-icon"></i>
        <div>
          <label htmlFor="destination">Where</label>
          <input
            id="destination"
            type="text"
            placeholder="Search destinations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="search-divider"></div>

      <div className="search-item">
        <i className="bi bi-calendar3 search-icon"></i>
        <div>
          <label>When</label>
          <span>Choose dates</span>
        </div>
      </div>

      <div className="search-divider"></div>

      <div className="search-item">
        <i className="bi bi-people-fill search-icon"></i>
        <div>
          <label>Guests</label>
          <span>Add guests</span>
        </div>
      </div>

      <button className="search-button" onClick={onSearch}>
        <i className="bi bi-search"></i>
        <span>Search</span>
      </button>
    </div>
  );
}

export default SearchBar;