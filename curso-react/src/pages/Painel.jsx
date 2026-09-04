import { useState } from "react";

function Painel (){
    const [modal, setModal ] = useState(false) 
    const [users, setUsers ] = useState([])
    const [user, setUser ] = useState({})



function handleRegister(){
    const newUsers = [...users, user];
    setUsers(newUsers)
    localStorage.setItem('users', JSON.stringify(newUsers))
    setUser({})

    setModal(false)
}

    return(
        <div>
        <h3 id="hello"></h3>

{  modal && (
    (<div 
        id="modalRegister" 
        className="fixed flex top-0 right-0 bottom-0 
            left-0  items-center justify-center bg-green-200 bg-opacity-75 z-50">

        <div className="relative max-w-md w-full p-10 bg-about rounded-lg 
            shadow-md flex flex-col bg-green-500">

            <a id="btClose" 
                className="bg-black absolute top-1 right-1 px-2 
                rounded-md cursor-pointer text-white"
                onClick={() => setModal (close)}>
                X
            </a>
            <h2 className="text-center text-2xl font-bold">Cadastre um novo usuário </h2>

            <form className="flex flex-col py-4 font-bold text-black" >
                Nome:
                <input onChange={(e) => setUser({...user, nome: e.target.value})} type="text" className="w-full rounded-lg border bg-white px-2 
                py-2 text-black" placeholder="Digite seu nome completo"/>
                Email:
                <input onChange={(e) => setUser({...user, email: e.target.value})}  type="email" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Digite seu email" />
                Senha:
                <input  onChange={(e) => setUser({...user, senha: e.target.value})}  type="password" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Letra maiúscula e números" />
                Data de nascimento:
                <input onChange={(e) => setUser({...user, nascimento: e.target.value})}  type="date" className="w-full rounded-lg border bg-white px-2 py-2 text-black" />

                <a onClick={handleRegister} className="mt-5 bg-black text-white font-bold text-center rounded-lg py-2">Salvar</a>

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
        
        
        
        </div>
    )
}

export default Painel;