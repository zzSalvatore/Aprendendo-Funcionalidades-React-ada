import { useEffect, useState } from "react"

export default function BuscarTarefas(){


const [tarefas, setTarefas] = useState([]);

useEffect(() => {

    async function buscarDados(){
        const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
        const resultadoFinal = await resultado.json();
        return resultadoFinal;
    }
    buscarDados().then(res => setTarefas(res));

}, [])



    return (
        <div className="container">
            <h3>Buscando Dados com Fetch</h3>
            <ol>
            {tarefas.map((tarefa) => {
                return ( 
                    <li key={tarefa.id}>
                        {tarefa.title}
                        {tarefa.completed ? ' - Tarefa completa!' : null}
                    </li>
                )
            })}
            </ol>
        </div>
    ) 
    
}