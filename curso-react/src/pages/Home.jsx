import { Link } from "react-router";

function Home(){
return (                                                                                 //tudo dentro do () é html  //return apenas uma coisa só 

<>
    <nav className="flex items-center py-2 px-4 shadow bg-white top-0 fixed w-full "> 
        <a className="mr-2 p-2 hover:bg-primary" href="#about">Sobre</a>
        <a className="mr-2 p-2 hover:bg-primary" href="#prices">Preços</a>
        <a className="mr-2 p-2 hover:bg-primary" href="#features">Benefícios</a>
        <Link className="mr-5 py-2 px-4 bg-primary hover: shadow-inner text-white rounded ml-auto  shadow" to="/auth">Acessar</Link>
    </nav>


        <section id="about">
            <div className="max-w-lg   mx-auto  py-5">
                <h1 className="text-center"> Nutri Connect</h1>

                <div className="flex gap-8" >                            
                    <article>
                        <h3> Conheça um pouco do nosso app.</h3>
                         Nosso projeto terá dois planos, desenvolvidos para atender diferentes necessidades. 
                            Um deles vai ser voltado para pessoas com seletividade alimentar, oferecendo sugestões 
                            personalizadas de acordo com as preferências e escolhas de cada usuário, incluindo 
                            combinações de alimentos, texturas, cores e apresentação dos pratos.
                        
                    </article>

                    <article className="pt-5">
                         O segundo plano será voltado para nutricionistas, funcionando como uma ferramenta de 
                            apoio aos atendimentos. O aplicativo facilitará a comunicação com os pacientes, a 
                            organização das informações e o acompanhamento da evolução de cada pessoa, tornando 
                            o atendimento mais prático, eficiente e personalizado.
                        
                    </article>
                </div>

            </div>
        </section>

        <section id="prices">
            <div className="max-w-lg mx-auto py-5">
                <h2 className="text-center">Preços</h2>
                <div className="flex gap-8" >
                <article>
                    <h3> Valores para utilização do nosso App.</h3>
                    Ainda estamos definindo os valores do aplicativo, mas nosso objetivo é oferecer um preço
                        acessível aos usuários. Queremos garantir que o Nutri Connect tenha ferramentas de qualidade 
                        sem que o custo seja um obstáculo para quem precisa utilizar o aplicativo.
                   
                </article>

                <article className="pt-5">
                  Estamos buscando um modelo justo e sustentável, que permita manter o aplicativo funcionando e, ao mesmo 
                    tempo, investir em novas ferramentas e melhorias para atender cada vez melhor às necessidades dos usuários.
                    
                </article>
                </div>

            </div>
        </section>

        <section id="features">
            <div className="max-w-lg mx-auto py-5">
                <h2 className="text-center"> Benefícios</h2>
            <div className="flex gap-8" >
                <article>
                    <h3> Confira o que podemos agregar em sua vida. </h3>
                        O Nutri Connect busca tornar a alimentação mais leve, prática e personalizada, oferecendo
                         suporte para pessoas com seletividade alimentar. Entre os benefícios estão sugestões de acordo
                         com as preferências do usuário, refeições mais atrativas e maior autonomia nas escolhas alimentares.
                    
                </article>
                <article className="pt-5" >
                    
                      Para os nutricionistas, o aplicativo proporciona um acompanhamento mais organizado e eficiente,
                      facilitando a comunicação com os pacientes e tornando as consultas mais dinâmicas. Assim, buscamos
                      conectar pessoas, conhecimento e tecnologia para promover saúde e bem-estar.
                    
                </article>
                </div>
            </div>
        </section>



        </>
            )
}


export default Home;