import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Pizzas from "./pages/Pizzas";
import Teste from "./pages/Teste";
import Posts from "./pages/Posts";
import NovoPost from "./pages/NovoPost";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/cadastro" element={ <Cadastro/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/pizzas" element={ <Pizzas/> }/>
        <Route path="/Teste" element={ <Teste/> }/>
        <Route path="/Posts" element={ <Posts/> }/>
        <Route path="/NovoPost" element={ <NovoPost/> }/>
      </Routes>
    </BrowserRouter>
    )
}
export default App

