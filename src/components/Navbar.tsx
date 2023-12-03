import React, { useState } from 'react';
import { BrowserRouter as Link, useLocation} from 'react-router-dom';
import '../css/Navbar.css'

export function Navbar(){
    const { pathname } = useLocation();
    const slug = pathname.split("/")[1];
    return(
        <nav className="navbar">

            {slug.toLowerCase() === 'dashboard' && (
                <>
                    <div className="">
                    <h2>Seja bem vindo, <span id='professorName'>Jeser Caceres</span>!</h2>
                    </div>
                    <div className="rightSide">
                        <a href="/">Sair</a>
                    </div>
                </>
            )}
            
            {slug.toLowerCase() !== 'dashboard' && (
                <>
                    <div className="leftSide">
                        <img src="/book.png" alt="A book icon finded in https://www.iconfinder.com/search?q=study." width={30} height={30}/>
                        <h2>Next Level</h2>
                    </div>
                    <div className="rightSide">
                        <a href="/">Home</a>
                        <a href="/login">Login</a>
                        <a href="/signup">Cadastro</a>
                    </div>
                </>
            )}
        </nav>
    )
}
