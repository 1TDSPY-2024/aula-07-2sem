import { Outlet } from "react-router-dom";
import Cabecalho from "./routes/components/Cabecalho/Cabecalho";
import Rodape from "./routes/components/Rodape/Rodape";
import {MeuH1} from "./style/styled.ts";


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