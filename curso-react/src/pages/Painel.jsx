import { useState } from "react";

function Painel (){
    const [modal, setModal ] = useState(false)
    return(
        <>
        <h3 id="hello"></h3>

{  modal && (
    (<div 
        id="modalRegister" 
        className="fixed flex top-0 right-0 bottom-0 
            left-0  items-center justify-center bg-black/50 z-50">

        <div className="relative max-w-md w-full p-5 bg-about rounded-lg 
            shadow-md flex flex-col bg-white">

            <a id="btClose" 
                className="bg-red-500 absolute top-0 right-0 px-2 
                rounded-full cursor-pointer text-white"
                onClick={() => setModal (close)}>
                X
            </a>
            <h2>Cadastre um novo usuário</h2>

            <form className="flex flex-col" >
                Nome:
                <input id="iName" type="text" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Digite seu nome completo"/>
                Email:
                <input id="iEmail" type="email" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Digite o seu melhor email" />
                Senha:
                <input id="iPass" type="password" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Letra maiúscula e números" />
                Data de nascimento:
                <input id="iBirth" type="date" className="w-full rounded-lg border bg-white px-2 py-2 text-black" />
                <a id="formRegister" className="mt-5 bg-green-500 text-white text-center rounded-full py-2">Salvar</a>
            </form>
        </div>
    </div>)
)}
    <table>
        <thead className= "bg-green-100">
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
        </thead>
        <tbody id="listUsers" className="font-secundary">
           
        </tbody>
    </table>

    <a onClick={() => setModal (true)} className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

    <script src="user.js"></script>
    <script src="painel.js"></script>
        
        
        
        </>
    )
}

export default Painel;