import { Link } from 'react-router';

export function Template({ children}){
    return (
        <>
        <nav className="flex items-center py-2 px-4 shadow bg-black top-0 fixed w-full text-white "> 
        <a className="mr-2 p-2 hover:bg-primary" href="#about">Sobre</a>
        <a className="mr-2 p-2 hover:bg-primary" href="#prices">Preços</a>
        <a className="mr-2 p-2 hover:bg-primary" href="#features">Benefícios</a>
        <Link className="mr-5 py-2 px-4 bg-primary hover: shadow-inner text-white rounded ml-auto  shadow" to="/auth">Acessar</Link>
    </nav>
        {children}
        <footer>
            site criado por Maria
        </footer>
        </>
    )
}


export function Templatehome({ children}){
    return (
        <>
        <nav className="flex items-center py-2 px-4 shadow bg-black top-0 fixed w-full text-white "> 
        <a className="mr-2 p-2 hover:bg-primary" href="#about">Sobre</a>
        <a className="mr-2 p-2 hover:bg-primary" href="#prices">Preços</a>
        <a className="mr-2 p-2 hover:bg-primary" href="#features">Benefícios</a>
        <Link className="mr-5 py-2 px-4 bg-primary hover: shadow-inner text-white rounded ml-auto  shadow" to="/auth">Acessar</Link>
    </nav>
        {children}
        <footer>
            site criado por Maria
        </footer>
        </>
    )
}