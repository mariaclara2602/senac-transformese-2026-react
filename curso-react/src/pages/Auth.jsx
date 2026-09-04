import { useState } from 'react';
import{Link} from 'react-router';
function Auth() {
    /*const [variavel, funcaoAlteraVariavel]= uSatate('valor inicial'); */
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mensagem, setMensagem] = useState("")


    function handleLogin(){
        const users = JSON.parse(localStorage.getItem('users'))
        let user = users.find(u =>{
            return u.email == email
        })

        if(!user){
            setMensagem("usuário não encontrado")
            return
        }

        if(user.senha == password){

            localStorage.setItem('logged', JSON.stringify(users))
            setUser({})

        }else{

             setMensagem("Senha inválida")

        }

    }


    return (
        <>
            <div className="bg-green-400 flex min-h-screen 
            items-center justify-center px-4 pt-20">

                <div className="w-full max-w-sm rounded-2xl bg-[#080F24] p-6 text-white shadow-2xl">

                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold">
                            <span className="text-white">Nutri </span> 
                            <span className="text-green-500">Connect</span>
                        </h1>
                        <form className="flex flex-col gap-5">
                            Email:

                        <input
                            id="iEmaillogin"
                            type="email"
                            value={email}
                            className="w-full rounded-lg border bg-white px-4 py-3 text-black outline-none"
                            placeholder="Digite o seu email cadastrado:"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                         
                        Senha:

                        <input
                            id="iPassLogin"
                            type="password"
                            value={password}
                            className="w-full rounded-lg border bg-white px-4 py-3 text-black outline-none"
                            placeholder="Digite sua senha:"
                            onChange={(e) => setPassword (e.target.value)}
                        />

                        <a
                            onClick={handleLogin}
                            className="mt-5 rounded-md bg-green-500 py-2 text-center font-bold text-white hover:bg-green-600"
                            
                        >
                            Entrar
                        </a>
                        </form>
                    </div>
                </div>
            </div>
            <script src="user.js"></script>
        </>
    )
}

export default Auth;