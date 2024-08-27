import { Link } from "react-router-dom";


export default function Home(){

    //MUDANDO O TÍTULO DA PÁGINA!!!
    document.title = "Home";

    return(
      <div>
        <h1>Olá, mundo sou o Home!</h1>
        <p>Este o componente da página principal...</p>
        <p><Link to="/editar/produtos/1500">Editar Produto - 1500</Link></p>
      </div>
    );
  }