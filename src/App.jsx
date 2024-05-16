import { useState } from 'react'

function App() {
  const [valor, setValor] = useState(''); // Adicionado estado para 'valor'
  const [resposta, setResposta] = useState({}); // Adicionado estado para 'resposta'

  let url = "https://brasilapi.com.br/api/cep/v1/";

  fetch(url + valor)
    .then(response => response.json())
    .then(data => {
      setResposta(data); // Atualiza o estado com a resposta
      console.log(resposta);
    })
    .catch((error) => {
      console.error('Erro:', error);
    });

  return (
    <main className='flex flex-col justify-center items-center w-full h-screen'>
      <header className='flex items-center w-full h-16 bg-slate-500'>
        <h1 className='text-white font-bold text-2xl ml-5'>CEP Finder</h1>
      </header>
      <main className='flex flex-col w-full h-full bg-slate-400'>
        <section className='flex flex-col justify-start items-center w-full h-full'>
          <div className='flex flex-col justify-center items-center mt-10'>
            <input 
              className='w-96 h-10 rounded pl-4 outline-none focus:border-blue-400 border-solid border-4' 
              type="text" 
              placeholder='Digite o CEP' 
              value={valor} 
              onChange={e => setValor(e.target.value)} // Atualiza 'valor' quando o input muda
            />
          </div>
          <div className='flex flex-col justify-center items-center rounded gap-2 w-96 p-2 text-white bg-slate-600 mt-8'>
            <p className='w-full text-center bg-slate-500 p-1 rounded'>{resposta.cep}</p> {/* Exemplo de como renderizar uma propriedade do objeto 'resposta' */}
            <p className='w-full text-center bg-slate-500 p-1 rounded'>Estado {resposta.state}</p>
            <p className='w-full text-center bg-slate-500 p-1 rounded'>Bairro {resposta.neighborhood}</p>
            <p className='w-full text-center bg-slate-500 p-1 rounded'>{resposta.street}</p>
          </div>
        </section>
      </main>
    </main>
  )
}

export default App
