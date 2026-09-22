import { useEffect, useState } from "react";
import {Link} from 'react-router';
import{ supabase } from '../../utils/supabase';

function Painel (){
    const [modal, setModal ] = useState(false) 
    const [users, setUsers ] = useState([])
    const [user, setUser ] = useState({})
    const [logged, setLogged]= useState ({})
    const [isEdit, setIsEdit] = useState (false)
     const [spiner, setSpiner] = useState (false)
    const [msg, setMsg] = useState('')

    useEffect(
        ()=>{
         const logged = JSON.parse (localStorage.getItem('logged'))
         setLogged(logged)
        },
        [] 
    );

    useEffect(() =>{
        const usersTemp = JSON.parse(localStorage.getItem('users'))
        if(usersTemp) setUsers(usersTemp)
    },[])

function updateUser(pUser){
    setModal(true)
    setUser(pUser)
}

async function handleRegister(){
    setSpiner(true)
    const {data: authData, error: authError} = await supabase.auth.signUp({
        email: user.email,
        password:user.senha
    });
  
    if(authError){
        setMsg (authError.message)
        setSpiner(false)
        return;
    }

    if(!authData){
        setMsg("Não foi possível cadastrar, verifique sua conexão")
        setSpiner(false)
        return;
    }

    const{ data: loginData, error: loginError} = await supabase.auth.signInWithPassword({ amail: user.email, password: user.senha })
}

 


    return(
    <div>
        <h3>Bem vindo(a), { logged?.nome }</h3>

{  modal && (
    (<div 
        className="fixed flex top-0 right-0 bottom-0 
            left-0  items-center justify-center bg-green-200 bg-opacity-75 z-50">

        <div className="relative max-w-md w-full p-10 bg-about rounded-lg 
            shadow-md flex flex-col bg-green-500">

            <a onAuxClick={()=> {
                setModal(false)
                 setIsEdit(false)
            }} 
                className="bg-black absolute top-1 right-1 px-2 
                rounded-md cursor-pointer text-white"
                onClick={() => setModal (close)}>
                X
            </a>
            <h2 className="text-center text-2xl font-bold">Cadastre um novo usuário </h2>


            {isEdit? (

            <form className="flex flex-col py-4 font-bold text-black" >
                Nome:
                <input value={user.nome} onChange={(e) => setUser({...user, nome: e.target.value})} type="text" className="w-full rounded-lg border bg-white px-2 
                py-2 text-black" placeholder="Digite seu nome completo"/>
                Email:
                <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}  type="email" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Digite seu email" />
                Senha:
                <input  onChange={(e) => setUser({...user, senha: e.target.value})}  type="password" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Letra maiúscula e números" />
                Data de nascimento:
                <input value={user.nascimento} onChange={(e) => setUser({...user, nascimento: e.target.value})}  type="date" className="w-full rounded-lg border bg-white px-2 py-2 text-black" />
                Cpf:
                <input value={user.cpf} onChange={(e) => setUser({...user, Cpf: e.target.value})} type="text" className="w-full rounded-lg border bg-white px-2 
                py-2 text-black" placeholder="Digite seu Cpf"/>
                Telefone:
                 <input value={user.telefone} onChange={(e) => setUser({...user, telefone: e.target.value})} type="text" className="w-full rounded-lg border bg-white px-2 
                py-2 text-black" placeholder="Digite seu Telefone"/>
                
                <a onClick={()=> setIsEdit(false)} className="mt-5 bg-black text-white font-bold text-center rounded-lg py-2 bg-red-500">Cancelar</a>
                <a onClick={handleRegister} className="mt-5 bg-black text-white font-bold text-center rounded-lg py-2"> {spiner? '...' : 'Salvar'}</a>
                    {msg}
            </form>): //else
            (
                <>
                    <p>Nome: {user.nome}</p>
                    <p>Email: {user.email}</p>
                    <p>Data de nascimento: {user.nascimento}</p>
                    <a onClick={() => setIsEdit(true)} className="mt-5 bg-black text-white font-bold text-center rounded-lg py-2 bg-black"> Salvar </a>
                </>
            )

            }
        </div>
    </div>)
)}
    <table>
        <thead className="">
            <tr>
            <th >Nome  </th>
            <th >Email </th>
            <th >Ações </th>
            </tr>
        </thead>

        <tbody className="font-secundary">
            {users.map( u=> (
            <tr>      
                <td>{u.nome}</td>
                <td>{u.email}</td>
                <td>

                <a className='cursor-pointer px-2 mx-3 hover: shadow shadow-md text-white rounded-full bg-green-500'
                onClick={()=> updateUser(u)}
                >V</a>

                <a className='cursor-pointer px-2 mx-3 hover: shadow shadow-md text-white rounded-full bg-red-500'>X</a>

                </td>

            </tr>

            ) ) }
        </tbody>
    </table>

    <a onClick={() => setModal (true)} className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>
    
        </div>
    )
}

export default Painel;