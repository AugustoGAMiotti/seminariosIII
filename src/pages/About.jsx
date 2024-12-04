import React from 'react';
import imagem from '../assets/aparencia.jpg'

function About() {
    return (
        <div>
            <h2>Projeto realizado utilizando React JS, por meio do vite e refatoração de alguns códigos</h2>
            <h2>Autor: Augusto Georges Adão Miotti</h2>
            <h2>Matéria: Seminários III</h2>
            <h2>Professor: Harison Herman Silva</h2>
            <h2>Obs: Não está bonito, já que...</h2>
            <img src={imagem} alt="Eu sei" />
        </div>
    );
}

export default About;
