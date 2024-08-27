import { Link } from "react-router-dom";


export default function Menu(){
    return(
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/editar/produtos/1">Editar Produto - 1</Link></li>
        </ul>
      </nav>
    );
  }