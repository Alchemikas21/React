import logo from "./React-icon.png";

export const Header = () => {
  return (
    <header>
      <nav className="navigation-bar">
        <img className="nav-bar-logo-image" src={logo} alt = "React-logo"/>
        <ul className="list-of-links">
        <li className="list-item">Pricing</li>
        <li className="list-item">About</li>
        <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};
