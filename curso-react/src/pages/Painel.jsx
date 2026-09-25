import { useEffect, useState } from "react";
import { Link } from 'react-router';
import { supabase } from '../../utils/supabase';

function Painel() {
    const [modal, setModal] = useState(false)
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})
    const [logged, setLogged] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [index, setIndex] = useState(-1)

    const [spiner, setSpiner] = useState(false)
    const [msg, setMsg] = useState('')

    useEffect(
        () => {
            const logged = JSON.parse(localStorage.getItem('logged'))
            setLogged(logged)
        }, []);

    useEffect(() => {
        loadusers()
    }, [])

    //READ-LER
    async function loadusers() {
        const { data, error } = await supabase.from('profiles').select('*')
        if (error) {
            setMsg(error.message)
            return;
        }

        setUsers(data)


    }

    async function editUser() {
        setSpiner(trur)
        const { data, error } = await supabase
            .from('profiles')
            .update(user)
            .eq('id', 'index');

            if(error){
                setMsg(error.message)
                setSpiner(false)
                return
            }

            setMsg("Usuário editado")
            setSpiner(false)
            loadusers()
    }

    function deleteUser(index) {

        const { error } = await supabase
            .from('profiles')
            .delete()
            .eq('id', 'index')

            if (error){
                 setMsg(error.message)
                setSpiner(false)
                return
            }
            
    }
    setUsers(newUsers)
    localStorage.getItem('users', JSON.stringify(newUsers))


}


function updateUser(user) {
    setModal(true)
    setUser(user)
    setIndex(user.id)
}

async function handleRegister() {
    setSpiner(true)
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email: user.email,
        password: user.password
    });

    if (authError) {
        //console.log(authError)
        setMsg(authError.message)
        setSpiner(false)

        return;
    }

    if (!authData) {
        setMsg("Não foi possível cadastrar, verifique a internet")
        setSpiner(false)
        return;
    }
    if (authError) {
        setMsg(authError.message)
        setSpiner(false)
        return;
    }

    if (!authData) {
        setMsg("Não foi possível cadastrar, verifique sua conexão")
        setSpiner(false)
        return;
    }

    const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({ email: user.email, password: user.password });

    const { error: profileError } = await supabase.from('profiles').insert({ ...user, user_id: loginData.user.id });

    if (profileError) {
        //console.log(authError)
        setMsg(profileError.message)
        setSpiner(false)
        return;
    }

    setSpiner(false)
    setMsg('cadastrado com sucesso')
}


return (
    <div>
        <h3>Bem vindo(a), {logged?.nome}</h3>

        {modal && (
            (<div
                className="fixed flex top-0 right-0 bottom-0 
            left-0  items-center justify-center bg-green-200 bg-opacity-75 z-50">

                <div className="relative max-w-md w-full p-10 bg-about rounded-lg 
            shadow-md flex flex-col bg-green-500">
                    <a onClick={() => {
                        setModal(false)
                        setIsEdit(false)
                        setUser({})
                        setIndex(-1)

                    }}
                        className="bg-prices absolute top-0 right-0  px-2 
                         rounded-full cursor-pointer ">
                        X
                    </a>
                    <h2 className="text-center text-2xl font-bold">Cadastre um novo usuário </h2>


                    {isEdit ? (

                        <form className="flex flex-col py-4 font-bold text-black" >
                            Nome:
                            <input value={user.name} onChange={(e) => setUser({ ...user, nome: e.target.value })} type="text" className="w-full rounded-lg border bg-white px-2 
                py-2 text-black" placeholder="Digite seu nome completo" />
                            {index == -1 && (
                                <>
                                    Email:
                                    <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Digite seu email" />
                                    Senha:
                                    <input onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" className="w-full rounded-lg border bg-white px-2 py-2 text-black" placeholder="Letra maiúscula e números" />
                                </>
                            )}

                            Data de nascimento:
                            <input value={user.birth_date} onChange={(e) => setUser({ ...user, birth_date: e.target.value })} type="date" className="w-full rounded-lg border bg-white px-2 py-2 text-black" />
                            Cpf:
                            <input value={user.cpf} onChange={(e) => setUser({ ...user, cpf: e.target.value })} type="text" className="w-full rounded-lg border bg-white px-2 
                py-2 text-black" placeholder="Digite seu Cpf" />
                            Telefone:
                            <input value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} type="text" className="w-full rounded-lg border bg-white px-2 
                py-2 text-black" placeholder="Digite seu Telefone" />

                            <a onClick={() => setIsEdit(false)} className="mt-5 bg-black text-white font-bold text-center rounded-lg py-2 bg-red-500">Cancelar</a>
                            <a onClick={
                                () => {
                                    if (index == -1)
                                        handleRegister()
                                    else
                                        editUser()
                                }
                            }
                                className="mt-5 bg-black text-white font-bold text-center rounded-lg py-2"> {spiner ? '...' : 'Salvar'}</a>
                            {msg}

                        </form>) : //else
                        (
                            <>
                                <p>Nome: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>Data de nascimento: {user.birth_date}</p>
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
                    <th >Data de nascimento </th>
                    <th >Telefone </th>
                    <th >Ações </th>
                </tr>
            </thead>

            <tbody className="font-secundary">
                {users.map((u) => (
                    <tr key={u.id} >
                        <td>{u.name}</td>
                        <td>{u.birth_date}</td>
                        <td>{u.phone}</td>
                        <td>

                            <a className='cursor-pointer px-2 mx-3 hover: shadow shadow-md text-white rounded-full bg-green-500'
                                onClick={() => updateUser(u)}
                            >V</a>

                            <a className="cursor-pointer px-3 mx-4 hover:shadow shadow-md text-white rounded-full bg-red-500"
                                onClick={() => deleteUser(u)}
                            >X</a>

                        </td>

                    </tr>

                ))}
            </tbody>
        </table>

        <a onClick={() => {
            setIsEdit(true)
            setModal(true)
        }} className="rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0"> + </a>

    </div>
)
}

export default Painel;