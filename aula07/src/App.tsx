import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import {MeuH1} from "./style/styled";


export default function App(){
  return(
  <div>
    <Cabecalho/>
    <MeuH1>
    <Outlet/>
    </MeuH1>
    <Rodape/>
   
  </div>
  );
}