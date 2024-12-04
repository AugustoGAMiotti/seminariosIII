import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import imagem1 from '../assets/alfabeto-libras.png'
import imagem2 from '../assets/escola.jpg'
import imagem3 from '../assets/ptlib.jpg'
import imagem4 from '../assets/feneis.png'

function Learning() {
    return (
        <div>
            <br />
            <h1>Ensinando Libras</h1>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
            }}
            >
                <Box
                    component="img"
                    src={imagem1}
                    sx={{
                    width: '400px',
                    height: '300px',
                    borderRadius: '8px',
                }}
                />
                <Typography fontSize="30px">
                    O ensino de Libras é inicialmente aplicado a crianças com surdez, tornando Libras seu primeiro idioma e português o segundo.
                    Esse ensino é feito da maneira tradicional, utilizando figuras e livros para representar tanto letras separadas como simbolos especifícos.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
            }}
            >
                <Typography fontSize="30px">
                    Após o atendimento do publico prioritário, Libras é ensinado como disciplina opitativa com o objetivo de promover a inclusão e a interação entre crianças surdas e ouvintes.
                </Typography>
                <Box
                    component="img"
                    src={imagem2}
                    sx={{
                    width: '400px',
                    height: '300px',
                    borderRadius: '8px',
                }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
            }}
            >
                <Box
                    component="img"
                    src={imagem3}
                    sx={{
                    width: '400px',
                    height: '300px',
                    borderRadius: '8px',
                }}
                />
                <Typography fontSize="30px">
                    Atualmente diversas universidades oferecem cursos gratuitos de Libras e até mesmo graduação no idioma em conjunto com o curso Letras.
                    Desde o Decreto nº 5.626/2005, cursos de licenciatura e fonoaudiologia devem incluir Libras em sua grade curricular, 
                    promovendo sua disseminação entre futuros educadores e profissionais da área.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
            }}
            >
                <Typography fontSize="30px">
                    Graças aos avanços tecnologicos, hoje existem plataformas e ferramentas online/digitas capazes de oferecer auxilio e treinamento em Libras.
                    Cursos oferecidos por instituições como FENEIS (Federação Nacional de Educação e Integração dos Surdos) ajudam a difundir e ensinar a lingua.
                </Typography>
                <Box
                    component="img"
                    src={imagem4}
                    sx={{
                    width: '400px',
                    height: '300px',
                    borderRadius: '8px',
                }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
            }}
            >
                <Box
                    component="img"
                    src="https://play-lh.googleusercontent.com/So010tnLmEGl_Bjg9QhRNCu6cEL2eu4zx9npLEY2ZPzLU3KHG1jKOgdWgK0adUJK-A"
                    sx={{
                    width: '400px',
                    height: '300px',
                    borderRadius: '8px',
                }}
                />
                <Typography fontSize="30px">
                    VLibras é uma ferramenta pública e gratuita que traduz textos, áudios e vídeos do português para Libras. 
                    Foi desenvolvida pelo Laboratório de Aplicações de Vídeo Digital (LAVID) da Universidade Federal da Paraíba, 
                    em parceria com o Ministério da Economia.

                    Está disponível como extensão para navegadores, aplicativos móveis (iOS e Android), e para sistemas Windows e Linux.

                    <br />
                    <br />

                    Já o Hand Talk é um aplicativo e plataforma que realiza tradução do português para Libras usando um avatar 3D chamado Hugo.
                    radução de textos, áudios e imagens para Libras.

                    Está disponível para aplicativos móveis (iOS e Android), oferecendo tanto uma versão gratuita quanto um modelo pago para empresas.
                </Typography>
                <Box
                    component="img"
                    src="https://www.handtalk.me/br/wp-content/uploads/sites/8/2024/09/app-demo-hugo.png"
                    sx={{
                    width: '400px',
                    height: '300px',
                    borderRadius: '8px',
                }}
                />
            </Box>
        </div>
    );
}

export default Learning;