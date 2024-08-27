import { useParams } from "react-router-dom"

export default function EditarProdutos() {

  const { id } = useParams()

  return (
    <div>
      <h1>Olá mundo, sou o EditarProdutos</h1>
      <p>{id}</p>
    </div>
  )
}