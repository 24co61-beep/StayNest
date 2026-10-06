function ListingCard({ listing, liked, onLike }) {
  return (
    <article className="listing-card">
      <div className="image-wrapper">
        <img
          src={listing.image}
          alt={listing.title}
          loading="lazy"
        />
        <button
          className={`heart-btn ${liked ? "liked" : ""}`}
          onClick={() => onLike(listing.id)}
          aria-label={liked ? "Remove from favorites" : "Add to favorites"}
        >
          <i className={`bi ${liked ? "bi-heart-fill" : "bi-heart"}`}></i>
        </button>
        <span className="guest-favorite">Guest favorite</span>
      </div>

      <div className="listing-content">
        <div className="d-flex justify-content-between gap-2">
          <h3>{listing.title}</h3>
          <span className="rating">
            <i className="bi bi-star-fill"></i> {listing.rating}
          </span>
        </div>

        <p className="location">{listing.location}</p>
        <p className="distance">{listing.distance}</p>
        <p className="dates">{listing.dates}</p>

        <div className="price">
          ₹{listing.price.toLocaleString("en-IN")}
          <span> night</span>
        </div>
      </div>
    </article>
  );
}

export default ListingCard;