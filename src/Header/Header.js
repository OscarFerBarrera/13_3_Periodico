import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  // Navegación
  const navigate = useNavigate();

  return (

    <nav className='navigation'>
      <button className="navigation__link" onClick={() => navigate(-1)}>Atrás</button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/News">Noticias</NavLink>
          <NavLink to="/News/Sports">Deportes</NavLink>
          <NavLink to="/News/Economy">Economia</NavLink>
          <NavLink to="/News/Tecnology">Tecnología</NavLink>
      <button className="navigation__link" onClick={() => navigate(1)}>Adelante</button>
    </nav>


  );
}

export default Header;