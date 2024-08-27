import { Link, useParams } from "react-router-dom";


export default function EditarProdutos(){
    document.title = "Editar Produtos";
    // Realizando um destructuring para recuperar o parâmetro que foi passado na rota
    // Ex: Se a rota criada foi: /meus-dados/:dados
    // O destructurig irá recuperar o dado que foi passado na rota e atribuir a propriedade de um elemento cujo nome é aquele criado na rota, antes dos dois pontos, ou seja,(:dados)
    // Então teriamos que realizar a seguinte ação para receber esta informação:
    // const{dados} = useParams(), um detalhe aqui é que o useParams() pertence ao react-router e deve ser importado dele
    const {id} = useParams();

    return(
      <div>
      <h1>Olá, mundo! Sou o EditarProdutos</h1>
      <h2>id: {id}</h2>
      <p><Link to="/editar/produtos/1500">Editar Produto - 1500 </Link></p>
      </div>
    );
  }