import { useContext,  } from 'react'
import { Contexto1, Contexto2 } from '../my datas/myDatas';

const Home = () => {
    const { nome, isLogado, setIslogado, setNome, tema, chageTema, setChageTema } = useContext(Contexto1)
    const { nome2, isLogado2, setIslogado2, setNome2 } = useContext(Contexto2);
    
    return (
        <div className={` w-[50%] rounded-lg p-10 shadow-2xl ${chageTema ? tema : "bg-gray-100"}`}>
            <p>{nome}</p>
            <p>{nome2}</p>
            <p className='text-red-600'>{String(isLogado)}</p>
            <p className='text-blue-600'>{String(isLogado2)}</p>
            <button className='bg-green-800 rounded-md w-full p-5 flex items-center justify-center text-2xl mt-5 mb-5 text-gray-50' onClick={() => {
                setNome("Joana alves")
                setIslogado(!isLogado)
            }}>Mudar estado e nome 1 </button>
            <button className='bg-green-800 rounded-md w-full p-5 flex items-center justify-center text-2xl mt-5 mb-5 text-gray-50' onClick={() => {
                setNome2("fernanda")
                setIslogado2(!isLogado2)
            }}>Mudar estado 2 e nome 2 </button>
            <button className='bg-green-800 rounded-md w-full p-5 flex items-center justify-center text-2xl mt-5 mb-5 text-gray-50' onClick={() => {
                setChageTema(!chageTema)
            }}>Mudar tema </button>
        </div>
    )
}
export default Home