function MenuItem({ name, cuisine, imageUrl }) {
    return (
      <div className="menu-item">
        <img src={imageUrl} alt={name} className="menu-image" />
        <h3>{name}</h3>
        <p>{cuisine}</p>
        <button>View Menu</button>
      </div>
    );
  }
  
  export default MenuItem;