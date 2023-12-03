import React from 'react';
import '../css/AboutUs.css';

const AboutUsPage: React.FC = () => {
  return (
    <div className='h1AboutUs'>
    <header>
    <img src="/Mind-Branco.png" alt= "Icone Mind Consulting" width={250} height={50}/>
      
    </header>
    <div className='split'>
        <section>
      <h2>Nossa História</h2>
      <p>
        A Mind Group, desde 2016, é líder no fornecimento de soluções tecnológicas inovadoras. Com um histórico de crescimento notável, atendemos clientes em seis países, oferecendo soluções personalizadas e eficientes.
      </p>
      <p>
        Na Mind Consulting, mantemos o compromisso com a excelência e a inovação. Estamos constantemente atualizados com as tendências do mercado, utilizando tecnologias de ponta para impulsionar ideias.
      </p>
    </section>

    <section className='rightSide'>
      <h2>Nossa Plataforma</h2>
      <p>
        Apresentamos com entusiasmo nossa nova plataforma educacional! Projetada para professores, permite login fácil, facilitando o cadastro de cursos personalizados. Hospede seus conteúdos, proporcione uma experiência de aprendizado inovadora e junte-se a nós na transformação digital da educação.
      </p>
      
      <p><img src="/Professor-rafiki.png" alt="A Teacher image." width={500}/></p>
    </section>

    </div>
    
  </div>
);
};
export default AboutUsPage;
