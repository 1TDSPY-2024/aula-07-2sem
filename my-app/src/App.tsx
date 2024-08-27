import { Outlet } from "react-router-dom";

//MUDANDO O TITULO DA PAGINA

document.title="Home"

export default function App(){
  return(
    <div>
      <Outlet></Outlet>
    </div>
  )
}