import './Header.css';

function Header() {
  return (
    <header>
      <h1 className="">CoffeeBeen's Kitchen</h1>
      <nav className="header-nav">
        <a className="navlink">Home</a>
        <a className="navlink">Recipes</a>
        <a className="navlink">About</a>
        <a className="navlink">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
