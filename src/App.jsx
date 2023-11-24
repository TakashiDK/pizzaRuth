import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Pizzas from "./pages/Pizzas";
import Teste from "./pages/Teste";
import Posts from "./pages/Posts";
import NovoPost from "./pages/NovoPost";
import Atendente from "./pages/Atendente";
import AtendPizza from "./pages/AtendPizza";
import AtendDrink from "./pages/AtendDrink";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login/> }/>
        <Route path="/cadastro" element={ <Cadastro/> }/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/pizzas" element={ <Pizzas/> }/>
        <Route path="/atendente" element={ <Atendente/> }/>
        <Route path="/Teste" element={ <Teste/> }/>
        <Route path="/Posts" element={ <Posts/> }/>
        <Route path="/NovoPost" element={ <NovoPost/> }/>
        <Route path="/atendpizza" element={ <AtendPizza/> }/>
        <Route path="/atenddrink" element={ <AtendDrink/> }/>

        
      </Routes>
    </BrowserRouter>
    )
}
export default App

