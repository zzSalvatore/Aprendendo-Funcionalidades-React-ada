import { useEffect, useState } from "react";

const minhalista = [
    { id: '1', value: 'Carro' },
    { id: '2', value: 'Moto' },
    { id: '3', value: 'Caminhão' },
]



export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhalista);
    const [pesquisa, setPesquisa] = useState('');

useEffect(
    () => {
        if(pesquisa){
            const novaLista = minhalista.filter((item) => {
                return item.value.toLowerCase().includes(pesquisa.toLowerCase())
            })
            setProdutos(novaLista);
        }else{
            setProdutos(minhalista);
        }
        
    }
    ,[pesquisa])

    return (
        <div className="container">
            <h1>Pesquise na Lista</h1>
            <input className="input"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Faça sua pesquisa aqui">
            </input> 
            
            {produtos.map((item) => {
                return (
                    <div key={item.id}>
                        <h3>{item.value}</h3>
                    </div>
                )}
            )}
        </div>
    )
}

