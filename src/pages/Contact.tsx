import React from 'react';
import '../css/Contact.css';

const Contato: React.FC = () => {
    return (
        <div className="container-contact">
            <h1>Entre em Contato</h1>
            <p>
                Para entrar em contato conosco, por favor, utilize as seguintes informações:
            </p>
            <ul>
                <li>Email: contato@example.com</li>
                <li>Telefone: (123) 456-7890</li>
                
            </ul>
        </div>
    );
};

export default Contato;
