import { useState } from 'react';
import{Link} from 'react-router';
function Auth() {
    /*const [variavel, funcaoAlteraVariavel]= uSatate('valor inicial'); */
    const [batatinha, setBatatinha] = useState(2);

function sub(){
    setBatatinha(batatinha -1)
}


    return (
        <>
            <div className="bg-green-400 flex min-h-screen 
            items-center justify-center px-4 pt-20">

                <div className="w-full max-w-sm rounded-2xl bg-[#080F24] p-6 text-white shadow-2xl">

                    <div className="mb-8 text-center">


                        <div className=' bg-blue-100 rounded-full p-2'onClick={sub}>-</div>
                        {batatinha}
                        <div className=' bg-green-100 rounded-full p-2' onClick={() => setBatatinha (batatinha +1)}>+</div>


                        <h1 className="text-3xl font-bold">
                            <span className="text-white">Nutri </span> 
                            <span className="text-green-500">Connect</span>
                        </h1>
                        <form className="flex flex-col gap-5">
                            Email:

                        <input
                            id="iEmaillogin"
                            type="email"
                            className="w-full rounded-lg border bg-white px-4 py-3 text-black outline-none"
                            placeholder="Digite o seu email cadastrado:"
                        />

                        Senha:

                        <input
                            id="iPassLogin"
                            type="password"
                            className="w-full rounded-lg border bg-white px-4 py-3 text-black outline-none"
                            placeholder="Digite sua senha:"
                        />

                        <Link
                            id="btLogin"
                            className="mt-5 rounded-md bg-green-500 py-2 text-center font-bold text-white hover:bg-green-600"
                            to="/painel"
                        >
                            Entrar
                        </Link>
                        </form>
                    </div>
                </div>
            </div>
            <script src="user.js"></script>
        </>
    )
}

export default Auth;