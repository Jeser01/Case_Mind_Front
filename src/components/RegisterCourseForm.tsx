
import React, { useState } from 'react';
import axios from 'axios';
import '../css/RegisterCourseForm.css'

export function RegisterCourseForm(){
  
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseProfessor, setCourseProfessor] = useState('');
  const [imagem, setImagem] = useState(null);
  const [selectedProfessor, setSelectedProfessor] = useState('');

  const professores = [
    { id: 'jesser', nome: 'Jéser Cáceres' },
    { id: 'jane', nome: 'Jane Doe' },
    { id: 'elon', nome: 'Elon Musk' },
  ];

  const handleSelectChange = (event: any) => {
    setSelectedProfessor(event.target.value);
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setImagem(file);
  };


  return (
    <form  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='loginFormArea'>
        <input
          className='inputText'
          type="text"
          placeholder='Digite o nome do curso'
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <br />
        <input
          className='inputText'
          type="text"
          placeholder='Digite uma descrição para o curso'
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          required
        />
        <br />
        <select className='inputText' value={selectedProfessor} onChange={handleSelectChange}>
        <option value="">Selecione um professor</option>
        {professores.map((professor) => (
          <option 
          className='inputText' key={professor.id} value={professor.id}>
            {professor.nome}
          </option>
        ))}
      </select>
        <br />
        <label htmlFor="">Selecione uma imagem para o curso:</label>
        <input  className='inputText' type="file" onChange={handleFileChange} />
      </div>
      <button className='inputButton' type="submit">Salvar Curso</button>
    </form>
  );
}