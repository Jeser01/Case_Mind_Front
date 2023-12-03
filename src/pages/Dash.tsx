import React from 'react';
import { useLocation } from 'react-router-dom';
import { RegisterCourseForm } from '../components/RegisterCourseForm'
import '../css/Dash.css'

export function Dash(){
    const { pathname } = useLocation();
    const slug = pathname.split("/")[1];
    const userId = pathname.split("/")[2];
    console.log("Using: ", slug, userId)
    return (
        <div className='dashboard'>
            <div className='dashContainer'>
                <div className='dashLside'>
                    <h1>Seus Cursos</h1>
                    <div className='cards'>
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>Ciência da Computação Aplicada</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>React + Node.ts</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>API com Express</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>Ciência da Computação Aplicada</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>React + Node.ts</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>API com Express</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>Ciência da Computação Aplicada</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>React + Node.ts</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                        <div className='CourseCard'>
                            <img src="/courses.png" alt="" width={300} height={150}/>
                            <h2>API com Express</h2>
                            <hr />
                            <div>
                                <span><strong>Professor: </strong>Jéser Cáceres</span><br />
                                <span><strong>Categoria: </strong>Técnologia</span>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className='dashDside'>
                    <h1>Cadastrar Curso</h1>
                    <RegisterCourseForm />
                </div>
            </div>
        </div>
    )
}