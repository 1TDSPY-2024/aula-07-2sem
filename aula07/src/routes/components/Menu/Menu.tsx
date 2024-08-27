import { Link } from "react-router-dom";

import { MenuLink, Nav } from "../../../style/styled";

export default function Menu(){
    return(
      <Nav>
        <ul>
            <MenuLink><Link to="/">Home</Link></MenuLink>
            <MenuLink><Link to="/produtos">Produtos</Link></MenuLink>
            <MenuLink><Link to="/editar/produtos/1">Editar Produto - 1</Link></MenuLink>
        </ul>
      </Nav>
    );
  }