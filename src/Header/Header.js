import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { Center} from '@chakra-ui/react'

const Header = () => {
  // Navegación
  const navigate = useNavigate();

  return (

      <Center bg='#282c34' h='100px' color='white'>
        <nav className='navigation'>
          <button className="navigation__link" onClick={() => navigate(-1)}>Atrás</button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/News" end>Noticias</NavLink>
          <NavLink to="/News/Sports">Deportes</NavLink>
          <NavLink to="/News/Economy">Economia</NavLink>
          <NavLink to="/News/Tecnology">Tecnología</NavLink>
          <button className="navigation__link" onClick={() => navigate(1)}>Adelante</button>
        </nav>
      </Center>

  );
}

export default Header;