import logo from './logo.svg';
import './App.css';
import MenuItem from './MenuItem';

function App() {
  const menuItems = [
    {
      name: 'Himaliyan Paradise',
      cuisine: 'Nepali',
      imageUrl: 'Himaliyan.png', 
    },
    {
      name: 'Halal Guys',
      cuisine: 'Meditarranian',
      imageUrl: 'HalalGuys.png',
    },
    {
      name: 'Beast Burger',
      cuisine: 'American',
      imageUrl: '/Beast Burger.png',
    },
  ];

  return (
    <div className="app">
      <header>
        <h1>Best Restaurants Around</h1>
      </header>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            cuisine={item.cuisine}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
