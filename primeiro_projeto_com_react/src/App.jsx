import ParagrafoPrincipal from "./components/ParagrafoPrincipal";
import Contador from "./components/Contador";
import MinhaLista from "./components/MinhaLista";
import BuscarTarefas from "./components/BuscarTarefas";


function App() {
  return (
    <div>
      <div className="container">
        <h1 className="title">Olá Mundo, React!</h1>
        
        <ParagrafoPrincipal/>
        <h1>Utilizando Props</h1>
        <BotaoInicial conteudo='Me clique!'/>
        <BotaoInicial conteudo='Depois aqui!'/>
        <BotaoInicial conteudo='e por Fim aqui!'/>
      </div>
      <Contador/>
      <div className="container">
        <h1 className="title">Efeitos Colaterais com React</h1>
        <MinhaLista/>
      </div>

      <div className="container">
        <h1 className="title">Minhas tarefas</h1>
        <BuscarTarefas/>
      </div>
      
    </div>
  )
}

function BotaoInicial(props){
  return(
    // eslint-disable-next-line react/prop-types
    <button className="button">{props.conteudo}</button>
  )
}


export default App
