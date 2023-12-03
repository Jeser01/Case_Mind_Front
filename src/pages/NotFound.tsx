import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/NotFound.css'

export function NotFound(){
    const { pathname } = useLocation();
    const slug = pathname.substring(1); 
    return(
        <div className='notFound'>
            <div className='container'>
                <h1>OPS! Não foi possível encontrar uma pagina para <span className='purple'>"{slug}"</span></h1>
                <img src="/notFound.png" alt="NotFound Icon" width={700}/>
            </div>
        </div>
    )
}