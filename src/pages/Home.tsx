import '../css/Home.css'

export function Home(){
    return(
        <div className="home">
            <div className='container'>
                <div>
                    <h1>Bem vindo a <span className="purple">plataforma de gestão de cursos!</span></h1>
                    <h2>Crie sua conta e começe a dar aulas hoje mesmo.</h2>
                </div>
                <div>
                    <img src="/Nextlevel.png" alt="A platform course icon." width={300}/>
                </div>
            </div>
        </div>
    )
}
