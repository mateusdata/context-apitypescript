import { Dispatch, SetStateAction, createContext, useState } from "react";
import Home from "../home/home";
interface DataContext1 {
  nome: string,
  setNome: Dispatch<SetStateAction<string>>,
  tema: string,
  setTema: Dispatch<SetStateAction<string>>,
  isLogado: boolean, 
  setIslogado: Dispatch<SetStateAction<boolean>>,
  chageTema: boolean , 
  setChageTema:  Dispatch<SetStateAction<boolean>>,
}
interface DataContext2 {
  nome2: string,
  setNome2: Dispatch<SetStateAction<string>>,
  isLogado2: boolean, 
  setIslogado2: Dispatch<SetStateAction<boolean>>
}
export const Contexto1 = createContext<DataContext1>({} as DataContext1);
export const Contexto2 = createContext<DataContext2>({} as DataContext2);

function MyDatas() {
  const [nome, setNome] = useState<string>("Mateus silva");
  const [nome2, setNome2] = useState<string>("Lucas mourin");
  const [isLogado , setIslogado] = useState<boolean>(false);
  const [isLogado2 , setIslogado2] = useState<boolean>(false);
  const [tema, setTema] = useState<string>("bg-gray-800");
  const [chageTema , setChageTema] = useState<boolean>(false);
  return (
   <Contexto1.Provider value={{nome,isLogado, setIslogado , setNome, tema, setTema, chageTema, setChageTema}}>
    <Contexto2.Provider value={{nome2,isLogado2, setIslogado2 , setNome2}}>
      <div className='bg-gray-400 min-h-screen flex items-center justify-center border border-red-600 p-5'>
        <Home/>
      </div>
    </Contexto2.Provider>
   </Contexto1.Provider>
  );
}
export default MyDatas;
