import React from 'react';
import '../assets/stylesheet.css'

function Home() {
    return (
        <div>
            <p>
                <h1 class="home-style">Seja bem vindo</h1>

                <h2>
                    O objetivo desse trabalho é apresentar um pouco da história e proposito da Linguagem Brasileira de Sinais, popularmente conhecida como Libras
                    (<spam class="libras-text">Libras</spam>), além de um pequeno tradutor de simbolos, que pode prover palavras de uma maneira rudimentar, mas a maioria
                    das expressões possui simbologias próprias.
                </h2>
            </p>
        </div>
    );
}

export default Home;